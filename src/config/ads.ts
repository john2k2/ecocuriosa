/**
 * Public AdSense settings injected at build time by the hosting provider.
 * These values are public by design; never place a private credential here.
 */
const value = (name: string, fallback = '') => import.meta.env[name]?.trim() || fallback;

export const ADSENSE_CLIENT_ID = value('PUBLIC_ADSENSE_CLIENT_ID', 'ca-pub-4559843439616138');

export const ADSENSE_SLOTS = {
  homeHeader: value('PUBLIC_ADSENSE_SLOT_HOME_HEADER'),
  homeFooter: value('PUBLIC_ADSENSE_SLOT_HOME_FOOTER'),
  categoryHeader: value('PUBLIC_ADSENSE_SLOT_CATEGORY_HEADER'),
  articleTop: value('PUBLIC_ADSENSE_SLOT_ARTICLE_TOP'),
  articleBottom: value('PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM'),
} as const;
