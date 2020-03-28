import React, { useReducer } from 'react';
import Header from 'components/Header';
import CreateNewBoard from 'components/CreateNewBoard';

import reducer from 'reducers/index';
import AppContext from 'contexts/AppContext';

export interface State {
  sampleFlag: boolean;
}

const App: React.FC = () => {
  const initialState: State = {
    sampleFlag: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <CreateNewBoard />
        <div>sampleFlag</div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
