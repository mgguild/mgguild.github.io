import { PageMeta } from './types'


export const DEFAULT_META: PageMeta = {
  title: 'MGG',
  description:
    'A community of tactical gamers.',
  // image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const getCustomMeta = (path: string, ): PageMeta => {
  switch (path) {
    case '/home':
      return {
        title: 'Home',
      }
    case '/revenue-model':
      return {
        title: 'Revenue Model',
      }
    case '/team':
      return {
        title: 'Team',
      }
    case '/mgg-NFTs':
      return { title: 'NFTs'}
    case '/roadmap':
      return {
        title: 'Roadmap',
      }
    case '/mgg-token':
      return {
        title: 'MGG Token',
      }
    case '/partners':
      return {
        title: 'Partners',
      }
    case '/White-Paper':
      return {
        title: 'White Paper',
      }
    default:
      return {
        title: 'MGG'
      }
  }
}
