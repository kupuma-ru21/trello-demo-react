import { TRANSITION_TEXT } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
  cloneAddList: [],
};

const transitionText = (
  state = initialState.homeReducer.transitionText,
  action: any
) => {
  switch (action.type) {
    case TRANSITION_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default transitionText;
