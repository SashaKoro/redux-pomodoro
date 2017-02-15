import { TICK_TOGGLE } from '../actions/actionTypes';

const tickTime = (state = '25:00', action) => {
  switch (action.type) {
  case TICK_TOGGLE:
    return action.payload;

  default: return state;
  }
};

export default tickTime;
