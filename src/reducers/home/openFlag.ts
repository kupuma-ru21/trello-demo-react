import { SEND_OPEN_FLAG, SEND_OPEN_FLAG_FALSE } from 'actions/index';
import { State } from 'components/Routing';

const initialState: State = {
  homeReducer: {
    createdBordArray: [],
    openFlag: false,
    transitionText: '',
  },
};

const openFlag = (state = initialState.homeReducer.openFlag, action: any) => {
  switch (action.type) {
    case SEND_OPEN_FLAG:
      return !state;
    case SEND_OPEN_FLAG_FALSE:
      return false;
    default:
      return state;
  }
};

export default openFlag;
