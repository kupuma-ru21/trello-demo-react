import { CREATE_NEW_BOARD } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  createdBordArray: [],
  openFlag: false,
  transitionText: '',
};

const createdBordArray = (
  state = initialState.createdBordArray,
  action: any
) => {
  switch (action.type) {
    case CREATE_NEW_BOARD:
      const sampleObj = { text: action.text };
      const setStorageArray = JSON.stringify([...state, sampleObj]);
      localStorage.setItem('storageArray', setStorageArray);
      return [...state, sampleObj];
    default:
      return state;
  }
};

export default createdBordArray;
