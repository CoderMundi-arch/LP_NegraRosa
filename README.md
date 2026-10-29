# Black Negra Rosa — Landing Page (Boutique Moda Feminina)

React + Vite + TypeScript + Tailwind CSS v4 + Motion + Lucide.

## Configurar (um único arquivo: `src/config.ts`)
- `VIP_GROUP_URL` — link do Grupo VIP do WhatsApp (todos os CTAs usam esta constante).
- `GA4_ID` / `META_PIXEL_ID` — opcionais. Preenchidos, os scripts são carregados e os cliques disparam
  `join_vip_group` (GA4), `Lead` (Meta Pixel) e `vip_cta_click` (dataLayer) com o local do CTA
  (`hero`, `closing`).
- `CAMPAIGN_START` / `CAMPAIGN_END` — datas com offset `-03:00` (Brasília), independentes do fuso do visitante.

## Antes de publicar
- Em `index.html`, troque `https://SEU-DOMINIO.com.br` (canonical e og:image).
- Substitua a foto: coloque a foto original SEM textos em `src/assets/model.png` e rode `node optimize-images.mjs`.
- Teste o contador: `/?now=2026-11-06T12:00:00-03:00` (durante) · `/?now=2026-11-08T00:00:01-03:00` (encerrada).

## Comandos
```
npm install
npm run dev
npm run build   # gera /dist
```
Deploy na Vercel: importe o repositório (framework Vite detectado automaticamente).
