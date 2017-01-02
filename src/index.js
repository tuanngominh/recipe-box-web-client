import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import reducers from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {loadState, saveState} from './localStorage'

let store = createStore(reducers, loadState())
store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
