# Portale

Il portale ha un solo compito in questa fase: **far venire voglia di partire e far lasciare un contatto**.

## Chi lo visita

Una persona in Germania, probabilmente da smartphone, che non conosce la Calabria e non conosce noi. In pochi secondi deve capire:

1. Cos'è: una settimana a vivere le tradizioni di un paese calabrese.
2. Cosa fa durante i 5 giorni.
3. Dove si trova e come ci si arriva.
4. Quanto costa, almeno indicativamente.
5. Come chiedere informazioni.

## Pagine

| Pagina | Contenuto |
| --- | --- |
| Home | Immagine o video forte, promessa in una frase, la formula dei 5 giorni a colpo d'occhio, invito a chiedere informazioni |
| La settimana | Le 3 esperienze garantite, l'esperienza di stagione, la giornata libera, un esempio di programma giorno per giorno |
| Calendario delle stagioni | Cosa si fa in ogni periodo dell'anno e cosa si porta a casa |
| Dove siamo | Mappa, tra due mari, come arrivare (aeroporto di Lamezia Terme, treno) |
| Cosa è incluso e quanto costa | Cosa è incluso, cosa si organizza a parte, prezzo di partenza con un esempio |
| Le persone | Chi accoglie e chi guida le esperienze: volti e storie |
| Contatti / Richiesta | Modulo di richiesta |
| Note legali e Privacy | Pagine `/note-legali/` e `/privacy/` (EN: `/en/legal-notice/`, `/en/privacy/`); i dati del titolare stanno in `site/src/config/legal.ts` |

Le pagine possono anche essere sezioni di un'unica pagina lunga: per partire è spesso la scelta migliore.

## Il modulo di richiesta

Il punto più importante del portale: ogni richiesta è un contatto da coltivare.

| Campo | Obbligatorio |
| --- | --- |
| Nome | Sì |
| Email | Sì |
| Periodo di interesse (mese o stagione) | Sì |
| Numero di persone (adulti, bambini) | No |
| Paese di provenienza | No |
| Messaggio | No |
| Consenso privacy | Sì |
| Consenso a ricevere aggiornamenti | No |

Le richieste arrivano via email e vengono salvate in un elenco (es. un foglio di calcolo), così si possono contare e ricontattare.

## Requisiti

- **Lingue**: italiano (principale) e inglese all'avvio; tedesco in seguito.
- **Mobile first**: deve essere perfetto da smartphone.
- **Veloce**: si deve caricare in fretta anche con molte foto.
- **Facile da aggiornare**: testi, foto e calendario modificabili senza riscrivere il codice.
- **Misurabile**: statistiche di visita rispettose della privacy, senza banner cookie invasivi se possibile.
- **Costi bassi**: hosting gratuito o quasi.
- **Pronto a crescere**: in futuro potrà ospitare prenotazioni, pagamenti e altro.

## Pagine legali

Online c'è il minimo richiesto dalla legge italiana: titolare e contatti nelle note legali, informativa art. 13 GDPR nella privacy. I dati del titolare stanno in `site/src/config/legal.ts`; finché mancano, la build di produzione si ferma.

Da aggiungere più avanti:

- [ ] Prezzi indicativi e non vincolanti: il prezzo vale solo con il preventivo scritto
- [ ] Proprietà di testi e foto, licenza Unsplash per le foto attuali
- [ ] Responsabilità per i link esterni
- [ ] Nome dei fornitori (hosting, modulo) e dettagli sul trasferimento dei dati, quando attivati
- [ ] Statistiche di visita, quando attivate
- [ ] Condizioni di prenotazione e cancellazione, prima di accettare pagamenti
- [ ] Revisione completa da parte di un professionista

## Alloggio

Le case non vengono mostrate come attrazione: sono case semplici in campagna che garantiscono l'alloggio. Il portale le cita solo come parte inclusa nel pacchetto (formula e domande frequenti).

## Tono e stile

- Caldo, autentico, personale: persone vere, non foto da catalogo.
- Poche parole, molte immagini.
- Il dono fatto in casa (olio, marmellata, salsa) come simbolo del viaggio.
