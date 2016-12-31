import {connect} from 'react-redux'
import RecipeAddUI from '../components/RecipeAdd'

const RecipeAddContainer = connect(
  null,
  (dispatch) => {
    return {
      onSave: (recipe) => {
        dispatch({
          type: 'ADD',
          recipeName: recipe.recipeName,
          ingredients: recipe.ingredients
        })
      }
    }
  }
)(RecipeAddUI)

export default RecipeAddContainer