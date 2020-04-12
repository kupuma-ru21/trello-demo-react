import { combineReducers } from 'redux';
import afterAddListModal from 'reducers/createBoard/afterAddListModal';
import afterAddListModalTextArea from 'reducers/createBoard/afterAddListModalTextArea';
const createBoardReducer = combineReducers({
  afterAddListModal,
  afterAddListModalTextArea,
});

export default createBoardReducer;
