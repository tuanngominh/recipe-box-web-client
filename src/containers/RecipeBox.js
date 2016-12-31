import RecipeBoxUI from '../components/RecipeBox'
import {connect} from 'react-redux'

const RecipeBoxContainer = connect(
  state => ({recipes: state.recipes})
)(RecipeBoxUI)

export default RecipeBoxContainer