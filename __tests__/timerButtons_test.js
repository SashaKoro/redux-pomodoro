/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TimerButtons from '../src/components/timerButtons';

describe('TimerButtons', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(
      <TimerButtons
        start={jest.fn()}
        pause={jest.fn()}
        ifRunning
      />);
    expect(wrapper.is('.TimerButtons')).toBe(true);
  });

  it('should mount to a DOM', () => {
    const wrapper = mount(
      <TimerButtons
        start={jest.fn()}
        pause={jest.fn()}
        ifRunning
      />);
    expect(wrapper.find('.TimerButtons').length).toBe(1);
  });

  it('should disable buttons from ifRunning prop', () => {
    const wrapper = mount(
      <TimerButtons
        start={jest.fn()}
        pause={jest.fn()}
        ifRunning={false}
      />);
    expect(wrapper.find('.start').prop('disabled')).toBe(false);
    expect(wrapper.find('.pause').prop('disabled')).toBe(true);
  });

  it('should call the start() function on start button click', () => {
    let startMock = jest.fn();
    let pauseMock = jest.fn();
    const wrapper = mount(
      <TimerButtons
        start={startMock}
        pause={pauseMock}
        ifRunning={false}
      />);
    wrapper.find('.start').simulate('click');
    expect(startMock.mock.calls.length).toBe(1);
  });

  it('should call the pause() function on pause button click', () => {
    let startMock = jest.fn();
    let pauseMock = jest.fn();
    const wrapper = mount(
      <TimerButtons
        start={startMock}
        pause={pauseMock}
        ifRunning
      />);
    wrapper.find('.pause').simulate('click');
    expect(pauseMock.mock.calls.length).toBe(1);
  });
});
