import { BREAK_NEXT } from '../actions/actionTypes';

const isBreakNext = (state = true, action) => {
  switch (action.type) {
  case BREAK_NEXT:
    return action.payload;

  default: return state;
  }
};

export default isBreakNext;
