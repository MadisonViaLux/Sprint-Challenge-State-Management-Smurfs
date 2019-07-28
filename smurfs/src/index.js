import React from "react";
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
            <SmurfData />
        </div>
      );
  }


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));



