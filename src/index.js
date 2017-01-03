import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
