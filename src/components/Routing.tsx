import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from 'reducers/index';
import AppContext from 'contexts/AppContext';
import App from './App';
import TransitionDestination from './TransitionDestination';

export interface State {
  createdBordArray: any[];
  openFlag: boolean;
  transitionText: string;
}
export const initialState: State = {
  createdBordArray: [],
  openFlag: false,
  transitionText: '',
};

const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              exact
              path="/createdBoard"
              component={TransitionDestination}
            />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default Routing;
