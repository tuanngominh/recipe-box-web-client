import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Welcome from './Welcome';

import RecipeItemForm from '../components/RecipeItemForm'
import RecipeItemModal from '../components/RecipeItemModal'
import Recipe from '../components/Recipe'
import RecipeAddUI from '../components/RecipeAdd'

import RecipeBoxContainer from '../containers/RecipeBox'
import App from '../components/App'

import reducers from '../reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {loadState, saveState} from '../localStorage'

const recipe = {
  id: 1,
  recipeName: 'recipe 1',
  ingredients: ['ingredient 1', 'ingredient 2']
}

const recipes = [
  {
    id: 1,
    recipeName: 'recipe 1',
    ingredients: ['ingredient 1.1', 'ingredient 1.2']
  },
  {
    id: 2,
    recipeName: 'recipe 2',
    ingredients: ['ingredient 2.1', 'ingredient 2.2']
  }
]

storiesOf('The App', module)
  .add(' ', () => {
    let store = createStore(reducers, loadState())
    store.subscribe(() => {
      saveState(store.getState())
    })

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

storiesOf('RecipeItemForm', module)
  .add('Add ', () => (
    <RecipeItemForm />
  ))
  .add('Edit', () => {   
    return (<RecipeItemForm recipe={recipe}/>)
  });

storiesOf('RecipeItemModal', module)
  .add(' ', () => (
    <RecipeItemModal showModal={true}/>
  ))
  .add('Show empty body and with submit', () => {
    return (
      <RecipeItemModal showModal={true} title='Create new recipe' submitModal={action('submitModel')}/>
    )
  })
  .add('Show add form and with submit', () => {
    return (
      <RecipeItemModal showModal={true} title='Create new recipe' submitModal={action('submitModel')}>        
        <RecipeItemForm onSave={action('onSave')}/>
        <p>Note: press enter to trigger form save</p>
      </RecipeItemModal>
    )
  })
  .add('Show edit form and with submit', () => {
    return (
      <RecipeItemModal showModal={true} title='Create new recipe' submitModal={action('onSubmit')}>        
        <RecipeItemForm recipe={recipe} onSave={action('onSave')}/>
        <p>Note: press enter to trigger form save</p>
      </RecipeItemModal>
    )
  })

storiesOf('Recipe', module)
  .add('View detail, show form in modal, edit, save', () => (
    <Recipe 
    selectedRecipe={true} 
    onDelete={action('onDelete')} 
    onToggleIngredientsVisible={action('onToggleIngredientsVisible')} 
    onSave={action('onSave')} 
    recipe={recipe}
    />
  ))
  .add('Multiple recipes', () => {
    return (
      <div>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.id}
          selectedRecipe={recipe.id === 1}
          onDelete={action('onDelete')} 
          onToggleIngredientsVisible={action('onToggleIngredientsVisible')} 
          onSave={action('onSave')} 
          recipe={recipe}        
          />
        ))}
      </div>
    )
  })


storiesOf('RecipeAdd', module)
  .add('Click add button then show modal', () => (
    <RecipeAddUI 
    onSave={action('onAdd')} 
    />
  ))

storiesOf('RecipeBox', module)
  .add('Show list of recipe in recipe box ', () => {
    let store = createStore(reducers)
    //prebuilt some recipes
    recipes.forEach(recipe => {
      let action = recipe
      action.type = 'ADD'
      store.dispatch(action)
    })
    return (
      <Provider store={store}>
        <RecipeBoxContainer />
      </Provider>
    )
  })