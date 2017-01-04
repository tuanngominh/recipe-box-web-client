import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import RecipeBox from '../containers/RecipeBox'
import RecipeAdd from '../containers/RecipeAdd'

import About from './About'
import Login from './Login'
import Logout from './Logout'
import auth from '../auth'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const RecipeBoxWrapper = () => (
  <div>
    <h1> Build your recipe box</h1>
    <RecipeBox />
    <br/>
    <RecipeAdd/>  
  </div>
)

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={About} />
        <Route path='/recipe-box' component={RecipeBoxWrapper} onEnter={requireAuth}/>
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>  
)

export default Root