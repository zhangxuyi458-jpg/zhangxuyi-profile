# 张旭艺个人学术主页

基于 Next.js App Router 构建的响应式个人简历网站，可直接部署到 Vercel。

## 本地运行

环境要求：Node.js 22.13 或更高版本、pnpm 11。

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
pnpm start
```

## Vercel 部署

1. 将本目录推送至 GitHub、GitLab 或 Bitbucket。
2. 在 Vercel 中选择 **Add New → Project**，导入对应仓库。
3. Framework Preset 保持 **Next.js**，其余设置使用项目内 `vercel.json` 即可。
4. 点击 **Deploy**。

项目不依赖环境变量或外部数据库。图片与视频位于 `public/images/`，页面使用相对路径引用。手机端布局断点位于 `app/globals.css`。
