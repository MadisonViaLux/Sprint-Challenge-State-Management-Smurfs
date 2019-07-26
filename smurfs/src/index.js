import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import "./index.scss";




const store = createStore(reducer, applyMiddleware(thunk, logger))

class App extends Component {


    render() {
      return (

        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>

          <div>Welcome to your state management version of Smurfs!</div>

          <div>Start inside of your `src/index.js` file!</div>

          <div>Have fun!</div>

        </div>

      );
    }
  }



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
