import React from 'react'
import {mount} from 'enzyme'
import RecipeBox from './RecipeBox'
import Recipe from './Recipe'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

const setup = () => {

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
  //need store as RecipeBox include a Container Component
  let store = createStore((state, action) => state)
  const componentWrapper = mount(
    <Provider store={store}>
      <RecipeBox recipes={recipes}/>
    </Provider>
  )

  return {
    componentWrapper: componentWrapper,
    recipes: recipes
  }
};

it ('submit form -> save', () => {
  const {componentWrapper, recipes} = setup()  
  expect(componentWrapper.find(Recipe).length).toEqual(recipes.length)
})