import React, {Component, PropTypes} from 'react'
import RecipeContainer from '../containers/Recipe'

class RecipeBox extends Component {
  constructor() {
    super();
    this.state = {
      selectedRecipedId: null
    }
    this.onToggleIngredientsVisible = this.onToggleIngredientsVisible.bind(this);
  }
  onToggleIngredientsVisible(id) {
    this.setState({
      selectedRecipedId: id
    })
  }
  getRecipes() {
    return this.props.recipes.map(recipe => {
      if (recipe.id !== this.state.selectedRecipedId) {
        recipe.selectedRecipe = false;
      } else {
        recipe.selectedRecipe = true;  
      }
      return recipe;
    });
  }
  render() {
    const recipes = this.getRecipes();
    return (
      <div>
        {(!recipes.length || recipes.length === 0) ? 'There is no recipe yet, let create one':''}
        <ul>
        {recipes.map((recipe, index) => (
          <RecipeContainer 
            key={recipe.id} 
            recipe={recipe} 
            selectedRecipe={recipe.selectedRecipe}
            onToggleIngredientsVisible={(id) => this.onToggleIngredientsVisible(id)}>
          </RecipeContainer>
        ))}
        </ul>
      </div>      
    )
  }
}

RecipeBox.PropTypes = {
  recipes: PropTypes.array
}

RecipeBox.defaultProps = {
  recipes: []
}
export default RecipeBox;