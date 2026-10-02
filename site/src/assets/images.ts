// Foto segnaposto da Unsplash (vedi CREDITS.md). Per sostituirle basta
// sovrascrivere il file .jpg con lo stesso nome.
import arance from './images/arance.jpg';
import borgoBalcone from './images/borgo-balcone.jpg';
import borgoScale from './images/borgo-scale.jpg';
import cameraLuce from './images/camera-luce.jpg';
import cameraTravi from './images/camera-travi.jpg';
import cortileForno from './images/cortile-forno.jpg';
import costaCalabria from './images/costa-calabria.jpg';
import heroUliveto from './images/hero-uliveto.jpg';
import mare from './images/mare.jpg';
import marmellata from './images/marmellata.jpg';
import oliveRaccolte from './images/olive-raccolte.jpg';
import olio from './images/olio.jpg';
import pastaFattaAMano from './images/pasta-fatta-a-mano.jpg';
import peperoni from './images/peperoni.jpg';
import raccoltaOlive from './images/raccolta-olive.jpg';
import salsaBarattoli from './images/salsa-barattoli.jpg';
import sentiero from './images/sentiero.jpg';
import tavolaPergolato from './images/tavola-pergolato.jpg';

export const images = {
  arance,
  borgoBalcone,
  borgoScale,
  cameraLuce,
  cameraTravi,
  cortileForno,
  costaCalabria,
  heroUliveto,
  mare,
  marmellata,
  oliveRaccolte,
  olio,
  pastaFattaAMano,
  peperoni,
  raccoltaOlive,
  salsaBarattoli,
  sentiero,
  tavolaPergolato,
};

export type ImageKey = keyof typeof images;
