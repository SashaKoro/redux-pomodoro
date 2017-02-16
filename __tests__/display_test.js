/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Display from '../src/components/display';

describe('Display', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<Display displayOutput="25:00" />);
    expect(wrapper.is('.Display')).toBe(true);
  });
  const wrapper = mount(<Display displayOutput="25:00" />);

  it('mounts to a DOM', () => {
    expect(wrapper.find('.Display').length).toBe(1);
  });
  it('displays output from props to the user', () => {
    expect(wrapper.find('.Display').text()).toBe('25:00');
  });
});
