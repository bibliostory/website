import * as React from 'react';
import Layout from './';
import { create } from 'react-test-renderer';

describe('<Layout />', () => {
  it('renders', () => {
    expect(create(<Layout>children</Layout>)).toMatchSnapshot();
  });
});
