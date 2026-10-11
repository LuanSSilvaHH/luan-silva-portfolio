# Luan Silva | Desenvolvedor Web

Portfólio responsivo em React + Vite, com cinco projetos demonstrativos, serviços, processo de contratação e formulário de orçamento via WhatsApp.

## Rodar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

No Windows PowerShell, use `Copy-Item .env.example .env`.

## Ativar WhatsApp (necessário antes de publicar)

Edite `.env`:

```env
VITE_WHATSAPP_NUMBER=5531999999999
```

Troque pelo **seu** número, com DDI + DDD e sem espaços ou símbolos. O formulário gera uma mensagem personalizada e abre uma conversa com você no WhatsApp. Se o número não estiver configurado, o formulário exibe um aviso e não envia mensagens a um número incorreto.

No deploy Vercel/Netlify, configure a variável `VITE_WHATSAPP_NUMBER` nas configurações do projeto e gere um novo build.

## Publicar

```bash
npm run build
```

Na Vercel, importe o repositório GitHub, configure Framework Preset `Vite`, Build Command `npm run build` e Output Directory `dist`.

## Conteúdo e transparência

Os cinco links da seção Projetos são demonstrações. As imagens de capa são ilustrativas (Unsplash), **não** screenshots dos projetos nem prova de trabalho contratado. Substitua por capturas reais das demos quando possível.

## Personalização

- Projetos e links: `src/App.jsx` (`projects`)
- Serviços e processo: `src/App.jsx` (`services`, `steps`)
- Cores, layout e animações: `src/styles.css`
- SEO e título: `index.html`

Observação: fontes e imagens de capa externas exigem internet para carregar. O conteúdo e a navegação continuam funcionais sem elas.
