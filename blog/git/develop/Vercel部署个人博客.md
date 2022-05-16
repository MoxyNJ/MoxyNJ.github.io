---
title: Vercel部署个人博客
date: 2022-05-11
authors: kuizuo
tags: [blog, vercel]
---

![image-20220511170700075](https://img.kuizuo.cn/image-20220511170700075.png)

:::tip 观前提醒

vercel 部署静态资源网站极其**方便简单**，并且有可观的**访问速度**，最主要的是**免费部署**。

如果你还没有尝试的话，强烈建议去使用一下。

:::

<!-- truncate -->

## [vercel 介绍](https://zhuanlan.zhihu.com/p/452654619)

## 注册账号

进入[Vercel](https://vercel.com)官网，先去注册一个账号，建议注册一个[Github](https://github.com/)账号后，使用 GIthub 账号来登录 Vercel。

## 部署网站

进入 [Dashboard](https://vercel.com/dashboard)

![image-20220511170233559](https://img.kuizuo.cn/image-20220511170233559.png)

点击 [New Project](https://vercel.com/new)

![image-20220511165902993](https://img.kuizuo.cn/image-20220511165902993.png)

这里可以从已有的 git repository 中导入，也可以选择一个模板。

这里登录我的 Github 账号选择仓库，然后点击 blog 仓库旁的 Import 即可。当然，你也可以直接拉取我的仓库，仓库地址：https://github.com/kuizuo/blog

![image-20220511165513526](https://img.kuizuo.cn/image-20220511165513526.png)

点击 Deploy，然后静等网站安装依赖以及部署，稍后将会出现下方页面。

![image-20220511170700075](https://img.kuizuo.cn/image-20220511170700075.png)

此时网站已经成功搭建完毕了，点击图片即可跳转到 vercel 所提供的二级域名访问。

是不是极其简单？甚至不需要你输入任何命令，便可访问构建好的网站。

## 自定义域名

如果有自己的域名，还可以在 vercel 中进行设置。

首先进入 blog 的控制台，在 Settings -> Domains 添加域名。

![image-20220511171144240](https://img.kuizuo.cn/image-20220511171144240.png)

接着提示域名需要 DNS 解析到 vercel 提供的记录值

![image-20220511171359148](https://img.kuizuo.cn/image-20220511171359148.png)

登录所在的域名服务商，根据 Vercel 提供的记录值 cname.vercel-dns.com，添加两条记录

![image-20220511172741663](https://img.kuizuo.cn/image-20220511172741663.png)

此时回到 Vercel，可以看到记录值成功生效。

![image-20220511172027570](https://img.kuizuo.cn/image-20220511172027570.png)

此时访问自己的域名，同样也能访问到页面，同时还有可观的访问速度。

### 自动颁发 SSL 证书

默认状态下，Vercel 将会颁发并自动更新 SSL 证书。（着实方便，不用自己手动去申请证书，同时配置证书）

![image-20220511172240999](https://img.kuizuo.cn/image-20220511172240999.png)

## 持续集成（CI）/持续部署（CD）

> To update your Production Deployment, push to the "main" branch.

当主分支有代码被推送，Vercel 将会重新拉取代码，并重新构建进行单元测试与部署（构建速度可观）

![image-20220511173442694](https://img.kuizuo.cn/image-20220511173442694.png)

## Serverless

同时 vercel 还支持 serverless，也就是说，不仅能部署静态站点，还能部署后端服务，不过肯定有一定的限制。

[Vercel 部署 Serverless](/develop/Vercel部署Serverless)

## Vercel CLI

有时候并不想登录网页，然后新建项目，选择仓库，拉取部署，而是希望直接在项目下输入命令来完成部署。vercel 自然肯定提供相对应的脚手架 **[CLI](https://vercel.com/docs/cli)** 供开发者使用。

安装

```
npm i -g vercel
```

在项目根目录中输入

```
vercel --prod
```

第一次将进行登录授权，选择对应平台，将会自动打开浏览器完成授权，接着将会确认一些信息，一般默认回车即可，下为执行结果

```
Vercel CLI 24.2.1
? Set up and deploy “F:\Project\React\online-tools”? [Y/n] y
? Which scope do you want to deploy to? kuizuo
? Link to existing project? [y/N] n
? What’s your project’s name? online-tools
? In which directory is your code located? ./
Auto-detected Project Settings (Create React App):
- Build Command: react-scripts build
- Output Directory: build
- Development Command: react-scripts start
? Want to override the settings? [y/N] n
🔗  Linked to kuizuo12/online-tools (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/kuizuo12/online-tools/6t8Vt8rG3waGVHTKU7ZzJuGc6Hoq [2s]
✅  Production: https://online-tools-phi.vercel.app [copied to clipboard] [2m]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/kuizuo12/online-tools/settings
```

执行完毕后，将会在根目录创建.vercel 文件夹，其中 project.json 中存放 orgId 和 projectId，下面将会用到。此时在[dashboard](https://vercel.com/dashboard)中也能看到该项目被部署了。

不过这样部署上去的代码，并不会连接 git 仓库，需要到控制台中选择仓库即可。

如果想在 github actions 中使用，则新建一个 steps，设置好对应的变量。

```
	- name: Deploy to Vercel
        run: npx vercel --token ${{VERCEL_TOKEN}} --prod
        env:
            VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
            VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
            VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
```

还有一个 VERCEL_TOKEN 需要到 [Vercel Settings Tokens](https://vercel.com/account/tokens) 新建一个 Token。
