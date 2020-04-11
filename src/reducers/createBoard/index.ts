import { combineReducers } from 'redux';

import cloneAddList from 'reducers/createBoard/cloneAddList';
import afterCloneAddList from 'reducers/createBoard/afterCloneAddList';
const createBoardReducer = combineReducers({ cloneAddList, afterCloneAddList });

export default createBoardReducer;
