export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}
export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  srkPriceUsd?: number;
  priceUsdLink?: string;
  currentLang: string;
  links: Array<MenuEntry>;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}
