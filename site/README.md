# Sito – Calabria Lenta

Portale vetrina in [Astro](https://astro.build), pagina unica in italiano (`/`) e inglese (`/en/`).

## Avvio in locale

```bash
cd site
npm install
npm run dev        # http://localhost:4321
```

## Dove modificare

| Cosa | File |
| --- | --- |
| Testi | `src/i18n/en.ts`, `src/i18n/it.ts` |
| Foto | `src/assets/images/` (sostituire il file mantenendo il nome; crediti in `CREDITS.md`) |
| Colori e font | `src/styles/global.css` |
| Sezioni della pagina | `src/components/` |
| Dominio e modulo (Formspree) | `src/config/site.ts` |
| Dati del titolare | `src/config/legal.ts` |

Finché `src/config/site.ts` è vuoto, in locale il modulo resta in anteprima e la build di produzione si ferma. La guida alla pubblicazione è in [`docs/10-messa-online.md`](../docs/10-messa-online.md).
