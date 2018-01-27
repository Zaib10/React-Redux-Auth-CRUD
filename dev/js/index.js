import 'babel-polyfill';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import {Providers, Provider} from "react-redux";
import App from "./components/app";
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';

const logger = createLogger();
//console.log("middleware", thunk, applyMiddleware)
const store= createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)

);




ReactDOM.render(
<Provider store ={store} > 
<MuiThemeProvider>
    <App/>
</MuiThemeProvider>
</Provider>
,
    document.getElementById('root')
);
  



