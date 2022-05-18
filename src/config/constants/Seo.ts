import { PageMeta } from './types'


export const DEFAULT_META: PageMeta = {
  title: 'MGG',
  description:
    'A community of tactical gamers.',
  // image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const getCustomMeta = (path: string, ): PageMeta => {
  switch (path) {
    case '/homepage':
      return {
        title: 'Homepage',
      }
    default:
      return null
  }
}
