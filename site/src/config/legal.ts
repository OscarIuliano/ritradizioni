// Dati del titolare del sito, usati nelle pagine "Note legali" e "Privacy".
// Compilare tutti i campi "DA COMPILARE" prima di andare online: finché ce n'è
// anche uno, la build stampa un avviso e le pagine mostrano un riquadro giallo.

export const legal = {
  /** Nome e cognome o ragione sociale di chi gestisce il sito. */
  owner: 'DA COMPILARE: nome e cognome o ragione sociale',
  /** Indirizzo completo (via, CAP, comune, provincia). */
  address: 'DA COMPILARE: indirizzo',
  /** Email a cui scrivere per informazioni e richieste privacy. */
  email: 'DA COMPILARE: email di contatto',
  /** Partita IVA o codice fiscale, se presenti. Lasciare vuoto se non ci sono. */
  taxId: '',
  /**
   * Fornitori che trattano dati per conto nostro (hosting, modulo di contatto,
   * email). Da compilare quando si attivano i servizi.
   */
  processors: [] as { name: string; role: { it: string; en: string } }[],
  /** Data dell'ultimo aggiornamento dei testi (AAAA-MM-GG). */
  updated: '2026-10-02',
};

export const legalMissing = Object.entries(legal)
  .filter(([, v]) => typeof v === 'string' && v.startsWith('DA COMPILARE'))
  .map(([k]) => k);
