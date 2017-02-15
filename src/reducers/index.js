import { combineReducers } from 'redux';
import isBreakNext from './isBreakNext';
import isStartDisabled from './isStartDisabled';
import breakTime from './breakTime';
import taskTime from './taskTime';
import tickTime from './tickTime';

const rootReducer = combineReducers({
  tickTime,
  taskTime,
  breakTime,
  isBreakNext,
  isStartDisabled,
});

export default rootReducer;
