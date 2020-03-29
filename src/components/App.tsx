import React, { useReducer } from 'react';
import Header from 'components/Header';
import reducer from 'reducers/index';
import AppContext from 'contexts/AppContext';
import DisplayBoardArea from 'components/DisplayBoardArea';

export interface State {
  createdBordArray: any[];
  openFlag: boolean;
}
export const initialState: State = {
  createdBordArray: [],
  openFlag: false,
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <DisplayBoardArea />
      </AppContext.Provider>
    </div>
  );
};

export default App;
