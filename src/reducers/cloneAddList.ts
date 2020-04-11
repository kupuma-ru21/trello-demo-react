import { CLONE_ADD_LIST, CLEATE_ADD_LIST } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  cloneAddList: [],
};

const cloneAddList = (state = initialState.cloneAddList, action: any) => {
  const add_list = { addListText: 'Add a list...', saveText: '保存' };
  switch (action.type) {
    case CLONE_ADD_LIST:
      return [...state, add_list];
    case CLEATE_ADD_LIST:
      return [...state, add_list];
    default:
      return state;
  }
};

export default cloneAddList;
