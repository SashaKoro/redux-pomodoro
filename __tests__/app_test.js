/* eslint-disable no-undef */

import React from 'react';
import { App } from '../src/components/app';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should be selectable by class name', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });
});
