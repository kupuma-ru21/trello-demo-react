import { CRRENT_WINDOW_WIDTH } from 'actions/index';
import { State } from 'components/App';

const initialState: State = {
  createdBordArray: [],
  addMarginTopArray: [],
};

const addMarginTopArray = (
  state = initialState.addMarginTopArray,
  action: any
) => {
  switch (action.type) {
    case CRRENT_WINDOW_WIDTH:
      return state;
    default:
      return state;
  }
};

export default addMarginTopArray;
