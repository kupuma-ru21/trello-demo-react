import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from 'reducers/index';
import AppContext from 'contexts/AppContext';
import App from './App';
import About from './About';

export interface State {
  createdBordArray: any[];
  openFlag: boolean;
}
export const initialState: State = {
  createdBordArray: [],
  openFlag: false,
};

const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default Routing;
