# Messa online

Guida passo passo per pubblicare il portale. Gli account vanno creati **a nome del titolare** (Oscar Iuliano). Il codice è già pronto: mancano solo due valori in `site/src/config/site.ts`, che si ottengono durante questi passi.

Finché quei valori sono vuoti, la build di pubblicazione si ferma con un errore: il sito non può uscire senza dominio e senza modulo funzionante.

Le schermate di Cloudflare e Formspree cambiano spesso: i nomi delle voci potrebbero essere leggermente diversi.

## 1. Dominio

Nome scelto: **Calabria Lenta**.

- [x] **`calabrialenta.com`** comprato su Cloudflare il 2026-10-02 (scadenza 2027-10-02, rinnovo automatico da verificare). Indirizzo del sito: `https://calabrialenta.com`.
- [ ] **`calabrialenta.it`** (facoltativo, per proteggere il nome in Italia): comprarlo da un registrar italiano, poi sostituire i *nameserver* con quelli indicati da Cloudflare e reindirizzarlo al `.com`.

**Ordine consigliato:** fare prima il passo 5 (Formspree) e mandare l'indirizzo del modulo, così la prima pubblicazione su Cloudflare va subito a buon fine.

## 2. Cloudflare: hosting

- [ ] Creare un account su [dash.cloudflare.com](https://dash.cloudflare.com) con l'email del titolare.
- [ ] Aggiungere il dominio all'account (se non è stato comprato su Cloudflare).
- [ ] Andare in **Workers & Pages → Crea → Pages → Collega a Git** e autorizzare l'accesso a GitHub.
- [ ] Scegliere il repository `OscarIuliano/ritradizioni`.
- [ ] Impostazioni di build:

| Voce | Valore |
| --- | --- |
| Framework preset | Astro |
| Branch di produzione | `main` |
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |

- [ ] Salvare. Se l'indirizzo del modulo non è ancora in `site/src/config/site.ts`, la prima build **fallisce di proposito**: è normale.
- [ ] Nel progetto, **Domini personalizzati → Aggiungi**: inserire `calabrialenta.com` e anche `www.calabrialenta.com`.

## 3. Cloudflare: statistiche

- [ ] Nel progetto Pages, sezione **Metriche**, attivare **Web Analytics**. Non serve codice: Cloudflare lo inserisce da solo.

## 4. Cloudflare: email con il proprio dominio (facoltativo, gratuito)

- [ ] **Email → Email Routing**: creare `info@<dominio>` che inoltra a `oiuliano90@gmail.com`.
- [ ] Se si attiva, sostituire l'email in `site/src/config/legal.ts` con `info@<dominio>`.

## 5. Formspree: modulo di richiesta

- [x] Creare un account su [formspree.io](https://formspree.io) con `oiuliano90@gmail.com` (piano **Free**).
- [x] Creare un nuovo modulo: indirizzo `https://formspree.io/f/mkjglnwe`, inserito in `site/src/config/site.ts`.
- [ ] Nelle impostazioni del modulo, limitare l'invio al proprio dominio (*Restrict to domain*), per evitare abusi.
- [ ] Confermare l'email che Formspree invia alla prima richiesta.

## 6. Ultimo passo nel codice

Questo lo faccio io appena mi mandi i due valori:

```ts
// site/src/config/site.ts
url: 'https://www.<dominio>',
formEndpoint: 'https://formspree.io/f/<codice>',
```

Al commit su GitHub, Cloudflare pubblica il sito da solo.

## 7. Verifiche dopo la pubblicazione

- [ ] Il sito si apre su `https://www.<dominio>` e su `https://<dominio>`.
- [ ] Versione inglese su `/en/`, note legali e privacy raggiungibili dal footer.
- [ ] Invio di una richiesta di prova dal modulo: arriva l'email e compare il messaggio di conferma.
- [ ] Web Analytics registra le prime visite (può servire qualche ora).
- [ ] Anteprima del link su WhatsApp o Facebook: compaiono titolo, descrizione e foto.

## Aggiornare il sito dopo il lancio

Ogni modifica caricata su GitHub nel branch `main` viene pubblicata automaticamente in un paio di minuti.
