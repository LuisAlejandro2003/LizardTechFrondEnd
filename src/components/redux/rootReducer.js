// rootReducer.js
import { combineReducers } from 'redux';
import chartDataReducer from './reducers';

const rootReducer = combineReducers({
  chartData: chartDataReducer,
  // ... otros reducers ...
});

export default rootReducer;
