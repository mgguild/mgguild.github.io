import { IEcosystems, IFigures } from "./types";

export const Ecosystems: IEcosystems[] = [
  {
    name: "MetaGamers",
    subtitle: "Scholarship",
    description:
      "MGG is the fastest growing scholarship program with 50% month-on-month growth",
    image: "MetaGamers",
  },
  {
    name: "MetaGaming Pad",
    subtitle: "INO/IGO Launchpad",
    description:
      "MGG is the very FIRST gaming guild to become a launchpad for gamers!",
    image: "MetaGamingPad",
    link: 'https://app.metagg.com/#/launchpad'
  },
  {
    name: "MetaGameFi Vault",
    subtitle: "Gaming Assets",
    description:
      "MGG acquires the best gaming assets and puts them in a vault where MGG holders can earn through staking",
    image: "Vault",
    link: 'https://app.metagg.com/#/gamefi'
  },
  {
    name: "MetaGaming Yield",
    subtitle: "Yield Farming",
    description:
      "MGG offers the FIRST form of automated NFT yield to guild members",
    image: "Yield",
  },
  {
    name: "MetaGaming Labs",
    subtitle: "Incubator",
    description:
      "MGG is a project incubator that supports promising GameFi startups to excel in the global gaming arena",
    image: "Labs",
  },
  {
    name: "MetaGaming DAO",
    subtitle: "DAO Community",
    description: "MGG holders get to vote on the direction of the guild",
    image: "Dao",
  },
  {
    name: "MetaSaga Warriors",
    subtitle: "NFT Game",
    description:
      "MGG is crafting an action-packed roguelike play-and-earn NFT game with highly addictive gameplays & highly individualized NFTs. LAUNCHING SOON!",
    image: "Warriors",
    link: 'https://metasagawarriors.com',
    status: "coming soon",
  },
  {
    name: "MetaGaming NFTs",
    subtitle: "Data Unit Assets",
    description:
      "MGG offers exclusive NFTs to eligible guild members",
    link: '/mgg-NFT',
    image: "Nft",
  },
];


export const Figures:IFigures[] = [
  {
    amount: '$100,000+',
    subtitle: 'Monthly Revenue',
  },
  {
    amount: '1,000+',
    subtitle: 'Active Scholars',
  },
  {
    amount: '30+',
    subtitle: 'Acquired Early-game Assets'
  },
  {
    amount: '1,000,000+',
    subtitle: 'SLP Farmed per Month'
  },
  {
    amount: '30+',
    subtitle: 'Renowned Gaming Partners'
  },
  {
    amount: '5,000+',
    subtitle: 'NFTs in the Treasury'
  }
]
