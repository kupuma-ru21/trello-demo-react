import { combineReducers } from 'redux';

import homeReducer from 'reducers/home';
import cloneAddList from 'reducers/cloneAddList';

export default combineReducers({ homeReducer, cloneAddList });
