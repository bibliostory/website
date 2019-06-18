module.exports = {
  siteMetadata: {
    title: 'BiblioStory',
    description:
      'BiblioStory allows you to follow your old books throughout their travels',
    keywords: 'One book, many lives',
    siteUrl: 'https://www.bibiostory.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bibiostory.com',
        sitemap: 'https://www.bibiostory.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      /* eslint-disable @typescript-eslint/camelcase */
      options: {
        name: 'BiblioStory',
        short_name: 'BiblioStory',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
      /* eslint-enable @typescript-eslint/camelcase */
    },
  ],
};
