import 'styled-components';

export const fontSizes = [12, 14, 16, 20, 24, 32];

export const colors = {
  primary: '#637130',
  info: '#fbfbf7',
  success: '#539c46',
  warning: '#d08c0e',
  danger: '#f44336',
  grey: [
    '#ffffff',
    '#e6e6e6',
    '#cccccc',
    '#B3B3B3',
    '#999999',
    '#808080',
    '#666666',
    '#4d4d4d',
    '#333333',
    '#1a1a1a',
  ],
  black: '#1a1a1a',
};

export const space = [0, 4, 8, 16, 32, 64];

export const breakpoints = ['40em', '52em', '64em'];

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
};

export default {
  colors,
  space,
  breakpoints,
  mediaQueries,
};
