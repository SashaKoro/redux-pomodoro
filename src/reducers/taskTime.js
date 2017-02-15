import { TASK_TOGGLE } from '../actions/actionTypes';

const taskTime = (state = 25, action) => {
  switch (action.type) {
  case TASK_TOGGLE:
    return  action.payload;

  default: return state;
  }
};

export default taskTime;
