# ARCANA ÍNTIMA

**Clareza para o seu próximo passo**

Landing page para consultas de tarot online — projeto prático da aula de desenvolvimento web do Daora.

![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-success)

---

## Sobre o Projeto

Página de apresentação para um serviço de consultas de tarot online, com agendamento via WhatsApp. O foco principal é o **frontend SPA** — a API e o mockup existem apenas a caráter educativo para demonstrar a estrutura completa de um projeto fullstack.

**Objetivos didáticos:**
- Praticar React com Vite e TailwindCSS
- Entender a estrutura de um monorepo
- Explorar componentização com Radix UI
- Conhecer o fluxo de deploy (GitHub Pages, Vercel, Cloudflare)

---

## Arquitetura

```
┌─────────────────────────────────────────────┐
│              Frontend (SPA)                 │
│    React + Vite + TailwindCSS + Radix UI    │
│         ←.componente principal→             │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│           API Server (educativo)            │
│              Express + Drizzle              │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│           PostgreSQL (educativo)            │
└─────────────────────────────────────────────┘
```

> **Nota:** Para rodar apenas o frontend, não é necessário configurar banco de dados nem API.

---

## Stack Tecnológica

| Camada | Tecnologias | Observação |
|--------|------------|------------|
| **Frontend** | React 19, Vite 7, TailwindCSS 4, TypeScript | Componente principal |
| **UI** | Radix UI, Framer Motion, Lucide Icons, React Icons | Bibliotecas de interface |
| **Backend** | Express 5, Drizzle ORM, PostgreSQL | Apenas para estudo |
| **Validação** | Zod | Schemas compartilhados |
| **Build** | pnpm workspaces, esbuild | Monorepo |
| **Deploy** | GitHub Pages (principal), Vercel, Cloudflare Pages | Múltiplas opções |

---

## Pré-requisitos

### Mínimo (apenas frontend)

- [Node.js](https://nodejs.org/) 18+ 
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

> Não é necessário PostgreSQL ou qualquer backend para rodar e modificar o frontend.

### Se quiser rodar a API (opcional)

- PostgreSQL local ou externo
- Variável de ambiente `DATABASE_URL`

---

## Como Rodar

### 1. Instale as dependências

```bash
pnpm install
```

### 2. Inicie o desenvolvimento

```bash
pnpm dev
```

O frontend estará disponível em `http://localhost:5173`.

### 3. Build para produção

```bash
pnpm build:frontend
```

O output será gerado em `artifacts/consulta-tarot-online/dist/public`.

---

## Estrutura do Projeto

```
tarot-consulta/
├── artifacts/
│   ├── consulta-tarot-online/    # ← Frontend React (foco principal)
│   │   ├── src/
│   │   │   ├── App.tsx           # Componente principal da landing page
│   │   │   ├── components/       # Componentes reutilizáveis
│   │   │   ├── pages/            # Páginas da aplicação
│   │   │   ├── hooks/            # Hooks customizados
│   │   │   └── lib/              # Utilitários locais
│   │   ├── public/               # Assets estáticos
│   │   ├── index.html            # Entry point HTML
│   │   └── vite.config.ts        # Configuração do Vite
│   ├── api-server/               # API Express (educativo)
│   └── mockup-sandbox/           # Sandbox de testes (educativo)
├── lib/
│   ├── db/                       # Camada de banco - Drizzle ORM (educativo)
│   ├── api-spec/                 # Especificação da API (educativo)
│   ├── api-zod/                  # Validações Zod (educativo)
│   └── api-client-react/         # Cliente React para API (educativo)
├── scripts/                      # Scripts utilitários
├── package.json                  # Configurações do monorepo
├── pnpm-workspace.yaml           # Workspaces pnpm
└── vercel.json                   # Configuração Vercel
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o frontend em modo de desenvolvimento |
| `pnpm build` | Build completo (typecheck + todos os artefatos) |
| `pnpm build:frontend` | Build apenas do frontend |
| `pnpm typecheck` | Verificação de tipos em todos os módulos |
| `pnpm deploy:vercel` | Deploy via Vercel CLI |
| `pnpm deploy:cf` | Deploy via Cloudflare Pages |

---

## Deploy

O projeto já possui configurações de deploy para as 3 plataformas. Basta importar o repositório.

### GitHub Pages (automático)

- O workflow `.github/workflows/deploy.yml` já está configurado
- A cada push no `main`, o site é publicado automaticamente
- Habilitar **Settings > Pages > GitHub Actions** no repositório

> **Nota:** O build usa `BASE_PATH=/${{ github.event.repository.name }}/` automaticamente. Se renomear o repositório, o deploy continua funcionando sem ajustes.

### Vercel

- Importar o repositório em [vercel.com/new](https://vercel.com/new)
- O `vercel.json` configura build command e output directory automaticamente
- Deploy automático a cada push

### Cloudflare Pages

- Importar o repositório em **dash.cloudflare.com > Workers & Pages > Create**
- O `wrangler.toml` define project name e site bucket
- Configurar no dashboard:
  - **Build command:** `pnpm build:frontend`
  - **Build output directory:** `artifacts/consulta-tarot-online/dist/public`

---

## Personalizando o Projeto

### Alterar textos da landing page

Edite `artifacts/consulta-tarot-online/src/App.tsx`. Todos os textos visíveis estão neste arquivo:

- **Título principal:** tag `<h1>` na seção hero
- **Subtítulo:** tag `<p className="hero-subtitle">`
- **Descrição das consultas:** cards na seção "A CONSULTA"
- **Passos do processo:** cards na seção "Como acontece"
- **Call-to-action:** links com classe `whatsapp-cta`

### Alterar cores e estilos

O projeto usa TailwindCSS. As cores e estilos globais estão em `artifacts/consulta-tarot-online/src/index.css`.

### Trocar a imagem

Substitua o arquivo em `artifacts/consulta-tarot-online/attached_assets/` e atualize o import em `App.tsx`.

### Adicionar novas seções

1. Crie o componente em `src/components/`
2. Importe e adicione em `App.tsx`
3. Adicione a âncora de navegação no menu

---

## Aprendendo mais

- [React](https://react.dev/) — Documentação oficial do React
- [Vite](https://vitejs.dev/) — Ferramenta de build
- [TailwindCSS](https://tailwindcss.com/) — Framework CSS
- [Radix UI](https://www.radix-ui.com/) — Componentes primitivos
- [Drizzle ORM](https://orm.drizzle.team/) — ORM para PostgreSQL
- [pnpm](https://pnpm.io/) — Gerenciador de pacotas

---

Feito com &#10084;&#65039; na aula de desenvolvimento web do **Daora**.
