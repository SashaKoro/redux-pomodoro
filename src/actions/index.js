import * as types from './actionTypes';

export const tickTimeToggle = (newVal) => ({
  type: types.TICK_TOGGLE,
  payload: newVal,
});

export const taskTimeToggle = (newVal) => ({
  type: types.TASK_TOGGLE,
  payload: newVal,
});

export const breakTimeToggle = (newVal) => ({
  type: types.BREAK_TOGGLE,
  payload: newVal,
});

export const breakNextModifier = (newBool) => ({
  type: types.BREAK_NEXT,
  payload: newBool,
});

export const startToggler = (newBool) => ({
  type: types.TOGGLE_START,
  payload: newBool,
});
