module.exports = {
  siteMetadata: {
    title: 'Gatsby-TS-MDX-PrismJs-Starter',
    description: 'Gatsby-TS-MDX-PrismJs-Starter',
    keywords: 'One keyword, two keywords',
  },
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
        ignore: ['**/.tsx*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "Gatsby-TS-MDX-PrismJs-Starter",
    //     short_name: 'Gatsby-Starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ],
};
