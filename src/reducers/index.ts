import { combineReducers } from 'redux';

import createdBordArray from './createdBordArray';
import openFlag from './openFlag';
import transitionText from './transitionText';

export default combineReducers({ createdBordArray, openFlag, transitionText });
