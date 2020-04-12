import { SEND_TEXT_AFER_ADD_LIST_MODAL } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  createBoardReducer: {
    afterAddListModal: [],
    afterAddListModalTextArea: [],
  },
};

const afterAddListModalTextArea = (
  state = initialState.createBoardReducer.afterAddListModalTextArea,
  action: any
) => {
  switch (action.type) {
    case SEND_TEXT_AFER_ADD_LIST_MODAL:
      return [...state, { text: action.addListContentText }];
    default:
      return state;
  }
};

export default afterAddListModalTextArea;
