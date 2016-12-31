import React from 'react';
import RecipeBox from '../containers/RecipeBox'
import RecipeAdd from '../containers/RecipeAdd'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-11 col-xs-offset-1">
        <br/>
        <div className="jumbotron">
          <h1> Build your recipe box</h1>
          <RecipeBox />
          <br/>
          <RecipeAdd/>
        </div>
      </div>
  	</div>
  </div>
)

export default App;