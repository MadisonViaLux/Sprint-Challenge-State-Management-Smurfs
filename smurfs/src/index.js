import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { reducer } from './components/reducers/index'

import SmurfData from './smurfData'

import "./index.scss";




const store = createStore(reducer, applyMiddleware(thunk, logger))

function App() {



      return (

        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>

            <div>Welcome to your state management version of Smurfs!</div>

            <div>Start inside of your `src/index.js` file!</div>

            <div>Have fun!</div>

            <SmurfData />


        </div>

      );
  }



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
