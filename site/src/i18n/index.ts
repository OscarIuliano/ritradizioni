import { en } from './en';
import { it } from './it';
import type { Content, Lang } from './types';

export const content: Record<Lang, Content> = { en, it };

/** Percorso della home per ogni lingua (l'inglese è la lingua principale). */
export const homePath: Record<Lang, string> = { en: '/', it: '/it/' };
