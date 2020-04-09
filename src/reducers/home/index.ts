import { combineReducers } from 'redux';

import createdBordArray from './createdBordArray';
import openFlag from './openFlag';
import transitionText from './transitionText';

const homeReducer = combineReducers({
  createdBordArray,
  openFlag,
  transitionText,
});

export default homeReducer;
