import React, { useReducer } from 'react';
import Header from 'components/Header';
import CreateNewBoard from 'components/CreateNewBoard';
import reducer from 'reducers/index';
import AppContext from 'contexts/AppContext';

export interface State {
  createdBordArray: any[];
}
export const initialState = {
  createdBordArray: [],
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <CreateNewBoard />
      </AppContext.Provider>
    </div>
  );
};

export default App;
