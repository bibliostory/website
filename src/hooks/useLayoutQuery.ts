import { graphql, useStaticQuery } from 'gatsby';

export const useLayoutQuery = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          # change siteMetaData in 'gatsby-config.js'
          title
          description
          keywords
        }
      }
    }
  `);

  return { site };
};
