import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

global.___loader = {
  enqueue: jest.fn(),
};
