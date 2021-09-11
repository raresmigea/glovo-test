import React from 'react';
import { render } from '@testing-library/react';

import GlovoPerson from './GlovoPerson';

describe('GlovoPerson', () => {
  const person = { name: 'test', id: '123' };
  test('renders GlovoPerson component', () => {
    render(<GlovoPerson person={person} />);
  });
});
