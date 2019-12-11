import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../../redux/reducers/rootReducer';
import Home from '../Pages/Home/Home'

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));


function App() {
  let one = 1;
  let one = 3;
  let one = 4;
  let text1;

  return (
    <Provider store={store}>
      <Home />
    </Provider>

  );
}

export default App;
