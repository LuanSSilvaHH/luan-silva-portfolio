# Luan Silva | Desenvolvedor Web

Portfólio responsivo desenvolvido em React + Vite, com cinco demonstrações publicadas, serviços oferecidos, processo de contratação e solicitação de orçamento por WhatsApp.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Projetos em destaque

As capas da seção **Projetos** são montagens com **capturas reais das páginas iniciais** das demonstrações hospedadas (não são fotos genéricas, nem trabalhos contratados):

| Projeto | Link |
| --- | --- |
| NOIR Auto Studio | https://demoautomobilistica.netlify.app/ |
| Leal Climatização | https://democlimatiza.netlify.app/ |
| VittaFisio | https://demo-fisio-wine.vercel.app/ |
| PRUMO Engenharia Civil | https://demo-engenharia-civil.vercel.app/ |
| Lanche do IEIÉ | https://web--ieie-app--nw8yr2c7byc6.code.run/ |

Todos são projetos demonstrativos; marcas e fotografias de serviços podem ser ilustrativas dentro de cada demo.

Os cards são configurados em `src/App.jsx`, na constante `projects`. As imagens otimizadas em WebP ficam em `public/projects`.

### Atualizar as capturas

No Windows, execute `capture-demos.ps1`, que abre as URLs públicas no Chrome em modo headless, e depois `render-covers.py` converte e enquadra as capturas em WebP. Não use o script quando os projetos estiverem fora do ar.

As capturas correspondem ao estado dos sites na data em que foram realizadas e podem ficar desatualizadas quando as demonstrações forem reformuladas.

## WhatsApp do portfólio

Configure seu número no arquivo `.env` ou nas variáveis da Vercel:

```env
VITE_WHATSAPP_NUMBER=5531999999999
```

Substitua pelo seu número com DDI e DDD, sem espaços ou símbolos.

## Personalização

- Cards e links: `src/App.jsx`
- Estética e animações: `src/styles.css`, `src/brand-refresh.css` e `src/cinematic-v2.css`
- Metadados e SEO: `index.html`
- Capturas: `public/projects/*.webp`
