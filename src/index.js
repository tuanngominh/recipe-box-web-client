import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import reducers from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

let store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
