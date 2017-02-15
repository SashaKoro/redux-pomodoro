import { BREAK_TOGGLE } from '../actions/actionTypes';

const breakTime = (state = 5, action) => {
  switch (action.type) {
  case BREAK_TOGGLE:
    return action.payload;

  default: return state;
  }
};

export default breakTime;
