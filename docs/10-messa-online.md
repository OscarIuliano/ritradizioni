# Messa online

Guida passo passo per pubblicare il portale. Gli account vanno creati **a nome del titolare** (Oscar Iuliano). Il codice è già pronto: mancano solo due valori in `site/src/config/site.ts`, che si ottengono durante questi passi.

Finché quei valori sono vuoti, la build di pubblicazione si ferma con un errore: il sito non può uscire senza dominio e senza modulo funzionante.

Le schermate di Cloudflare e Formspree cambiano spesso: i nomi delle voci potrebbero essere leggermente diversi.

## 1. Dominio

- [ ] Scegliere il nome (vedi [Decisioni](decisioni.md)).
- [ ] **Se `.com`**: comprarlo direttamente su Cloudflare (Registrar, prezzo di costo) dopo aver creato l'account al passo 2.
- [ ] **Se `.it`**: comprarlo da un registrar italiano e poi, nel pannello del registrar, sostituire i *nameserver* con quelli che Cloudflare indica quando aggiungi il dominio.

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

- [ ] Salvare. La prima build **fallirà di proposito** finché `site/src/config/site.ts` è vuoto: è normale.
- [ ] Nel progetto, **Domini personalizzati → Aggiungi**: inserire `www.<dominio>` e anche `<dominio>` senza www.

## 3. Cloudflare: statistiche

- [ ] Nel progetto Pages, sezione **Metriche**, attivare **Web Analytics**. Non serve codice: Cloudflare lo inserisce da solo.

## 4. Cloudflare: email con il proprio dominio (facoltativo, gratuito)

- [ ] **Email → Email Routing**: creare `info@<dominio>` che inoltra a `oiuliano90@gmail.com`.
- [ ] Se si attiva, sostituire l'email in `site/src/config/legal.ts` con `info@<dominio>`.

## 5. Formspree: modulo di richiesta

- [ ] Creare un account su [formspree.io](https://formspree.io) con `oiuliano90@gmail.com` (piano **Free**).
- [ ] Creare un nuovo modulo (es. "Richieste sito"): Formspree mostra un indirizzo tipo `https://formspree.io/f/abcdwxyz`.
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
