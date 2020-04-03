import { CREATE_NEW_BOARD } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  createdBordArray: [],
  openFlag: false,
};

const createdBordArray = (
  state = initialState.createdBordArray,
  action: any
) => {
  switch (action.type) {
    case CREATE_NEW_BOARD:
      const sampleObj = { text: action.text };
      return [...state, sampleObj];
    default:
      return state;
  }
};

export default createdBordArray;
