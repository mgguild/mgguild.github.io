import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MetaGaming Guild`,
    description: `A community of tactical gamers`,
    author: `@metagamingguild`,
  },
  plugins: [{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-N3FSWCLQTB", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds

      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
      },
    },
  }, 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'MetaGaming Guild',
      short_name: `MGG`,
      start_url: `/`,
      icon: 'public/static/favicon.ico',
    },
  },
  "gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-root-import"]
};

export default config;
