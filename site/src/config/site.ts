// Impostazioni per la messa online. Finché un campo è vuoto, in locale il sito
// funziona (il modulo resta in anteprima) ma la build di produzione si ferma.

export const site = {
  /** Indirizzo pubblico del sito, senza barra finale. Es. 'https://www.esempio.it'. */
  url: 'https://calabrialenta.com',
  /** Endpoint del modulo Formspree. Es. 'https://formspree.io/f/abcdwxyz'. */
  formEndpoint: 'https://formspree.io/f/mkjglnwe',
};

export const siteMissing = Object.entries(site)
  .filter(([, v]) => v === '')
  .map(([k]) => k);
