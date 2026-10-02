// Dati del titolare del sito, usati nelle pagine "Note legali" e "Privacy".
// Compilare tutti i campi "DA COMPILARE": finché ce n'è anche uno, in locale
// compare un avviso e la build di produzione si ferma con un errore.

export const legal = {
  /** Nome e cognome o ragione sociale di chi gestisce il sito. */
  owner: 'Oscar Iuliano',
  /** Indirizzo (facoltativo per un privato; obbligatorio con P.IVA, come sede). */
  address: '',
  /** Email a cui scrivere per informazioni e richieste privacy. */
  email: 'oiuliano90@gmail.com',
  /** Partita IVA o codice fiscale, se presenti. Lasciare vuoto se non ci sono. */
  taxId: '',
  /** Data dell'ultimo aggiornamento dei testi (AAAA-MM-GG). */
  updated: '2026-10-02',
};

export const legalMissing = Object.entries(legal)
  .filter(([, v]) => typeof v === 'string' && v.startsWith('DA COMPILARE'))
  .map(([k]) => k);
