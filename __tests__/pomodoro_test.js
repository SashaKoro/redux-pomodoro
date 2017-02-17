/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Pomodoro } from '../src/components/pomodoro';
import Display from '../src/components/display';
import TaskBreak from '../src/components/task_break';
import TimerButtons from '../src/components/timerButtons';

describe('Pomodoro base tests', () => {
  const props = {
    tickTimeToggle: jest.fn(),
    taskTimeToggle: jest.fn(),
    breakTimeToggle: jest.fn(),
    breakNextModifier: jest.fn(),
    startToggler: jest.fn(),
    tickTime: '25:00',
    taskTime: 25,
    breakTime: 5,
    isBreakNext: true,
    isStartDisabled: false,
  };
  it('is selectable by class name', () => {
    const wrapper = shallow(<Pomodoro {...props} />);
    expect(wrapper.is('.Pomodoro')).toBe(true);
  });
  it('should mount in a DOM', () => {
    const wrapper = mount(<Pomodoro {...props} />);
    expect(wrapper.find('.Pomodoro').length).toBe(1);
  });
  it('should contain a Display component', () => {
    const wrapper = shallow(<Pomodoro {...props} />);
    expect(wrapper.find(Display).length).toBe(1);
  });
  it('should contain a Task_Break element', () => {
    const wrapper = shallow(<Pomodoro {...props} />);
    expect(wrapper.find(TaskBreak).length).toBe(1);
  });
  it('should contain a TimerButtons element', () => {
    const wrapper = shallow(<Pomodoro {...props} />);
    expect(wrapper.find(TimerButtons).length).toBe(1);
  });
  describe('Action dispatch tests', () => {
    it('should dispatch correct actions when clicking addTask', () => {
      const wrapper = mount(<Pomodoro {...props} />);

      wrapper.find('.addTask').simulate('click');
      expect(props.taskTimeToggle.mock.calls[0][0]).toBe(26);
      expect(props.tickTimeToggle.mock.calls[0][0]).toBe('26:00');
    });
    it('should dispatch correct actions when clicking subtractTask', () => {
      const wrapper = mount(<Pomodoro {...props} />);

      wrapper.find('.subtractTask').simulate('click');
      expect(props.taskTimeToggle.mock.calls[1][0]).toBe(24);
      expect(props.tickTimeToggle.mock.calls[1][0]).toBe('24:00');
    });

    let breakFalseProps = { ...props, isBreakNext: false };

    it('should dispatch correct actions when clicking addBreak', () => {
      const wrapper = mount(<Pomodoro {...breakFalseProps} />);

      wrapper.find('.addBreak').simulate('click');
      expect(props.breakTimeToggle.mock.calls[0][0]).toBe(6);
      expect(props.tickTimeToggle.mock.calls[2][0]).toBe('6:00');
    });
    it('should dispatch correct actions when clicking subtractBreak', () => {
      const wrapper = mount(<Pomodoro {...breakFalseProps} />);

      wrapper.find('.subtractBreak').simulate('click');
      expect(props.breakTimeToggle.mock.calls[1][0]).toBe(4);
      expect(props.tickTimeToggle.mock.calls[3][0]).toBe('4:00');
    });
    it('should dispatch correct action when clicking start button', () => {
      const wrapper = mount(<Pomodoro {...props} />);

      wrapper.find('.start').simulate('click');
      expect(props.startToggler.mock.calls[0][0]).toBe(true);
    });

    let startDisabledProps = { ...props, isStartDisabled: true };

    it('should dispatch correct action when clicking pause button', () => {
      const wrapper = mount(<Pomodoro {...startDisabledProps} />);

      wrapper.find('.pause').simulate('click');
      expect(props.startToggler.mock.calls[1][0]).toBe(false);
    });
  });
});
