export interface LinkProps {
    name: string;
    href: string;
}

export interface Props {
    links: Array<LinkProps>
    socials: Array<LinkProps>
}

export const names = {
    socials: {
      facebook: "FACEBOOK",
      telegram: "TELEGRAM",
      twitter: "TWITTER",
      discord: "DISCORD",
      linkedIn: "LINKED-IN",
      ig: "INSTAGRAM",
      medium: "MEDIUM",
      youtube: 'YOUTUBE',
      tiktok: 'TIKTOK'
    },
    links: {
        home: 'Home',
        revModel: 'Revenue Model',
        teams: 'Team',
        roadmap: 'Roadmap',
        token: 'MGG Token',
        NFT: 'NFTs',
        partners: 'Partners',
        whitePaper: 'White Paper',
        blog: 'Blog',
        contact: 'Contact Us'
    }
  };
