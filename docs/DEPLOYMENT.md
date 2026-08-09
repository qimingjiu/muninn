# 雾尼 Muninn · Demo 公开部署指南

> 目的：为 GOAI 参赛材料提供 `https://` 可访问的 Demo 链接

---

## 方案对比

| 方案 | 复杂度 | 成本 | 是否支持实时 LLM | 推荐度 |
|---|---|---|---|---|
| A. Vercel 静态部署 | 低 | 免费 | 否（预计算模式完整演示） | ⭐⭐⭐⭐ |
| B. Vercel + Serverless Function | 中 | 免费额度内 | 是 | ⭐⭐⭐⭐ |
| C. 自有服务器 / 国内云 | 高 | 需域名/服务器 | 是 | ⭐⭐⭐ |

**建议**：初赛先用方案 A，因为 Demo 的预计算脚本已能完整演示全部功能；复赛如需要实时 LLM 效果，再升级到方案 B。

---

## 方案 A：Vercel 静态部署（推荐）

### 前置条件

- 一个 GitHub 账号
- 仓库已 push 到 GitHub（公开仓库即可，Vercel Hobby 免费）

### 步骤

1. **把当前仓库 push 到 GitHub**

```bash
cd D:\kimi\workspace\GOAI-muninn
git init
git add .
git commit -m "init: GOAI-muninn demo"
git branch -M main
git remote add origin https://github.com/你的用户名/GOAI-muninn.git
git push -u origin main
```

2. **登录 Vercel**

访问 https://vercel.com/login，用 GitHub 账号登录。

3. **导入项目**

- 点击「Add New Project」
- 选择 `GOAI-muninn` 仓库
- Framework Preset 选择「Vite」
- Build Command 保持默认 `vite build`
- Output Directory 保持默认 `dist`
- 点击「Deploy」

4. **获得域名**

部署完成后，Vercel 会生成类似：

```
https://goai-muninn-你的用户名.vercel.app
```

这就是可直接填到 GOAI 报名系统的 Demo 链接。

### 说明

- 预计算脚本模式在静态部署下完全可用，所有 Demo 步骤都能跑通
- 实时 LLM 需要后端代理，静态部署不支持（见方案 B）

---

## 方案 B：Vercel + Serverless Function（支持实时 LLM）

如果希望评委体验实时 LLM 判定，需要把 `/moonshot` 代理也部署为 Serverless Function。

### 步骤

1. 在仓库根目录创建 `api/moonshot.js`：

```js
// api/moonshot.js
export default async function handler(req, res) {
  const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.KIMI_API_KEY}`,
    },
    body: JSON.stringify(req.body),
  })
  const data = await response.json()
  res.status(response.status).json(data)
}
```

2. 在 Vercel Dashboard → Project Settings → Environment Variables 中添加：

```
KIMI_API_KEY=sk-你的-Moonshot-API-Key
```

3. 修改 `src/engine/llm.ts` 中的请求地址：

```ts
const resp = await fetch('/api/moonshot', { ... })
```

4. 重新部署即可。

---

## 方案 C：国内服务器 / 对象存储

### 对象存储 + CDN（适合静态）

- 阿里云 OSS / 腾讯云 COS / 华为云 OBS
- 上传 `dist/` 目录
- 开启静态网站托管
- 绑定自定义域名 + HTTPS 证书
- 获得 `https://` 链接

### 自有服务器

- 把 `dist/` 目录放到 Nginx / Caddy 目录
- 配置 SSL 证书
- 如果需要实时 LLM，再跑一个 Node.js 代理服务

---

## 常见问题

**Q：评委打不开 Vercel 怎么办？**

A：Vercel 默认域名在国内部分地区可能访问较慢。可以：
- 绑定自定义域名（如通过 Cloudflare DNS）
- 或使用国内云对象存储

**Q：静态部署下 Demo 会不会缺功能？**

A：不会。Demo 设计时就考虑了「预计算脚本兜底」策略，关闭实时 LLM 后所有演示步骤都能正常走完。

**Q：需要后端吗？**

A：预计算模式不需要；实时 LLM 需要后端代理（为了保护 API Key 不暴露到前端）。

---

## 当前仓库构建产物

运行：

```bash
npm run build
```

产物在 `dist/` 目录，可直接上传到任何静态托管服务。
