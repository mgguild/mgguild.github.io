import { Props, names } from "./types";

const Config: Props = {
  links: [
    {
      name: names.links.home,
      href: "/",
    },
    {
      name: names.links.token,
      href: "/mgg-token",
    },

    {
      name: names.links.revModel,
      href: "/revenue-model",
    },
    {
      name: names.links.teams,
      href: "/team",
    },
    {
      name: names.links.partners,
      href: "/partners",
    },
    {
      name: names.links.roadmap,
      href: "/roadmap",
    },

    {
      name: names.links.whitePaper,
      href: "/White-Paper",
    },

    {
      name: 'Launch App',
      href: "https://app.metagg.com/#/farms"
    },

  ],
  socials: [
    {
      name: names.socials.facebook,
      href: "https://www.facebook.com/MetaGamingGuild/?_rdc=1&_rdr",
    },
    {
      name: names.socials.telegram,
      href: "https://t.me/MetaGamingGuild",
    },
    {
      name: names.socials.twitter,
      href: "https://twitter.com/MetaGamingGuild",
    },
    {
      name: names.socials.discord,
      href: "https://discord.com/invite/5a7Ca7JFD2",
    },
    {
      name: names.socials.linkedIn,
      href: "https://www.linkedin.com/company/meta-gaming-guild-mgg?original_referer=https%3A%2F%2Fwww.metagg.com%2F",
    },
    {
      name: names.socials.ig,
      href: "https://www.instagram.com/accounts/login/?next=/metagamingguild/",
    },
    {
      name: names.socials.medium,
      href: "https://medium.com/metagamingguild",
    },
    {
      name: names.socials.youtube,
      href: 'https://www.youtube.com/channel/UCdVjfmKv-Qi3z2SXyB1f2gA'
    },
    {
      name: names.socials.tiktok,
      href: 'https://www.tiktok.com/@metagaming_guild'
    }
  ],
};

export default Config;
