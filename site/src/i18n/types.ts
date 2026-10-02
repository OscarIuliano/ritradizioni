import type { ImageKey } from '../assets/images';

export type Lang = 'en' | 'it';

/** Tipo di giornata nella formula dei 5 giorni. */
export type DayKind = 'guaranteed' | 'seasonal' | 'free';

export type SeasonId = 'autumn' | 'winter' | 'spring' | 'summer';

export interface Content {
  meta: { title: string; description: string };
  brand: { name: string; tagline: string };
  nav: { week: string; seasons: string; houses: string; location: string; faq: string; cta: string };
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string; image: ImageKey };
  formula: {
    title: string;
    intro: string;
    kinds: Record<DayKind, { count: number; label: string; tag: string; text: string }>;
    dayLabel: string;
    days: { kind: DayKind; title: string }[];
    note: string;
  };
  experiences: {
    title: string;
    intro: string;
    items: { title: string; text: string; image: ImageKey }[];
  };
  seasons: {
    title: string;
    intro: string;
    takeHomeLabel: string;
    note: string;
    items: {
      id: SeasonId;
      name: string;
      months: string;
      title: string;
      text: string;
      takeHome: string;
      image: ImageKey;
    }[];
  };
  pantry: { title: string; text: string; image: ImageKey };
  houses: {
    title: string;
    intro: string;
    items: { name: string; beds: string; text: string; image: ImageKey }[];
  };
  people: { title: string; text: string; image: ImageKey };
  location: {
    title: string;
    text: string;
    village: string;
    tyrrhenian: string;
    ionian: string;
    facts: { place: string; time: string }[];
    note: string;
    image: ImageKey;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    intro: string;
    name: string;
    email: string;
    period: string;
    periodOptions: string[];
    adults: string;
    children: string;
    country: string;
    message: string;
    messagePlaceholder: string;
    privacy: string;
    updates: string;
    submit: string;
    previewNotice: string;
    success: string;
  };
  footer: { legal: string; privacy: string; credits: string };
}
