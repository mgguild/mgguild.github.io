import { PageMeta } from './types'


export const DEFAULT_META: PageMeta = {
  title: 'MGG',
  description:
    'A community of tactical gamers.',
  // image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const getCustomMeta = (path: string, ): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: 'Homepage',
      }
    case '/revenue-model':
      return {
        title: 'Revenue Model',
      }
    case '/team':
      return {
        title: 'Teams',
      }
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
    case '/whitepaper':
      return {
        title: 'White paper',
      }
    default:
      return {
        title: 'MGG'
      }
  }
}
