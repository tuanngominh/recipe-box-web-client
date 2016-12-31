import React, {Component, PropTypes} from 'react'
import RecipeItemModal from './RecipeItemModal'
import RecipeItemForm from './RecipeItemForm'

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsVisible: true
    }
    this.onToggleIngredientsVisible = this.onToggleIngredientsVisible.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.submitModal = this.submitModal.bind(this);

  }
  onToggleIngredientsVisible() {
    if (!this.props.selectedRecipe) {
      this.props.onToggleIngredientsVisible(this.props.recipe.id);  
    } else {
      this.setState({
        ingredientsVisible: !this.state.ingredientsVisible
      })      
    } 
  }
  getIsIngredientVisible() {
    if (!this.props.selectedRecipe) {
      return false;
    } else if (!this.state.ingredientsVisible) {
      return false;
    }
    return true;
  }
  openEditModal() {
    this.refs.editModal.open();
  }
  submitModal() {
    this.refs.form.submit()
  }
  render() {    
    const ingredientsStyle = {
      display: this.getIsIngredientVisible() ? 'block': 'none'
    }
    const {recipe, onDelete, onSave} = this.props
    return (
      <div className="panel panel-default">
        <div className="panel-heading" onClick={this.onToggleIngredientsVisible}>
          <strong>{recipe.recipeName}</strong>
        </div>
        <div className="panel-body" style={ingredientsStyle}>
          <ul className="list-group">
            {recipe.ingredients.map((ingredient, index) => (
              <li className="list-group-item" key={index}>{ingredient}</li>
            ))}            
          </ul>
        </div>
        <div className="panel-footer" style={ingredientsStyle}>
          <button className='btn btn-danger btn-delete' onClick={() => onDelete(recipe.id)}>Delete</button>
          {' '}
          <button className='btn btn-default' onClick={this.openEditModal}>Edit</button>
          <RecipeItemModal ref='editModal' title='Edit Recipe' submitModal={this.submitModal}>
            <RecipeItemForm ref='form' recipe={recipe} onSave={onSave}/>
          </RecipeItemModal>
        </div>
      </div>      
    )
  }
}
Recipe.PropTypes = {
  recipe: PropTypes.shape({
    recipeName: PropTypes.string.isRequired, 
    ingredient: PropTypes.array.isRequired, 
    id: PropTypes.number.isRequired
  }),
  selectedRecipe: PropTypes.boolean,
  onToggleIngredientsVisible: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func
}

Recipe.defaultProps = {
  selectedRecipe: false
}

export default Recipe;