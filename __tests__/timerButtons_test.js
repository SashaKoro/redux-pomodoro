/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TimerButtons from '../src/components/timerButtons';

describe('TimerButtons', () => {
  const props = {
    start: jest.fn(),
    pause: jest.fn(),
    ifRunning: true,
  };

  it('is selectable by class name', () => {
    const wrapper = shallow(<TimerButtons {...props} />);
    expect(wrapper.is('.TimerButtons')).toBe(true);
  });

  it('should mount to a DOM', () => {
    const wrapper = mount(<TimerButtons {...props} />);
    expect(wrapper.find('.TimerButtons').length).toBe(1);
  });

  let notRunningProps = { ...props, ifRunning: false };

  it('should disable buttons from ifRunning prop', () => {
    const wrapper = mount(<TimerButtons {...notRunningProps} />);

    expect(wrapper.find('.start').prop('disabled')).toBe(false);
    expect(wrapper.find('.pause').prop('disabled')).toBe(true);
  });

  it('should call the start() function on start button click', () => {
    const wrapper = mount(<TimerButtons {...notRunningProps} />);

    wrapper.find('.start').simulate('click');
    expect(props.start.mock.calls.length).toBe(1);
  });

  it('should call the pause() function on pause button click', () => {
    const wrapper = mount(<TimerButtons {...props} />);
    
    wrapper.find('.pause').simulate('click');
    expect(props.pause.mock.calls.length).toBe(1);
  });
});
