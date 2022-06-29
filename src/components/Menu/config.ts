import { MenuEntry } from './types'

const links: MenuEntry[] = [
  {
    label: 'Home',
    href: "/"
  },
  {
    label: 'Revenue Model',
    href: "/revenue-model"
  },
  {
    label: 'Team',
    href: "/team"
  },
  {
    label: 'Roadmap',
    href: "/roadmap"
  },
  {
    label: 'MGG Token',
    href: "/mgg-token"
  },
  {
    label: 'NFT',
    href: "/mgg-NFT"
  },
  {
    label: 'Partners',
    href: "/partners"
  },
  {
    label: 'White paper',
    href: "/whitepaper"
  },
]

export const MENU_HEIGHT = 70;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 175;
export const SIDEBAR_WIDTH_REDUCED = 0;

export default links

