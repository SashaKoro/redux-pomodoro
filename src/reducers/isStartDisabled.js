import { TOGGLE_START } from '../actions/actionTypes';

const isStartDisabled = (state = false, action) => {
  switch (action.type) {
  case TOGGLE_START:
    return action.payload;

  default:
    return state;
  }
};

export default isStartDisabled;
