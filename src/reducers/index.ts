import { combineReducers } from 'redux';

import homeReducer from 'reducers/home';
import createBoardReducer from 'reducers/createBoard';

export default combineReducers({ homeReducer, createBoardReducer });
