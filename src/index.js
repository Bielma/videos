import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import initialState from '../initialState.json' ;
import reducer from './reducers/';

//ctl + k 

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState.initialState, composeEnhancers); 

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

