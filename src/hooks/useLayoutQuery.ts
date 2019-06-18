import { graphql, useStaticQuery } from 'gatsby';

interface SiteData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

export const useLayoutQuery = () => {
  const {
    site = {
      siteMetadata: {
        title: '',
        description: '',
        keywords: '',
      },
    },
  } = useStaticQuery<SiteData>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);

  return { site };
};
