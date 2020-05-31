// need to be copied to config.js
module.exports = {
  config: {
    siteMetadata: {
      title: ``,
      description: ``,
      siteUrl: ``,
      author: ``,
      defaultKeywords: [],
    },
    robotsPolicies: [
      { userAgent: "Googlebot News", disallow: "/secretnews/" },
      { userAgent: "Googlebot", allow: "*" },
    ],
    googleAnalytics: {
      trackingId: ``,
    },
  },
}
