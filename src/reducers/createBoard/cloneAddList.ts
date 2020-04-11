import { CLEATE_ADD_LIST } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  createBoardReducer: {
    cloneAddList: [],
    afterCloneAddList: [],
  },
};

const cloneAddList = (
  state = initialState.createBoardReducer.cloneAddList,
  action: any
) => {
  const add_list = { addListText: 'Add a list...', saveText: '保存' };
  switch (action.type) {
    case CLEATE_ADD_LIST:
      return [add_list];
    default:
      return state;
  }
};

export default cloneAddList;
