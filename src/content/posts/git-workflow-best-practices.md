---
title: "Git Workflow Best Practices for Solo Developers"
date: 2024-04-28
description: "A practical guide to maintaining clean Git history and effective branching strategies when working on personal projects."
tags: ["git", "workflow", "productivity"]
categories: ["工程化"]
draft: false
---

# Git Workflow Best Practices for Solo Developers

Even when working alone, a clean Git history pays dividends. Here are practices I follow.

## Commit Message Convention

```bash
feat(auth): add OAuth2 login support
fix(api): resolve race condition in user cache
docs(readme): update installation instructions
refactor(utils): simplify date formatting logic
```

## Useful Aliases

```ini
[alias]
  st = status -sb
  co = checkout
  br = branch
  ci = commit
  lg = log --oneline --graph --decorate
  undo = reset --soft HEAD~1
```

## Daily Workflow

```bash
git pull origin main
git checkout -b feature/new-post
git add -p
git commit -m "feat(post): add terminal design article"
git push origin feature/new-post
```

Clean Git history makes debugging, code review, and project archaeology much easier.
