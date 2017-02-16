/* eslint-disable no-undef */
import * as types from '../src/actions/actionTypes';
import * as actions from '../src/actions/index';

describe('actionCreators', () => {
  it('creates action to toggle tick time', () => {
    const newVal = '34:00';
    const expectedAction = {
      type: types.TICK_TOGGLE,
      payload: newVal,
    };
    expect(actions.tickTimeToggle(newVal)).toEqual(expectedAction);
  });

  it('creates action to toggle task time', () => {
    const newVal = 27;
    const expectedAction = {
      type: types.TASK_TOGGLE,
      payload: newVal,
    };
    expect(actions.taskTimeToggle(newVal)).toEqual(expectedAction);
  });

  it('creates action to toggle break time', () => {
    const newVal = 6;
    const expectedAction = {
      type: types.BREAK_TOGGLE,
      payload: newVal,
    };
    expect(actions.breakTimeToggle(newVal)).toEqual(expectedAction);
  });

  it('creates action to toggle start button', () => {
    const newBool = false;
    const expectedAction = {
      type: types.TOGGLE_START,
      payload: newBool,
    };
    expect(actions.startToggler(newBool)).toEqual(expectedAction);
  });

  it('creates action to change whether a break is next', () => {
    const newBool = false;
    const expectedAction = {
      type: types.BREAK_NEXT,
      payload: newBool,
    };
    expect(actions.breakNextModifier(newBool)).toEqual(expectedAction);
  });
});
