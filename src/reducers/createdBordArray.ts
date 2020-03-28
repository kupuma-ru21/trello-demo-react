import { CREATE_NEW_BOARD } from 'actions/index';

export interface State {
  createdBordArray: any[];
}
export const initialState: State = {
  createdBordArray: [],
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
