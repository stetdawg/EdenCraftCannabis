module.exports = {
  siteMetadata: {
    title: `Eden Craft Cannabis`,
    description: `Welcome To Eden Cannabis. Woman owned, and operated collection dispensaries.`,
    author: `Stetson Baber Noemi Mejia`,
    //siteUrl: `/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eden Craft Cannabis`,
        short_name: `Eden`,
        start_url: `/`,
        background_color: `#A4D39C`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0001_ICON.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-mailchimp`,
    //   options:{
    //     endpoint: '.', //string; add your MC list endpoint here; https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
    //     timeout: 3500, //number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request.
    //   }
    // },
  ],
}
