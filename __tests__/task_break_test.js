/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TaskBreak from '../src/components/task_break';

describe('Task_Break', () => {
  it('should be selectable by class name', () => {
    const wrapper = shallow(
      <TaskBreak
        taskTime={25}
        breakTime={5}
        taskModify={jest.fn()}
        breakModify={jest.fn()}
        ifRunning={false}
      />);
    expect(wrapper.is('.Task_Break')).toBe(true);
  });

  it('should mount to a DOM', () => {
    const wrapper = mount(
      <TaskBreak
        taskTime={25}
        breakTime={5}
        taskModify={jest.fn()}
        breakModify={jest.fn()}
        ifRunning={false}
      />);
    expect(wrapper.find('.Task_Break').length).toBe(1);
  });

  const wrapper = mount(
    <TaskBreak
      taskTime={25}
      breakTime={5}
      taskModify={jest.fn()}
      breakModify={jest.fn()}
      ifRunning
    />);

  it('should disable buttons from ifRunning prop', () => {
    expect(wrapper.find('.subtractTask').prop('disabled')).toBe(true);
    expect(wrapper.find('.addTask').prop('disabled')).toBe(true);
    expect(wrapper.find('.subtractBreak').prop('disabled')).toBe(true);
    expect(wrapper.find('.addBreak').prop('disabled')).toBe(true);
  });
  it('should display correct task and break times from props', () => {
    expect(wrapper.find('.taskDisplay').text()).toBe('25');
    expect(wrapper.find('.breakDisplay').text()).toBe('5');
  });

  let taskModifyMock = jest.fn();
  let breakModifyMock = jest.fn();

  const newWrapper = mount(
    <TaskBreak
      taskTime={25}
      breakTime={5}
      taskModify={taskModifyMock}
      breakModify={breakModifyMock}
      ifRunning={false}
    />);

  it('expects clicking subtractTask to call taskModify func with args', () => {
    newWrapper.find('.subtractTask').simulate('click');
    expect(taskModifyMock.mock.calls[0][0]).toBe(-1);
  });

  it('expects clicking addTask to call taskModify func with args', () => {
    newWrapper.find('.addTask').simulate('click');
    expect(taskModifyMock.mock.calls[1][0]).toBe(1);
  });

  it('expects clicking subtractBreak to call breakModify func with args', () => {
    newWrapper.find('.subtractBreak').simulate('click');
    expect(breakModifyMock.mock.calls[0][0]).toBe(-1);
  });

  it('expects clicking addBreak to call breakModify func with args', () => {
    newWrapper.find('.addBreak').simulate('click');
    expect(breakModifyMock.mock.calls[1][0]).toBe(1);
  });
});
