/* eslint-disable no-undef */
import * as types from '../src/actions/actionTypes';
import isBreakNext from '../src/reducers/isBreakNext';
import isStartDisabled from '../src/reducers/isStartDisabled';
import breakTime from '../src/reducers/breakTime';
import taskTime from '../src/reducers/taskTime';
import tickTime from '../src/reducers/tickTime';

describe('tickTime reducer', () => {
  it('returns initial state', () => {
    expect(tickTime(undefined, {})).toEqual('25:00');
  });

  it('handles TICK_TOGGLE action type and returns new state', () => {
    expect(tickTime(undefined, {
      type: types.TICK_TOGGLE,
      payload: '26:00',
    })).toEqual('26:00');
  });
});

describe('taskTime reducer', () => {
  it('returns initial state', () => {
    expect(taskTime(undefined, {})).toEqual(25);
  });

  it('handles TASK_TOGGLE action type and returns new state', () => {
    expect(taskTime(undefined, {
      type: types.TASK_TOGGLE,
      payload: 24,
    })).toEqual(24);
  });
});

describe('breakTime reducer', () => {
  it('returns initial state', () => {
    expect(breakTime(undefined, {})).toEqual(5);
  });

  it('handles BREAK_TOGGLE action type and returns new state', () => {
    expect(breakTime(undefined, {
      type: types.BREAK_TOGGLE,
      payload: 6,
    })).toEqual(6);
  });
});

describe('isBreakNext reducer', () => {
  it('returns initial state', () => {
    expect(isBreakNext(undefined, {})).toEqual(true);
  });

  it('handles BREAK_NEXT action type and returns new state', () => {
    expect(isBreakNext(undefined, {
      type: types.BREAK_NEXT,
      payload: false,
    })).toEqual(false);
  });
});

describe('isStartDisabled reducer', () => {
  it('returns initial state', () => {
    expect(isStartDisabled(undefined, {})).toEqual(false);
  });

  it('handles TOGGLE_START action type and returns new state', () => {
    expect(isStartDisabled(undefined, {
      type: types.TOGGLE_START,
      payload: true,
    })).toEqual(true);
  });
});
