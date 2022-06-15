import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    LAZY_IMAGES: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `proect montag`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `${__dirname}/src/assets/favicon.png`,
      lang: 'ru',
      start_url: '/',
    },
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
  
    }, "gatsby-plugin-postcss", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },

    }, "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },

    }, "gatsby-transformer-json", {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    }, {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        },
      },
    }, {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'blue',
        showSpinner: false,
      },
    },
  ],
};

export default config;
