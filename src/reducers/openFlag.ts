import { SEND_OPEN_FLAG } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  createdBordArray: [],
  openFlag: false,
  transitionText: '',
};

const openFlag = (state = initialState.openFlag, action: any) => {
  switch (action.type) {
    case SEND_OPEN_FLAG:
      return !state;
    default:
      return state;
  }
};

export default openFlag;
