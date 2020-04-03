import { TRANSITION_TEXT } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  createdBordArray: [],
  openFlag: false,
  transitionText: '',
};

const transitionText = (state = initialState.transitionText, action: any) => {
  switch (action.type) {
    case TRANSITION_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default transitionText;
