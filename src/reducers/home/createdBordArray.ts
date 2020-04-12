import { CREATE_NEW_BOARD } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  createBoardReducer: {
    afterCloneAddList: [],
  },
};

const createdBordArray = (
  state = initialState.homeReducer.createdBordArray,
  action: any
) => {
  switch (action.type) {
    case CREATE_NEW_BOARD:
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      const sampleObj = { id, text: action.text };
      const setStorageArray = JSON.stringify([...state, sampleObj]);
      localStorage.setItem('storageArray', setStorageArray);
      return [...state, sampleObj];
    default:
      return state;
  }
};

export default createdBordArray;
