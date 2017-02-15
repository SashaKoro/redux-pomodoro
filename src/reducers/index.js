import { combineReducers } from 'redux';
import isBreakNext from './isBreakNext';
import isStartDisabled from './isStartDisabled';
import breakTime from './breakTime';
import taskTime from './taskTime';

const rootReducer = combineReducers({
  taskTime,
  breakTime,
  isBreakNext,
  isStartDisabled,
});

export default rootReducer;
