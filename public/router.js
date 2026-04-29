// Hash-based SPA router for static hosting (GitHub Pages, etc.)
(function () {
  'use strict';

  // Convert all internal links to hash-based links
  function convertLinks() {
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('data:')
      )
        return;
      if (link.dataset.hashified) return;
      link.dataset.hashified = '1';
      if (href.startsWith('/')) link.setAttribute('href', '#' + href);
    });
  }

  function getFetchPaths(path) {
    if (!path.startsWith('/')) path = '/' + path;
    path = path.replace(/#$/, '');
    var paths = [path + 'index.html', path];
    if (path.endsWith('/')) paths.push(path.slice(0, -1));
    return paths;
  }

  function extractContent(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var content = doc.querySelector('.z-10.relative');
    if (content) {
      var grid = content.querySelector('.pixel-grid');
      if (grid) grid.remove();
      return {
        html: content.innerHTML,
        title: doc.title || document.title,
      };
    }
    return {
      html: doc.body ? doc.body.innerHTML : html,
      title: doc.title || document.title,
    };
  }

  async function tryFetch(paths) {
    for (var i = 0; i < paths.length; i++) {
      try {
        var resp = await fetch(paths[i]);
        if (resp.ok) return resp;
      } catch (e) {}
    }
    return null;
  }

  async function doNavigate(hashPath) {
    var app = document.querySelector('.z-10.relative');
    if (!app) return;
    var path = (hashPath || '/').replace(/^#/, '');
    if (!path.startsWith('/')) path = '/' + path;

    app.style.opacity = '0.5';

    try {
      var paths = getFetchPaths(path);
      var response = await tryFetch(paths);
      if (!response) {
        app.style.opacity = '1';
        return;
      }

      var html = await response.text();
      var result = extractContent(html);
      var existingGrid = app.querySelector('.pixel-grid');

      // Use a temporary div to avoid script re-execution issues
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = '<div class="z-10 relative flex flex-col min-h-screen">' + result.html + '</div>';
      var newContent = tempDiv.firstElementChild;

      // Replace content preserving the pixel grid background
      if (existingGrid) {
        app.innerHTML = '';
        app.appendChild(existingGrid);
        // Move all children from newContent to app
        while (newContent.firstChild) {
          app.appendChild(newContent.firstChild);
        }
      } else {
        app.innerHTML = result.html;
      }

      if (result.title) document.title = result.title;

      convertLinks();

      // Update theme icons after navigation
      window.dispatchEvent(new Event('router-nav-complete'));

      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Navigation failed:', err);
    } finally {
      app.style.opacity = '1';
    }
  }

  function onHashChange() {
    var hash = window.location.hash || '#/';
    var path = hash.replace(/^#/, '') || '/';
    doNavigate(path);
  }

  // Intercept all hash-based link clicks at document level
  document.addEventListener(
    'click',
    function (e) {
      // Find closest <a> that starts with #
      var el = e.target;
      while (el && el !== document.body) {
        if (el.tagName === 'A') {
          var href = el.getAttribute('href');
          if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            e.stopPropagation();
            window.location.hash = href;
            return;
          }
          break;
        }
        el = el.parentElement;
      }
    },
    true // capture phase - intercept before it reaches the element
  );

  window.addEventListener('hashchange', onHashChange);

  function init() {
    convertLinks();
    if (window.location.hash && window.location.hash !== '#/') {
      onHashChange();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
