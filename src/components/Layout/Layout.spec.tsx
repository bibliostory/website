import * as React from 'react';
import Layout from './';
import { create } from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';

describe('<Layout />', () => {
  it('renders', () => {
    (useStaticQuery as jest.Mock).mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'title',
          description: 'description',
          keywords: 'keywords',
        },
      },
    }));
    expect(create(<Layout>children</Layout>)).toMatchSnapshot();
  });
});
