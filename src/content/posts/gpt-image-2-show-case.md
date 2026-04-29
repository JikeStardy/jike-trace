---
title: "GPT-Image-2 新人入门指南"
date: 2026-04-29
description: "面向 AIGC 新人的 GPT-Image-2 使用指南，涵盖核心能力展示、提示词编写方法论和可直接复用的模板库。"
tags: ["gpt-image-2", "aigc", "prompt", "教程"]
categories: ["技术"]
draft: false
---

# GPT-Image-2 新人入门指南

> 本指南整理自 [awesome-gpt-image](https://github.com/ZeroLu/awesome-gpt-image)、[awesome-gpt-image-2](https://github.com/canghe/awesome-gpt-image-2)、[awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/GPT-Image-2-Prompts) 三个开源项目，旨在帮助 AIGC 新人快速掌握 GPT-Image-2 的使用技巧。

---

## Part 0：认识 GPT-Image-2

### 0.1 什么是 GPT-Image-2？

GPT-Image-2 是 OpenAI 最新的图像生成模型，能够将文字描述转化为高度写实的图像、游戏截图、UI 界面、海报和艺术插画。相比前代版本，它在以下方面有显著提升：

| 能力项 | v1.5 | v2 |
|--------|------|-----|
| 照片真实感 | 良好 | 优秀 |
| 文字渲染 | 有限 | 清晰，支持多语言 |
| 风格遵循度 | 中等 | 强 |
| 复杂构图 | 基础 | 高级 |
| 中文文字 | 常出现乱码 | 准确 |

### 0.2 核心优势

- 逼真的照片级输出，模拟真实光影和纹理
- 精准复刻游戏美学（GTA、塞尔达、黑神话悟空）
- 高保真的 UI 界面和社交媒体 mockup
- 清晰的多语言文字渲染（中文、英文均可）
- 多张图像间保持角色一致性

---

## Part 1：快速上手

### 1.1 基础提示词结构

```
[主体], [风格], [细节]
```

**示例：**
```
A cozy coffee shop interior, warm afternoon sunlight, photorealistic
```

### 1.2 常用画幅比例

| 比例 | 适用场景 |
|------|----------|
| 1:1 | 方形图片、头像 |
| 16:9 | 横版海报、风景摄影 |
| 9:16 | 竖版内容、手机故事 |
| 4:5 | Instagram 竖版 |
| 3:4 | 人像摄影 |

### 1.3 你的第一个提示词

**摄影类：**
```
A 35mm film photograph of a barista making coffee in a dimly lit vintage cafe,
rain visible through the window, Kodak Portra 400, cinematic lighting
```

**UI 界面类：**
```
Generate a high-fidelity iOS fitness app interface with dark mode theme,
card-based activity feed, bottom navigation bar, neon green accents,
readable text, 9:16 aspect ratio
```

---

## Part 2：核心能力展示

以下示例均附有 GitHub 原始图片链接，可直接查看效果。

### 2.1 摄影与写实

GPT-Image-2 能够生成具有自然光影和逼真质感的真实照片。

**示例 1：活动摄影**
![Apple Park Keynote](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/apple-park-tim-cook-keynote.jpg)

> **提示词示例：**
> Generate a wide shot of Tim Cook presenting at an Apple keynote event,
> stage lighting, audience perspective, professional event photography style

---

**示例 2：纪实摄影**
![Handwritten Notes](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/black-pen-handwritten-notes.jpg)

> **提示词示例：**
> A close-up photograph of handwritten notes on cream paper,
> black ink pen, coffee stains on the edges, natural light,
> shallow depth of field, analog photography aesthetic

---

### 2.2 UI 与界面设计

GPT-Image-2 能够生成高保真的应用界面和社交媒体 mockup。

**示例 3：自定义风格 UI 系统**
![Custom Style UI System](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/custom-style-ui-system.jpeg)

> **提示词示例：**
> Generate a complete UI design system for a meditation app,
> iOS style, soft purple and white color scheme, minimalist icons,
> card-based layout, bottom tab navigation, readable Chinese and English text

---

**示例 4：赛博古风社交媒体**
![Song Dynasty Cyber Social Feed](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/song-dynasty-cyber-social-feed.jpg)

> **提示词示例：**
> A social media feed interface designed in Song Dynasty aesthetic,
> Chinese calligraphy, traditional patterns, modern UI structure,
> mix of ancient and futuristic elements, clean typography

---

### 2.3 信息图与数据可视化

**示例 5：城市代谢图集**
![Urban Metabolism Atlas](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case1.jpg)

> **提示词示例：**
> 生成"城市代谢"信息图，目标读者为普通大众。
> 结构：标题区 + 等距剖面图，12 个编号面板。
> 图表类型：流程图 + 关系图，主色低饱和度，背景浅色纸张质感。
> 输出：信息层级清晰、可读性高的中文信息图。

---

**示例 6：博物馆级中文拆解信息图**
![Museum-level Chinese Disassembly Infographic](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/museum-level-chinese-disassembly-infographic.jpeg)

> **提示词示例：**
> A museum-quality infographic showing the complete disassembly
> of a traditional Chinese object, detailed annotations in Chinese,
> scientific illustration style, parchment background, numbered parts

---

### 2.4 电商与产品展示

**示例 7：电商产品页面**
![E-commerce Product Page](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case2.jpg)

> **提示词示例：**
> 生成电商首页界面，产品类型为运动鞋，
> 视觉风格：极简科技风，主色白色，强调色橙色。
> 布局：顶部导航 + 双栏产品卡片，信息层级清晰，留白充足。
> 输出：高保真 UI 截图，文字清晰可读，16:9 比例。

---

### 2.5 插画与艺术

**示例 8：插画风格**
![Illustration Example](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case6.jpg)

> **提示词示例：**
> 创作奇幻题材插画，主角为龙与骑士。
> 画风：厚涂写实，线条细腻，配色浓烈。
> 背景：简洁山巅场景，构图大气。
> 输出：可用于封面的高质量插画。

---

### 2.6 角色设计与一致性

**示例 9：官方角色参考表**
![Official Character Reference Sheet](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/official-character-reference-sheet.jpeg)

> **提示词示例：**
> Generate a 16-panel character expression reference sheet,
> anime style female character, consistent face and proportions,
> black and white linework, each panel showing different expression,
> technical reference sheet format

---

**示例 10：关键角色关系图**
![Key Character Relationship Map](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/key-character-relationship-map.jpeg)

> **提示词示例：**
> A character relationship diagram for a fantasy novel,
> multiple characters with Chinese names, connection lines showing relationships,
> elegant illustration style, parchment aesthetic, clear hierarchy

---

### 2.7 历史与古风题材

**示例 11：青花瓷图解**
![Jingdezhen Blue & White Porcelain](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/jingdezhen-blue-white-porcelain-diagram.jpeg)

> **提示词示例：**
> An educational diagram showcasing Jingdezhen blue and white porcelain,
> detailed Chinese annotations, traditional patterns,
> museum exhibition style, cream background

---

### 2.8 品牌与营销

**示例 12：电影海报风格电商页**
![Terminator Taobao Page](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/terminator-taobao-page.jpeg)

> **提示词示例：**
> A Taobao product page with Terminator movie poster aesthetic,
> dark sci-fi style, dramatic lighting on product,
> Chinese product text, futuristic UI elements

---

### 2.9 直播与社交

**示例 13：刘亦菲抖音直播截图**
![Liu Yifei Douyin Live Chat](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/liu-yifei-douyin-live-chat.jpg)

> **提示词示例：**
> Generate a Douyin live streaming screenshot of a famous actress,
> split screen layout with live video and chat messages,
> realistic skin tones, studio lighting, Chinese interface elements

---

### 2.10 建筑与空间

**示例 14：建筑效果图**
![Architecture Example](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case166.jpg)

> **提示词示例：**
> Generate a modern cabin interior design render,
> exposed concrete, large floor-to-ceiling glass windows,
> snowy pine forest visible outside, warm interior lighting,
> golden hour, Unreal Engine 5 style, hyper-realistic

---

### 2.11 品牌视觉

**示例 15：品牌识别系统**
![Brand Identity Example](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case100.jpg)

> **提示词示例：**
> 为一个 AI 科技品牌设计完整品牌视觉方案。
> 品牌关键词：创新、简约、可信赖。
> 包含：Logo（几何图形融合）、辅助图形、主辅色、应用示意。
> 风格：现代高级，行业：AI 技术，受众：专业用户。
> 输出：纯白背景的品牌识别视觉图。

---

## Part 3：提示词编写方法论

### 3.1 五要素框架

每一个优秀的提示词都包含以下五个要素：

| 要素 | 说明 | 示例 |
|------|------|------|
| **主体 (Subject)** | 主要拍摄对象是什么？ | "一位 30 岁咖啡师" |
| **环境 (Environment)** | 在什么场景/地点？ | "昏暗的古董咖啡馆" |
| **风格 (Style)** | 什么美学风格？ | "35mm 胶片摄影" |
| **技术规格 (Technical)** | 相机、镜头、光圈、灯光 | "Sony A7R IV, 50mm, f/1.4" |
| **情绪 (Mood)** | 传达什么情感？ | "疲惫但温暖" |

### 3.2 提示词检查清单

提交前检查：
- [ ] 主体明确定义
- [ ] 环境/地点已说明
- [ ] 光线描述（自然光、棚拍、黄昏等）
- [ ] 相机/镜头类型或拍摄类型
- [ ] 风格参考（如适用）
- [ ] 画幅比例已指定
- [ ] 文字内容清晰说明
- [ ] 关键细节无遗漏

### 3.3 从基础到高级

**基础：**
```
a cat
```

**更好：**
```
an orange cat on a wooden windowsill, afternoon sunlight
```

**高级：**
```
photorealistic shot of a fluffy orange tabby on a weathered wooden windowsill,
soft golden hour sunlight from the right, shallow depth of field,
shot on Canon 5D Mark IV with 85mm f/1.8 lens, warm color grade,
subtle film grain, skin pores detail for authenticity
```

### 3.4 常用技巧

- **加瑕疵**：加入"皮肤纹理"、"雀斑"、"胶片颗粒"提升真实感
- **用参数说话**：用 `f/1.4` 代替"浅景深"，用 `50mm` 代替"半身照"
- **锁定文字**：要求"文字绝对可读，必须显示指定的 [具体文字]"
- **禁止 moodboard**：明确要求"Single poster only"避免生成多方案展示板

---

## Part 4：模板库

以下是 6 个最实用的提示词模板，可直接复制使用。

### 4.1 UI 与界面模板

**文本模板：**
```
为[产品类型]生成一张[平台，如 iOS/Android/Web]界面图。
核心功能：[功能点A]、[功能点B]、[功能点C]。
视觉风格：[极简/科技/拟物]，主色[颜色]，强调色[颜色]。
布局：[顶部导航/双栏/卡片流]，信息层级清晰，留白充足。
输出：高保真 UI 截图，文字清晰可读，比例[9:16/16:9]。
```

**JSON 模板（Agent 调用推荐）：**
```json
{
  "type": "UI Screenshot",
  "platform": "iOS",
  "product": "Fitness App",
  "layout": "Card-based feed with bottom tab bar",
  "style": {
    "theme": "Dark Mode",
    "primary_color": "Neon Green"
  },
  "constraints": "High fidelity, readable text, 9:16 aspect ratio"
}
```

**避坑：**
- 不要给模糊指令，明确"平台 + 比例 + 布局"
- 强制文字锁定，要求"文字绝对可读"

---

### 4.2 信息图模板

**文本模板：**
```
生成[主题]信息图，目标读者为[人群]。
结构：标题区 + [3-5]个模块（每模块含图标、短标题、1-2句说明）。
图表类型：[流程图/对比图/关系图/时间线]。
风格：[专业报告/科普插画]，主色[颜色]，背景[浅色/深色]。
输出：信息层级清晰、可读性高的中文信息图。
```

**JSON 模板：**
```json
{
  "type": "Infographic",
  "topic": "Urban Metabolism",
  "audience": "General Public",
  "structure": {
    "title_area": "城市生命系统图谱",
    "modules": [
      {"title": "能源", "icon": "lightning", "text": "Power flows"},
      {"title": "水循环", "icon": "water_drop", "text": "Water flows"}
    ]
  },
  "style": {
    "aesthetic": "Scientific atlas",
    "colors": "Low saturation"
  },
  "constraints": "No gibberish text, strict structural layout"
}
```

**避坑：**
- 控制模块数量，避免信息溢出
- 图表场景使用短句文案，不要塞大段正文

---

### 4.3 概念字体海报模板

**文本模板：**
```
Create ONE finished premium conceptual typography poster for the exact title:

"[标题/词语/短句]"

Single poster only. No moodboard, grid, or sample labels.

The title must be the dominant visual structure: huge, readable, powerful.
Typography is the hero. Design custom-looking letterforms whose weight, width,
contrast, spacing, rhythm express the temperament of the title.

Use a restrained 4-6 color system.
Composition: high-end editorial poster, museum-quality graphic design,
dramatic scale, strong hierarchy, intelligent whitespace.

Avoid generic word art, cluttered collage, and misspelled typography.
```

**避坑：**
- 先锁标题，必须拼写完全正确且成为主视觉
- 图像要和字互动，嵌入、遮挡或穿过字形

---

### 4.4 摄影写实模板

**文本模板：**
```
拍摄主题：[人物/物品/街景]，场景为[地点]。
摄影参数风格：[35mm/85mm]，[浅景深/深景深]，[纪实/电影感]。
光线：[自然光/夜景霓虹/逆光]，情绪：[情绪词]。
细节要求：[肤质/材质/颗粒感]。
输出：高写实摄影风格图像。
```

**JSON 模板：**
```json
{
  "type": "Hyper-realistic Photography",
  "subject": {
    "description": "A weary 30-year-old barista wiping a coffee cup",
    "details": "Subtle sweat on forehead, detailed skin pores, denim apron"
  },
  "setting": "Dimly lit vintage cafe, rain visible through window",
  "camera_specs": {
    "gear": "Sony A7R IV, 50mm lens",
    "aperture": "f/1.4 (shallow depth of field)",
    "lighting": "Cinematic, neon sign reflecting on wet window"
  },
  "film_aesthetic": "Kodak Portra 400 emulation, subtle film grain"
}
```

**避坑：**
- 加点瑕疵（皮肤纹理、雀斑、胶片颗粒）提升真实感
- 用参数说话（f/1.4、50mm）而非模糊描述

---

### 4.5 角色设定模板

**文本模板：**
```
设计[角色身份]角色设定图。
外观：[年龄/发型/服饰/配件]，性格：[关键词]。
姿态：[站姿/动态动作]，表情：[情绪]。
世界观：[时代/阵营/职业]，标志性元素：[元素]。
输出：角色主视图 + 风格统一的人设图。
```

**JSON 模板：**
```json
{
  "type": "Character Concept Art",
  "character": {
    "identity": "Cybernetic Bounty Hunter",
    "appearance": "Short silver hair, glowing red synthetic left eye",
    "attire": "Tactical trench coat with neon piping"
  },
  "pose": "Dynamic action stance, looking over shoulder",
  "style": "Concept art, sharp linework, vibrant cyberpunk palette"
}
```

**避坑：**
- 拆解五官，不要只写"很美的女孩"
- 写清服装材质（丝绸、机能防风面料等）

---

### 4.6 电商主图模板

**文本模板：**
```
生成[商品名]电商主图，卖点为[卖点1]、[卖点2]。
场景：[纯色棚拍/生活方式场景]，镜头：[特写/半身/全景]。
材质细节：[材质关键词]，灯光：[柔光/侧光/轮廓光]。
附加元素：[价格角标/卖点icon/促销文案]。
输出：电商平台可直接使用的商品展示图。
```

**JSON 模板：**
```json
{
  "type": "E-commerce Hero Image",
  "product": {
    "name": "Wireless Headphones",
    "material": "Matte black finish with metallic accents",
    "angle": "3/4 profile, floating slightly"
  },
  "setting": {
    "background": "Minimalist studio, soft gray gradient",
    "lighting": "Softbox overhead, sharp rim light"
  },
  "copywriting": {
    "badges": ["NEW", "$299"],
    "slogan": "Silence the World"
  },
  "constraints": "Commercial photography quality, hyper-realistic"
}
```

**避坑：**
- 材质和光影是灵魂，必须堆叠材质和灯光关键词
- 促销文案只给核心 1-2 句，字多了画面就毁了

---

## Part 5：精选画廊

按类别整理的参考图库，方便按需查找。

### 摄影与写实

| 示例 | 图片 |
|------|------|
| Apple Park 发布会 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/apple-park-tim-cook-keynote.jpg) |
| 手写笔记纪实 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/black-pen-handwritten-notes.jpg) |

### UI 与界面

| 示例 | 图片 |
|------|------|
| 自定义风格 UI 系统 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/custom-style-ui-system.jpeg) |
| 宋代赛博社交 Feed | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/song-dynasty-cyber-social-feed.jpg) |
| 电商首页 | ![](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case2.jpg) |

### 信息图

| 示例 | 图片 |
|------|------|
| 城市代谢图集 | ![](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case1.jpg) |
| 博物馆级拆解图 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/museum-level-chinese-disassembly-infographic.jpeg) |

### 插画与艺术

| 示例 | 图片 |
|------|------|
| 插画作品 | ![](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case6.jpg) |

### 角色设计

| 示例 | 图片 |
|------|------|
| 官方角色参考表 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/official-character-reference-sheet.jpeg) |
| 角色关系图 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/key-character-relationship-map.jpeg) |

### 历史与古风

| 示例 | 图片 |
|------|------|
| 青花瓷图解 | ![](https://raw.githubusercontent.com/ZeroLu/awesome-gpt-image/main/assets/opennana/jingdezhen-blue-white-porcelain-diagram.jpeg) |

### 品牌与营销

| 示例 | 图片 |
|------|------|
| 品牌识别系统 | ![](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case100.jpg) |

### 建筑与空间

| 示例 | 图片 |
|------|------|
| 建筑效果图 | ![](https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/images/case166.jpg) |

---

## Part 6：资源与社区

### 6.1 官方文档

- [OpenAI 图像生成文档](https://platform.openai.com/docs/guides/image-generation)
- [OpenAI API 参考](https://platform.openai.com/docs/api-reference/images)

### 6.2 开源项目

| 项目 | 描述 |
|------|------|
| [awesome-gpt-image](https://github.com/ZeroLu/awesome-gpt-image) | GPT Image 精选提示词库，12 个精选案例 |
| [awesome-gpt-image-2](https://github.com/canghe/awesome-gpt-image-2) | GPT-Image-2 结构化提示词库，361 个案例 + 14 个模板 |
| [awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/GPT-Image-2-Prompts) | 社区精选提示词集，292 个案例来自 X/Twitter |

### 6.3 社区

- X/Twitter: #GPTImage2
- 关注上游项目获取最新案例和技巧

### 6.4 学习路径

1. 从 Part 1 快速上手开始
2. 浏览 Part 2 核心能力展示获取灵感
3. 学习 Part 3 方法论理解原理
4. 使用 Part 4 模板开始你的第一个项目
5. 参考 Part 5 画廊查找类似案例

---

> 本指南基于开源社区贡献整理，欢迎提交 PR 或 Issue 帮助完善。
