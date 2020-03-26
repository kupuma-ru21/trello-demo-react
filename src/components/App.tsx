import React, { useReducer } from 'react';
import Header from 'components/Header';
import CreateNewBoard from 'components/CreateNewBoard';

import reducer from 'reducers';
import AppContext from 'contexts/AppContext';

const App: React.FC = () => {
  const initialState = {
    sampleFlag: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
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
