import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Welcome from './Welcome';

import RecipeItemForm from '../components/RecipeItemForm'
import RecipeItemModal from '../components/RecipeItemModal'
import Recipe from '../components/Recipe'

const recipe = {
  id: 1,
  recipeName: 'recipe 1',
  ingredients: ['ingredient 1', 'ingredient 2']
}

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

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