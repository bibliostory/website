module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(tsx?|jsx?)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/__mocks__/file.js',
  },
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
};
