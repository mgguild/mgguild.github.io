export interface IEcosystems {
  name: string;
  subtitle: string;
  description: string;
  status?: string;
  image?: string;
}

export const Ecosystems: IEcosystems[] = [
  {
    name: "MetaGamers",
    subtitle: "Scholarship",
    description:
      "MGG is the fastest growing scholarship program with 50% month-on-month growth",
    image: "MetaGamers",
  },
  {
    name: "MetaGamingPad",
    subtitle: "INO/IGO Launchpad",
    description:
      "MGG is the very FIRST gaming guild to become a launchpad for gamers!",
    image: "MetaGamingPad",
  },
  {
    name: "MetaGameFi Vault",
    subtitle: "Gaming Assets",
    description:
      "MGG acquires the best gaming assets and puts them in a vault where MGG holders can earn through staking",
    image: "Vault",
  },
  {
    name: "MetaGamingYield",
    subtitle: "Yield Farming",
    description:
      "MGG offers the FIRST form of automated NFT yield to guild members",
    image: "Yield",
  },
  {
    name: "MetaGaming Labs",
    subtitle: "Incubator",
    description:
      "MGG is a project incubator that supports promising Gamefi starttups to excel in tthe global gaming arena",
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
    subtitle: "P2E Game",
    description:
      "MGG is crafting a futuristic P2E game for tactical gamers in the metaverse!",
    image: "Warriors",
    status: "coming soon",
  },
];