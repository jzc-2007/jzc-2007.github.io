# 网站内容修改指南

本指南将帮助您修改和自定义技术风格个人网站的内容、样式和功能。无论您是想更新个人信息、调整设计风格，还是添加新的功能，本指南都将提供详细的步骤说明。

## 文件结构概览

首先，了解网站的文件结构非常重要：

```
tech-personal-website/
├── index.html             # 主HTML文件，包含网站结构和内容
├── assets/
│   ├── css/
│   │   └── style.css      # 样式表文件，控制网站外观
│   └── js/
│       └── main.js        # JavaScript文件，控制交互功能
├── deployment_guide.md    # 部署指南
└── content_guide.md       # 本文件（内容修改指南）
```

## 1. 修改个人信息

### 基本信息修改

要更新您的个人信息，需要编辑 `index.html` 文件：

1. **修改姓名和标题**：
   ```html
   <!-- 侧边栏中的姓名和标题 -->
   <h2 class="name">Zhicheng Jiang</h2>
   <p class="title">MIT '28 | Math & CS</p>
   
   <!-- 英雄区域的标题 -->
   <h1 class="hero-title">I'm <span class="highlight">Zhicheng Jiang</span></h1>
   ```

2. **修改个人简介**：
   ```html
   <!-- 关于我部分 -->
   <div class="about-text">
       <p>I am Zhicheng Jiang from China, an undergraduate student in MIT Class of 2028...</p>
       <!-- 更多段落... -->
   </div>
   ```

3. **修改联系信息**：
   ```html
   <!-- 社交媒体链接 -->
   <div class="social-links">
       <a href="mailto:your-email@example.com" class="social-icon" target="_blank">...</a>
       <a href="https://github.com/" class="social-icon" target="_blank">...</a>
       <a href="https://linkedin.com/" class="social-icon" target="_blank">...</a>
   </div>
   
   <!-- 联系部分 -->
   <div class="contact-item">
       <div class="contact-icon"><i class="fas fa-envelope"></i></div>
       <div class="contact-text">
           <h3>Email</h3>
           <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
       </div>
   </div>
   ```

### 教育背景修改

要更新教育背景信息，找到 `<section id="education">` 部分：

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-date">2024 - Present</div>
    <div class="timeline-content">
        <h3>Massachusetts Institute of Technology</h3>
        <p>Undergraduate, Double Major in Mathematics and Computer Science</p>
        <div class="timeline-courses">
            <h4>Core Courses:</h4>
            <ul>
                <li>6.S978(G) Deep Generative Models (2024 Fall)</li>
                <!-- 更多课程... -->
            </ul>
        </div>
    </div>
</div>
```

添加或修改时间线项目，只需复制现有的 `timeline-item` 结构并修改内容。

### 技能修改

要更新技能部分，找到 `<section id="skills">` 部分：

```html
<div class="skill">
    <div class="skill-name">C++</div>
    <div class="skill-bar">
        <div class="skill-level" style="width: 90%"></div>
    </div>
</div>
```

技能水平通过 `width` 属性控制，范围从 0% 到 100%。

### 项目和出版物修改

要更新项目或出版物，找到相应的部分并修改内容：

```html
<!-- 项目卡片示例 -->
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">VideoStyleTransfer</h3>
        <div class="project-links">
            <a href="https://github.com/" class="project-link" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <p class="project-description">Deep Learning Course Project focused on...</p>
    <div class="project-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">PyTorch</span>
        <span class="tech-tag">Computer Vision</span>
    </div>
</div>

<!-- 出版物项目示例 -->
<div class="publication-item">
    <h3 class="publication-title">Is Noise Conditioning Necessary in Denoising Generative Models?</h3>
    <p class="publication-authors">Zhicheng Jiang, et al.</p>
    <div class="publication-links">
        <a href="#" class="publication-link">arXiv</a>
    </div>
    <p class="publication-abstract">This research explores the necessity of noise conditioning...</p>
</div>
```

## 2. 修改样式和设计

### 修改颜色方案

网站的颜色方案在 `style.css` 文件的 `:root` 部分定义：

```css
:root {
  /* 主色调 */
  --primary-color: #1E3A8A;
  --primary-light: #3B82F6;
  --primary-dark: #1E40AF;
  
  /* 辅助色 */
  --bg-light: #F3F4F6;
  --bg-dark: #1F2937;
  --text-light: #F9FAFB;
  --text-dark: #111827;
  --text-muted: #6B7280;
  
  /* 强调色 */
  --accent-cyan: #06B6D4;
  --accent-purple: #8B5CF6;
  
  /* 更多颜色变量... */
}
```

要更改网站的颜色方案，只需修改这些变量的值。例如，要将主色调改为绿色：

```css
--primary-color: #047857;  /* 深绿色 */
--primary-light: #10B981;  /* 浅绿色 */
--primary-dark: #065F46;   /* 更深的绿色 */
```

### 修改字体

字体也在 `:root` 部分定义：

```css
/* 字体 */
--font-mono: 'JetBrains Mono', monospace;
--font-sans: 'Inter', sans-serif;
--font-code: 'Fira Code', monospace;
```

要更改字体，修改这些变量并确保在 HTML 头部引入新字体（如果使用 Google Fonts）：

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Code+Pro:wght@400;500;700&display=swap" rel="stylesheet">
```

然后在 CSS 中更新字体变量：

```css
--font-mono: 'Source Code Pro', monospace;
--font-sans: 'Roboto', sans-serif;
```

### 修改布局和间距

要调整布局和间距，可以修改相应的 CSS 类。例如，要更改部分之间的间距：

```css
.section {
  padding: 5rem 10%;  /* 上下5rem，左右10% */
  min-height: 100vh;
  /* 其他属性... */
}
```

## 3. 修改功能和交互

### 修改打字效果

打字效果在 `main.js` 文件中配置：

```javascript
function initTypewriter() {
  const options = {
    strings: [
      'MIT Undergraduate Student',
      'Math & Computer Science Major',
      'AI & Machine Learning Enthusiast',
      'IMO Gold Medalist',
      'Researcher in Generative Models'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  };
  
  // 检查元素是否存在
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    new Typed('.typed-text', options);
  }
}
```

要修改打字效果的文本，只需更改 `strings` 数组中的内容。

### 添加新的部分

要添加新的部分，可以复制现有部分的 HTML 结构并修改内容：

1. 在 `index.html` 中添加新部分：
   ```html
   <!-- 新部分 -->
   <section id="new-section" class="section">
       <div class="section-header">
           <h2 class="section-title">New Section</h2>
           <div class="section-divider"></div>
       </div>
       <div class="new-section-content">
           <!-- 新内容 -->
       </div>
   </section>
   ```

2. 在导航栏中添加链接：
   ```html
   <ul class="nav-links">
       <!-- 现有链接 -->
       <li><a href="#new-section"><i class="fas fa-star"></i> New Section</a></li>
   </ul>
   ```

3. 在 `style.css` 中添加相应的样式：
   ```css
   /* 新部分样式 */
   .new-section-content {
       /* 样式定义 */
   }
   ```

## 4. 添加图片和媒体

### 添加个人照片

要替换默认的头像：

1. 准备您的照片，建议使用正方形图片
2. 将图片放在 `assets/images/` 目录下（如果目录不存在，请创建）
3. 修改 HTML 中的头像部分：
   ```html
   <div class="profile-img">
       <img src="assets/images/your-photo.jpg" alt="Zhicheng Jiang">
   </div>
   ```
4. 删除或注释掉原来的占位符头像：
   ```html
   <!-- 删除或注释这部分
   <div class="avatar">ZJ</div>
   -->
   ```

### 添加项目截图

要为项目添加截图：

1. 将项目截图放在 `assets/images/projects/` 目录下
2. 修改项目卡片：
   ```html
   <div class="project-card">
       <img src="assets/images/projects/project-screenshot.jpg" alt="Project Screenshot" class="project-image">
       <!-- 其他项目内容... -->
   </div>
   ```
3. 在 CSS 中添加相应的样式：
   ```css
   .project-image {
       width: 100%;
       height: auto;
       border-radius: var(--radius-md);
       margin-bottom: 1rem;
   }
   ```

## 5. 高级自定义

### 添加新的JavaScript功能

要添加新的JavaScript功能，可以在 `main.js` 文件中添加新函数，并在 `DOMContentLoaded` 事件中初始化：

```javascript
// 添加新功能
function initNewFeature() {
    // 功能实现
}

// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 现有初始化
    
    // 添加新功能初始化
    initNewFeature();
});
```

### 添加第三方库

要添加第三方库，可以使用CDN链接在HTML头部引入：

```html
<!-- 在head部分添加 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>
```

然后在JavaScript中使用这些库：

```javascript
// 使用Chart.js创建图表
function initSkillChart() {
    const ctx = document.getElementById('skillChart').getContext('2d');
    const skillChart = new Chart(ctx, {
        // 图表配置
    });
}
```

## 6. 测试和调试

在进行任何修改后，请务必在本地测试您的网站：

1. 在浏览器中打开 `index.html` 文件
2. 使用浏览器的开发者工具（F12）检查任何错误
3. 测试网站在不同设备尺寸下的响应式表现
4. 确保所有链接和功能正常工作

## 7. 常见问题解答

### 如何添加新的图标？

本网站使用Font Awesome图标。要添加新图标：

1. 访问 [Font Awesome Icons](https://fontawesome.com/icons) 查找图标名称
2. 使用以下格式添加图标：
   ```html
   <i class="fas fa-icon-name"></i>
   ```

### 如何修改深色模式颜色？

深色模式的颜色在 `style.css` 文件的 `.dark-mode` 部分定义：

```css
.dark-mode {
  --primary-color: #3B82F6;
  --primary-light: #60A5FA;
  --primary-dark: #2563EB;
  
  --bg-light: #111827;
  --bg-dark: #030712;
  --text-light: #F9FAFB;
  --text-dark: #F3F4F6;
  --text-muted: #9CA3AF;
}
```

修改这些变量可以自定义深色模式的颜色方案。

### 如何添加新的语言？

如果您想添加多语言支持，需要：

1. 为每种语言创建单独的HTML文件（如 `index-zh.html`）
2. 添加语言切换按钮
3. 使用JavaScript处理语言切换逻辑

或者，您可以使用翻译库如 i18next 实现更复杂的多语言支持。

## 结语

通过本指南，您应该能够自定义和修改您的技术风格个人网站。如果您有任何问题或需要进一步的帮助，请随时联系我们。

祝您的网站取得成功！
