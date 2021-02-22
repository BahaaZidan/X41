module.exports = {
  siteMetadata: {
    title: `A blog by Bahaa Zidan`,
    description: `You'll find blogs about programming, hardware, career, and sometimes life.`,
    author: `Bahaa Zidan`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A blog by Bahaa Zidan`,
        short_name: `BahaaZidan_Blog`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // must be listed after the 'gatsby-plugin-manifest' plugin
    `gatsby-plugin-react-helmet`,
  ],
};
