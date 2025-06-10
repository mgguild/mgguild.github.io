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
   // {
  //   label: 'Team',
  //   href: "/team"
  // },
  {
    label: 'Roadmap',
    href: "/roadmap"
  },
  {
    label: 'MGG Token',
    href: "/mgg-token"
  },
  {
    label: 'Bridge',
    href: "https://app.chainport.io/"
  },
  {
    label: 'Earn',
    href: "",
    items:[{
      label: 'Staking',
      href: "/staking"
    }]
  },
  {
    label: 'Partners',
    href: "/partners"
  },
  {
    label: 'White Paper',
    href: "/White-Paper"
  },
  {
    label: 'Launch App',
    href: "https://app.metagg.com/#/farms"
  },
]

export const MENU_HEIGHT = 70;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 175;
export const SIDEBAR_WIDTH_REDUCED = 0;

export default links

