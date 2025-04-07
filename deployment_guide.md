# 网站部署指南

本指南将帮助您将技术风格个人网站部署到互联网上，以便任何人都可以访问。以下提供了几种常用的部署方法，您可以根据自己的需求选择最适合的一种。

## 方法一：使用 GitHub Pages 部署（推荐，免费）

GitHub Pages 是一个免费的静态网站托管服务，非常适合个人网站的部署。

### 步骤：

1. **创建 GitHub 账号**（如果您还没有）
   - 访问 [GitHub](https://github.com/) 并注册账号

2. **创建新的代码仓库**
   - 登录后，点击右上角的 "+" 图标，选择 "New repository"
   - 仓库名称设置为：`username.github.io`（将 username 替换为您的 GitHub 用户名）
   - 设置为公开仓库（Public）
   - 点击 "Create repository"

3. **上传网站文件**
   - 在仓库页面，点击 "uploading an existing file" 链接
   - 将解压后的网站文件（index.html、assets 文件夹等）拖拽到上传区域
   - 添加提交信息（如："Initial website upload"）
   - 点击 "Commit changes"

4. **访问您的网站**
   - 几分钟后，您的网站将在 `https://username.github.io` 上线（将 username 替换为您的 GitHub 用户名）

### 更新网站：

- 要更新网站，只需重复上传步骤，上传新的或修改过的文件即可

## 方法二：使用 Netlify 部署（免费，更多功能）

Netlify 提供免费的静态网站托管，并有更多高级功能。

### 步骤：

1. **创建 Netlify 账号**
   - 访问 [Netlify](https://www.netlify.com/) 并注册账号（可以使用 GitHub 账号直接登录）

2. **部署网站**
   - 登录后，在 Netlify 控制面板点击 "Add new site" > "Deploy manually"
   - 将解压后的网站文件夹拖拽到上传区域
   - Netlify 会自动处理上传和部署

3. **自定义域名**（可选）
   - 部署完成后，Netlify 会分配一个随机域名（如 `random-name.netlify.app`）
   - 您可以点击 "Domain settings" 更改为自定义子域名（如 `your-name.netlify.app`）
   - 也可以连接您自己购买的域名

### 更新网站：

- 要更新网站，可以重新上传整个站点，或使用 Netlify CLI 工具进行更新

## 方法三：使用传统虚拟主机

如果您已经有虚拟主机服务（如阿里云、腾讯云等提供的虚拟主机），也可以使用FTP上传网站文件。

### 步骤：

1. **准备FTP客户端**
   - 下载并安装FTP客户端软件，如 [FileZilla](https://filezilla-project.org/)

2. **连接到您的虚拟主机**
   - 使用主机提供商给您的FTP服务器地址、用户名和密码连接

3. **上传网站文件**
   - 将解压后的网站文件（index.html、assets 文件夹等）上传到虚拟主机的网站根目录（通常是 `public_html` 或 `www` 文件夹）

4. **访问您的网站**
   - 使用您的域名访问网站

## 方法四：使用 Vercel 部署（免费，适合前端项目）

Vercel 是另一个流行的静态网站托管平台，特别适合前端项目。

### 步骤：

1. **创建 Vercel 账号**
   - 访问 [Vercel](https://vercel.com/) 并注册账号（可以使用 GitHub 账号直接登录）

2. **部署网站**
   - 登录后，点击 "New Project"
   - 选择 "Upload" 选项
   - 将解压后的网站文件夹上传
   - 点击 "Deploy" 按钮

3. **访问您的网站**
   - 部署完成后，Vercel 会提供一个域名（如 `your-project.vercel.app`）

## 故障排除

如果您在部署过程中遇到问题，以下是一些常见问题的解决方法：

1. **文件路径问题**
   - 确保所有文件路径正确，特别是CSS、JavaScript和图片文件的引用路径
   - 在GitHub Pages上，如果您的仓库不是在根目录，可能需要调整路径

2. **404错误**
   - 检查index.html文件是否在根目录
   - 确认文件名大小写正确（某些服务器区分大小写）

3. **样式或脚本未加载**
   - 打开浏览器开发者工具（F12），查看控制台是否有错误
   - 检查网络标签页，查看是否有资源加载失败

4. **HTTPS问题**
   - 确保所有外部资源（如字体、CDN等）都使用HTTPS而不是HTTP

如果您需要进一步的帮助，可以参考各平台的官方文档或联系他们的支持团队。
