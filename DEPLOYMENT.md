# GitHub Pages 部署说明

## 项目概况
这是一个简单的静态网站，包含以下核心文件：
- `index.html` - 网站主页
- `style.css` - 样式文件
- `script.js` - JavaScript交互文件

## 部署步骤

### 1. 代码推送（已完成）
代码已成功推送到GitHub仓库：
- 仓库地址：https://github.com/ruedelabougie/aisimbody.github.io
- 推送分支：master

### 2. 启用GitHub Pages

#### 登录GitHub并访问仓库
1. 打开浏览器，访问 [GitHub](https://github.com)
2. 登录您的GitHub账户
3. 导航到仓库：https://github.com/ruedelabougie/aisimbody.github.io

#### 配置GitHub Pages
1. 在仓库页面，点击顶部的 **Settings** 选项卡
2. 在左侧导航栏中，点击 **Pages** 选项
3. 在 **Build and deployment** 部分：
   - **Source**：选择 **Deploy from a branch**
   - **Branch**：
     - 从第一个下拉菜单选择分支：**master**（或 **main**，根据您的主分支名称）
     - 从第二个下拉菜单选择文件夹：**/(root)**
4. 点击 **Save** 按钮保存设置

### 3. 等待部署完成
- GitHub Pages会自动构建和部署您的网站
- 部署完成后，您会在GitHub Pages设置页面看到部署状态和访问URL
- 通常部署过程需要1-2分钟

### 4. 访问您的网站
部署完成后，您可以通过以下URL访问网站：
```
https://ruedelabougie.github.io/aisimbody.github.io
```

## 注意事项

1. **分支选择**：
   - 对于用户/组织GitHub Pages站点（username.github.io或orgname.github.io），GitHub默认使用main分支
   - 如果您使用master分支，需要确保在设置中明确选择master分支

2. **自定义域名**：
   - 如果您想使用自定义域名，可以在GitHub Pages设置中添加
   - 需要在您的域名注册商处配置相应的DNS记录

3. **更新网站**：
   - 当您推送到所选分支时，GitHub Pages会自动重新部署您的网站
   - 您可以在GitHub Actions中查看部署状态

4. **HTTPS支持**：
   - GitHub Pages默认提供HTTPS支持
   - 确保在设置中启用了 **Enforce HTTPS** 选项

## 故障排除

- 如果网站无法访问，请检查：
  - 分支选择是否正确
  - 仓库名称是否符合GitHub Pages要求（用户名或组织名.github.io）
  - 部署状态是否成功
  - 浏览器缓存是否需要清除

- 如果样式或脚本无法加载，请检查：
  - 文件路径是否正确（使用相对路径）
  - 文件名大小写是否正确（GitHub Pages区分大小写）

## 联系方式
如果您在部署过程中遇到问题，请联系项目管理员。