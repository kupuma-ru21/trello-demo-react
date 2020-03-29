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
      // console.log(window.innerWidth);
      // console.log(action.createdBordArray, 'action.createdBordArray');

      if (window.innerWidth > 1154 && action.createdBordArray.length > 2) {
        // ここで3つめ以降のbordをsliceしてmarginTopを付与したい
        const targetArray = action.createdBordArray.slice(2);
        // console.log(targetArray, 'targetArray');
        return targetArray;
      }
      return state;
    default:
      return state;
  }
};

export default addMarginTopArray;
