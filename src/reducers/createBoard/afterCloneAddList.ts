import { AFER_CLONE_ADD_LIST } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  createBoardReducer: {
    afterAddListModal: [],
  },
};

const afterCloneAddList = (
  state = initialState.createBoardReducer.afterAddListModal,
  action: any
) => {
  switch (action.type) {
    case AFER_CLONE_ADD_LIST:
      return [...state, { addListText: action.addListText }];
    default:
      return state;
  }
};

export default afterCloneAddList;
