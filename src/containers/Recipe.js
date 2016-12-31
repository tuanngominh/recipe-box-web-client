import React from 'react'
import {connect} from 'react-redux'
import RecipeUI from '../components/Recipe'

const RecipeContainer = connect(
  null,
  (dispatch) => {
    return {
      onDelete: (id) => {
        dispatch({
          type:'DELETE',
          id: id
        })
      },      
      onSave: (recipe) => {
        if ('id' in recipe) {
          dispatch({
            type: 'EDIT',
            id: recipe.id,
            recipeName: recipe.recipeName,
            ingredients: recipe.ingredients
          })
        } else {
          dispatch({
            type: 'ADD',
            recipeName: recipe.recipeName,
            ingredients: recipe.ingredients
          })
        }
      }
    }
  }
)(RecipeUI)

export default RecipeContainer