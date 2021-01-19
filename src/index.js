import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// imports
import { Provider } from "react-redux";
import { createStore } from "redux";
import { allReducers } from "./reducers";

//STORE
const store = createStore( allReducers );

ReactDOM.render(
  <React.StrictMode>
    {/* Providing the GLOBAL STATE TO ALL COMPONENTS */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

