/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TaskBreak from '../src/components/task_break';

describe('Task_Break', () => {
  const props = {
    taskTime: 25,
    breakTime: 5,
    taskModify: jest.fn(),
    breakModify: jest.fn(),
    ifRunning: false,
  };

  it('should be selectable by class name', () => {
    const wrapper = shallow(<TaskBreak {...props} />);
    expect(wrapper.is('.Task_Break')).toBe(true);
  });

  it('should mount to a DOM', () => {
    const wrapper = mount(<TaskBreak {...props} />);
    expect(wrapper.find('.Task_Break').length).toBe(1);
  });

  it('should disable buttons from ifRunning prop', () => {
    let runningProps = { ...props, ifRunning: true };
    const wrapper = mount(<TaskBreak {...runningProps} />);

    expect(wrapper.find('.subtractTask').prop('disabled')).toBe(true);
    expect(wrapper.find('.addTask').prop('disabled')).toBe(true);
    expect(wrapper.find('.subtractBreak').prop('disabled')).toBe(true);
    expect(wrapper.find('.addBreak').prop('disabled')).toBe(true);
  });
  it('should display correct task and break times from props', () => {
    let runningProps = { ...props, ifRunning: true };
    const wrapper = mount(<TaskBreak {...runningProps} />);

    expect(wrapper.find('.taskDisplay').text()).toBe('25');
    expect(wrapper.find('.breakDisplay').text()).toBe('5');
  });

  // let taskModifyMock = jest.fn();
  // let breakModifyMock = jest.fn();

  // const newWrapper = mount(
  //   <TaskBreak
  //     taskTime={25}
  //     breakTime={5}
  //     taskModify={jest.fn()}
  //     breakModify={jest.fn()}
  //     ifRunning={false}
  //   />);
  const wrapper = mount(<TaskBreak {...props} />);

  it('expects clicking subtractTask to call taskModify func with args', () => {

    wrapper.find('.subtractTask').simulate('click');
    expect(props.taskModify.mock.calls[0][0]).toBe(-1);
  });

  it('expects clicking addTask to call taskModify func with args', () => {
    wrapper.find('.addTask').simulate('click');
    expect(props.taskModify.mock.calls[1][0]).toBe(1);
  });

  it('expects clicking subtractBreak to call breakModify func with args', () => {
    wrapper.find('.subtractBreak').simulate('click');
    expect(props.breakModify.mock.calls[0][0]).toBe(-1);
  });

  it('expects clicking addBreak to call breakModify func with args', () => {
    wrapper.find('.addBreak').simulate('click');
    expect(props.breakModify.mock.calls[1][0]).toBe(1);
  });
});
