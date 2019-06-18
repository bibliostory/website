import * as React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import theme from '../../utils/theme';
import { RouterProps } from '@reach/router';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps & RouterProps) => {
  const { site } = useLayoutQuery();

  const { title, description, keywords } = site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <GlobalStyle />
        <MainLayout>
          <div>{children}</div>
        </MainLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
