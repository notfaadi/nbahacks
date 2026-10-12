export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** NBA 2K27 product art + menu stills (self-hosted). */
export const NBA2K27_HERO = '/media/nba2k27-hero-deluxe.webp'
export const NBA2K27_SOLDIER = '/media/nba2k27-hero-deluxe.webp'
export const NBA2K27_COVER = '/media/nba2k27-cover.webp'
export const NBA2K27_BOX = '/media/nba2k27-box.jpg'
export const NBA2K27_ESP = '/media/nba2k27-court-vision-gameplay.gif'
export const NBA2K27_MENU = '/media/nba2k27-menu.gif'
export const NBA2K27_GAMEPLAY = '/media/nba2k27-court-vision-gameplay.gif'
export const NBA2K27_HOME_ART = '/media/nba2k27-home-art.jpg'
export const NBA2K27_CONTROL = '/media/nba2k27-control-art.jpg'
export const NBA2K27_TACTICAL = '/media/nba2k27-tactical-art.jpg'
export const NBA2K27_VIDEO_THUMB = '/media/nba2k27-video-thumb.jpg'

/** Homepage full-screen loop (same pattern as cheatforwardogs.org /videos/compressed.mp4). */
export const NBA2K27_HERO_LOOP = {
  src: '/videos/compressed.mp4',
  poster: NBA2K27_HERO,
} as const

/** Self-hosted NBA 2K27 Reaper preview (Bunny Stream GUID ee0735e7-…). */
export const NBA2K27_HOME_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/nba2k27-preview.mp4',
  poster: NBA2K27_VIDEO_THUMB,
  title: 'NBA 2K27 Cheats Auto Green and ESP preview',
  caption: 'Preview of NBA 2K27 Auto Green, ESP menu, loot highlighting and court radar features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: NBA2K27_SOLDIER,
    alt: 'NBA 2K27 cheats Auto Green and ESP product artwork for NBA 2K27 on PC',
    title: 'NBA 2K27 Cheats for NBA 2K27',
    caption: 'Feature overview for NBA 2K27 Auto Green, ESP, player highlight, MyTeam card & badge overlay and court radar.',
  },
  product: {
    image: NBA2K27_COVER,
    video: NBA2K27_HOME_VIDEO.src,
    alt: 'NBA 2K27 Court Vision, Auto Green & perfect shot timing and loot highlight feature artwork',
    title: 'NBA 2K27 Auto Green, ESP and Court Radar Features',
    caption: 'Product overview for NBA 2K27 on Windows PC.',
    videoTitle: NBA2K27_HOME_VIDEO.title,
    videoDescription: NBA2K27_HOME_VIDEO.caption,
  },
  forums: {
    image: NBA2K27_HERO,
    alt: 'NBA 2K27 cheats product artwork',
    title: 'NBA 2K27 Cheats Guides',
    caption: 'Reference for setup, Auto Green, ESP, loot and 2K Anti-Cheat status articles.',
  },
  reviews: {
    image: NBA2K27_ESP,
    alt: 'NBA 2K27 cheats ESP gameplay review artwork',
    title: 'NBA 2K27 Cheats Reviews',
    caption: 'Feature and compatibility feedback for NBA 2K27 cheats.',
  },
  faq: {
    image: NBA2K27_MENU,
    alt: 'NBA 2K27 cheats menu artwork for the FAQ',
    title: 'NBA 2K27 Cheats FAQ',
    caption: 'Compatibility, status and setup answers for NBA 2K27.',
  },
  support: {
    image: NBA2K27_HERO,
    alt: 'NBA 2K27 cheats support artwork',
    title: 'NBA 2K27 Cheats Support',
    caption: 'Delivery, loader and setup help for NBA 2K27 cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'auto-green-settings': { ...PAGE_MEDIA.home },
  'court-vision-guide': { ...PAGE_MEDIA.reviews },
  'court-radar-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'anti-cheat-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'mycareer-play-guide': {
    image: NBA2K27_BOX,
    alt: 'NBA 2K27 survival and MyCareer grind cheats artwork',
    title: 'NBA 2K27 Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for NBA 2K27 Auto Green, ESP and court radar.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
