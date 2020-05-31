const { config } = require(`./config`)

module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    siteUrl: config.siteMetadata.siteUrl,
    author: config.siteMetadata.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gewton`,
        short_name: `Gewton`,
        start_url: `/`,
        background_color: `#3F607F`,
        theme_color: `#3F607F`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: config.robotsPolicies,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics.trackingId,
        head: true
      },
    },
  ],
}
