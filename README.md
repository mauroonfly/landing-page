# Onfly Savings Intelligence — Landing Page

Landing page institucional do produto **Onfly Savings Intelligence**: uma plataforma de inteligência de dados para gestão de viagens corporativas, focada em identificar e maximizar economias em passagens aéreas, hospedagens e compras corporativas.

## Sobre o projeto

A página apresenta métricas reais de economia (R$ 197 milhões), funcionalidades do produto, empresas monitoradas e uma chamada para demonstração. O público-alvo são gestores de viagens e finanças de grandes empresas brasileiras.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 + SWC |
| Estilo | Tailwind CSS 3 |
| Componentes | shadcn/ui (Radix UI) |
| Animações | Framer Motion |
| Roteamento | React Router v6 |
| Formulários | React Hook Form + Zod |
| Estado servidor | TanStack Query v5 |
| Testes unitários | Vitest + Testing Library |
| Testes E2E | Playwright |

## Estrutura

```
src/
├── pages/
│   ├── Index.tsx        # Página principal (compõe todas as seções)
│   └── NotFound.tsx     # Página 404
├── components/
│   ├── landing/
│   │   ├── Hero.tsx         # Hero com CTA e preview do dashboard
│   │   ├── Metrics.tsx      # Métricas de economia em 4 colunas
│   │   ├── Features.tsx     # Cards das 4 funcionalidades principais
│   │   ├── Companies.tsx    # Carrossel de empresas clientes
│   │   ├── CTA.tsx          # Seção de conversão final
│   │   └── Footer.tsx       # Rodapé
│   └── ui/              # Biblioteca de componentes shadcn/ui
├── hooks/               # Hooks customizados (mobile, toast)
├── lib/
│   └── utils.ts         # Utilitários (cn, classnames)
└── assets/
    └── hero-dashboard.jpg
```

## Instalação e uso

**Pré-requisitos**: Node.js 18+ ou Bun.

```bash
# Instalar dependências
npm install
# ou
bun install

# Servidor de desenvolvimento (porta 8080)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Testes

```bash
# Testes unitários
npm test

# Testes unitários em modo watch
npm run test:watch

# Testes E2E (Playwright)
npx playwright test
```

## Lint

```bash
npm run lint
```

## Tema e identidade visual

- **Primary** (`#0080ff`): azul Onfly — botões e destaques
- **Saving** (`#00d99f`): verde/teal — métricas de economia
- **Background** (`#f5f9ff`): azul acinzentado claro
- **Fonte**: Inter (Google Fonts)
- Suporte a dark mode via `next-themes` (configurado, não ativado na landing)

## Deploy

O projeto gera um site estático via `vite build`. O output fica em `dist/` e pode ser publicado em qualquer CDN ou hosting estático (Vercel, Netlify, Cloudflare Pages, etc.).
