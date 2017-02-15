import * as types from './actionTypes';

export const tickTimeToggle = (action) => ({
  type: types.TICK_TOGGLE,
  payload: action,
});

export const taskTimeToggle = (action) => ({
  type: types.TASK_TOGGLE,
  payload: action,
});

export const breakTimeToggle = (action) => ({
  type: types.BREAK_TOGGLE,
  payload: action,
});

export const breakNextModifier = (action) => ({
  type: types.BREAK_NEXT,
  payload: action,
});

export const startToggler = (action) => ({
  type: types.TOGGLE_START,
  payload: action,
});
