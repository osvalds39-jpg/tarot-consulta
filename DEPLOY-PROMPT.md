# Prompt: Configurar Deploy Frontend para Vercel + Cloudflare Pages + GitHub Pages

Cole este prompt em outro projeto que use **pnpm monorepo + Vite + React SPA** para configurar deploy no Vercel, Cloudflare Pages e GitHub Pages.

---

## Prompt

```
Configure este projeto para deploy do frontend (SPA Vite+React) no Vercel, Cloudflare Pages e GitHub Pages.

Passos:

1. Encontre o arquivo vite.config.ts do frontend (geralmente em artifacts/*/vite.config.ts ou packages/*/vite.config.ts).

2. No vite.config.ts, substitua as validações obrigatórias de PORT e BASE_PATH por defaults:
   - PORT: usar `process.env.PORT || '5173'`
   - BASE_PATH: usar `process.env.BASE_PATH || '/'`
   - Remova os `throw` quando essas variáveis estiverem ausentes.

3. Crie vercel.json na raiz do projeto:
   {
     "buildCommand": "cd artifacts/NOME_DO_FRONTE && pnpm build",
     "outputDirectory": "artifacts/NOME_DO_FRONTE/dist/public",
     "framework": null,
     "installCommand": "pnpm install",
     "rewrites": [{ "source": "/((?!assets/).*)", "destination": "/index.html" }]
   }
   Substitua NOME_DO_FRONTE pelo nome real da pasta do frontend.

4. Crie wrangler.toml na raiz do projeto:
   name = "NOME_DO_PROJETO"
   compatibility_date = "2024-01-01"

   [site]
   bucket = "./artifacts/NOME_DO_FRONTE/dist/public"
   Substitua NOME_DO_PROJETO e NOME_DO_FRONTE.

5. Crie .github/workflows/deploy.yml:
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup pnpm
           uses: pnpm/action-setup@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: pnpm

         - name: Install dependencies
           run: pnpm install --frozen-lockfile

         - name: Build frontend
           run: pnpm build:frontend
           env:
             BASE_PATH: /${{ github.event.repository.name }}/

         - name: Setup Pages
           uses: actions/configure-pages@v5

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: artifacts/NOME_DO_FRONTE/dist/public

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4

   Substitua NOME_DO_FRONTE pelo nome da pasta do frontend.

6. No package.json raiz, adicione os scripts de deploy:
   "build:frontend": "cd artifacts/NOME_DO_FRONTE && pnpm build",
   "deploy:vercel": "vercel --prod",
   "deploy:cf": "wrangler pages deploy artifacts/NOME_DO_FRONTE/dist/public --project-name=NOME_DO_PROJETO"

7. No .gitignore, adicione:
   .vercel
   .wrangler

8. Verifique o build rodando: pnpm build:frontend

Notas:
- O "rewrites" no vercel.json garante que rotas client-side (React Router, wouter) funcionem.
- O wrangler.toml com [site] bucket aponta para o output do Vite.
- O "framework": null no vercel.json evita que o Vercel tente detectar framework automaticamente (monorepo confunde a detecção).
- O GitHub Pages usa BASE_PATH automático via `${{ github.event.repository.name }}` — não precisa configurar manualmente.
- Para GitHub Pages, ative "GitHub Pages" nas Settings > Pages do repo, Source: "GitHub Actions".
- Se o output do Vite for diferente de dist/public, ajuste o outputDirectory, bucket e path do upload-pages-artifact.
```

---

## Exemplo de uso

Cole o prompt acima em outro projeto e substitua:
- `NOME_DO_FRONTE` → nome da pasta do frontend (ex: `consulta-tarot-online`, `landing-page`)
- `NOME_DO_PROJETO` → slug do projeto para Cloudflare (ex: `meu-projeto`)

Se o projeto tiver apenas um package (não é monorepo), ajuste os caminhos removendo `artifacts/NOME_DO_FRONTE/`.

## Pré-requisitos por plataforma

| Plataforma | O que precisa configurar no repo |
|---|---|
| **Vercel** | Importar repo no vercel.com, Framework: "Other", Root Directory vazio |
| **Cloudflare** | Conectar repo no dash → Pages → Create project → Build command: `pnpm build:frontend` |
| **GitHub Pages** | Settings → Pages → Source: "GitHub Actions" (sem选择 branch) |

## Deploy

```bash
# Vercel (manual)
pnpm deploy:vercel

# Cloudflare Pages (manual)
pnpm deploy:cf

# GitHub Pages
# Automático via push na branch main (GitHub Actions)
```
