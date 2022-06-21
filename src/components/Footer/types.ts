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
    },
    links: {
        home: 'Home',
        revModel: 'Revenue Model',
        teams: 'Teams',
        roadmap: 'Roadmap',
        token: 'MGG Token',
        NFT: 'NFT',
        partners: 'Partners',
        whitePaper: 'White Paper',
        blog: 'Blog',
        contact: 'Contact Us'
    }
  };
