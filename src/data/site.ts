import { NBA2K27_OG } from './images'
import { GLOBAL_KEYWORDS } from './keywords'
import { PAGE_OG } from './og'

const CANONICAL_SITE = 'https://nba2k27hack.org'
const DEV_SITE = 'http://localhost:5174'

/** Production: HTTPS apex. Local dev: Astro on :5174. */
export const SITE_URL = import.meta.env.DEV ? DEV_SITE : CANONICAL_SITE
export const SITE_NAME = 'NBA 2K27 Hacks'
export const SITE_HOST = import.meta.env.DEV ? 'localhost:5174' : 'nba2k27hack.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: NBA 2K27 / NBA 2K27 cheats for PC (worldwide).
 * Canonical host is apex https://nba2k27hack.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy NBA 2K27 cheats for NBA 2K27 on Windows PC — Auto Green & perfect shot timing, player and MyTeam card & badge overlay, player highlight, court radar and live 2K Anti-Cheat status with instant digital delivery.'

/** Fed to Organization/WebSite schema `knowsAbout` (primary keyword universe). */
export const SITE_ABOUT = GLOBAL_KEYWORDS

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

/** Worldwide English locales — self-referencing alternates on every URL. */
export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'en-US', label: 'United States' },
  { hreflang: 'en-GB', label: 'United Kingdom' },
  { hreflang: 'en-CA', label: 'Canada' },
  { hreflang: 'en-AU', label: 'Australia' },
  { hreflang: 'en-NZ', label: 'New Zealand' },
  { hreflang: 'en-IN', label: 'India' },
  { hreflang: 'en-PH', label: 'Philippines' },
  { hreflang: 'en-IE', label: 'Ireland' },
  { hreflang: 'en-ZA', label: 'South Africa' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = NBA2K27_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Comma-separated; defaults from keywords.ts by path */
  keywords?: string
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
  /** Article guides — Open Graph article tags */
  articlePublishedTime?: string
  articleSection?: string
  articleTags?: string[]
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'NBA 2K27 Cheats | NBA 2K27 Cheat Auto Green, ESP & Hacks',
    description:
      'The best NBA 2K27 hacks in one place. Working cheats, VC glitches, badge tips, best builds, shooting and dribbling secrets. Updated for the latest patch.',
    path: '/',
    ogType: 'website',
    keywords:
      'nba 2k27 hacks, nba 2k27 cheats, nba 2k27 glitches, nba 2k27 tips, vc glitch 2k27',
    image: PAGE_OG.home,
    imageAlt: 'NBA Hacks 2K27 — cheats, VC glitches, builds and tips',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'NBA 2K27 Cheat Guides 2026 | Setup, Auto Green, ESP, Radar',
    description:
      'Free NBA 2K27 cheat guides — Auto Green settings, Court Vision ESP, court radar, MyCareer & Park tips, antivirus exclusions, loader setup and 2K Anti-Cheat status checks before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'NBA 2K27 Cheats setup guides for Auto Green, ESP and 2K Anti-Cheat',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'NBA 2K27 Cheats Reviews 2026 | Ratings & Buyer Feedback',
    description:
      'Honest NBA 2K27 cheats reviews — Auto Green accuracy, ESP & radar usefulness, loader delivery, and post-patch 2K Anti-Cheat survival. Read ratings before you buy NBA 2K27 hacks on PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'NBA 2K27 Cheats buyer reviews for NBA 2K27',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'NBA 2K27 Cheats FAQ 2026 | Price, Features, Anti-Cheat, Refunds',
    description:
      'NBA 2K27 cheats FAQ — cost from $35, Auto Green & MyTeam features, undetected status vs 2K Anti-Cheat, Park/Rec/MyCareer support, loader setup, delivery and refund rules on PC.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'NBA 2K27 Cheats FAQ — price, 2K Anti-Cheat and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'NBA 2K27 Cheats Support | Loader, Delivery & Install Help',
    description:
      'NBA 2K27 cheats support for buyers — digital delivery, Windows 10/11 setup, Defender exclusions, inject/loader errors, menu config and live 2K Anti-Cheat status help.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'NBA 2K27 Cheats support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'NBA 2K27 Cheats 2026 | Price $35 — Auto Green, ESP, Radar',
    description:
      'NBA 2K27 cheats checkout — undetected Auto Green, Court Vision ESP, MyTeam card overlay, Park/Rec court radar, HWID spoofer, stream-proof mode. Confirm 2K Anti-Cheat status, then buy from $35.',
    path: '/nba2k27-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'NBA 2K27 Auto Green, ESP and court radar product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'nba2k27 hacks',
  h1Sub: 'undetected cheats for nba2k27',
  h2Features: 'NBA 2K27 Auto Green, ESP, MyTeam card & badge overlay & court radar',
  h2Featured: 'NBA 2K27 Court Vision and Auto Green & perfect shot timing',
  h2About: 'Clear 2K Anti-Cheat status before you buy NBA 2K27 cheats',
  h2Access: 'Buy NBA 2K27 Cheats',
  h2Faq: 'NBA 2K27 Cheats FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
