import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import initialState from '../initialState.json' ;
import reducer from './reducers/';

//ctl + k 


const store = createStore(reducer, initialState.initialState); 

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

