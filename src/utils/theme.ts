export const fontSizes = Object.freeze([12, 14, 16, 20, 24, 32]);

interface Colors {
  readonly primary: '#637130';
  readonly info: '#fbfbf7';
  readonly success: '#539c46';
  readonly warning: '#d08c0e';
  readonly danger: '#f44336';
  readonly grey000: '#ffffff';
  readonly grey100: '#e6e6e6';
  readonly grey200: '#cccccc';
  readonly grey300: '#B3B3B3';
  readonly grey400: '#999999';
  readonly grey500: '#808080';
  readonly grey600: '#666666';
  readonly grey700: '#4d4d4d';
  readonly grey800: '#333333';
  readonly grey900: '#1a1a1a';
  readonly black: '#1a1a1a';
}

export const colors = Object.freeze<Colors>({
  primary: '#637130',
  info: '#fbfbf7',
  success: '#539c46',
  warning: '#d08c0e',
  danger: '#f44336',
  grey000: '#ffffff',
  grey100: '#e6e6e6',
  grey200: '#cccccc',
  grey300: '#B3B3B3',
  grey400: '#999999',
  grey500: '#808080',
  grey600: '#666666',
  grey700: '#4d4d4d',
  grey800: '#333333',
  grey900: '#1a1a1a',
  black: '#1a1a1a',
});

export const space = Object.freeze<[0, 4, 8, 16, 32, 64]>([
  0,
  4,
  8,
  16,
  32,
  64,
]);

export const breakpoints = Object.freeze<['40em', '52em', '64em']>([
  '40em',
  '52em',
  '64em',
]);

export const mediaQueries = Object.freeze<
  Record<'small' | 'medium' | 'large', string>
>({
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
});

const theme = Object.freeze({
  colors,
  space,
  breakpoints,
  mediaQueries,
});

export default theme;
