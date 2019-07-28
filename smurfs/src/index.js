import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { reducer } from './components/reducers/index'
import SmurfApp from './smurfApp'
import "./index.scss";


const store = createStore(reducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <div className="App">
      <SmurfApp />
    </div>
    );
};


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));