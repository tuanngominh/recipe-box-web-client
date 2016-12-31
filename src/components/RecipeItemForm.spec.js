import React from 'react'
import {shallow, mount} from 'enzyme'
import RecipeItemForm from './RecipeItemForm'
import FormControl from 'react-bootstrap/lib/FormControl'

const setup = (recipe) => {
  const actions = {
    onSave: jest.fn()
  }
  let componentWrapper;
  if (recipe) {
    componentWrapper = mount(
      <RecipeItemForm {...actions} recipe={recipe}/>
    )
  } else {
    componentWrapper = mount(
      <RecipeItemForm {...actions}/>
    )
  }

  return {
    componentWrapper: componentWrapper,
    actions: actions
  }
};

it ('submit form -> save', () => {
  const {componentWrapper, actions} = setup()  
  componentWrapper.find('form').simulate('submit')
  // expect(actions.onSave).toBeCalled()
  expect(actions.onSave.mock.calls.length).toBe(1)
})

it ('create new recipe with: ingredient, recipe name', () => {
  const {componentWrapper, actions} = setup()
  
  const recipeName = 'name 1', ingredients = 'in1,in2'
  componentWrapper.find(FormControl).at(0).simulate('change', {target:{value: recipeName}})
  componentWrapper.find(FormControl).at(1).simulate('change', {target:{value: ingredients}})
  componentWrapper.find('form').simulate('submit')

  const args0 = actions.onSave.mock.calls[0][0];
  expect(args0.recipeName).toBe(recipeName)
  expect(args0.ingredients).toEqual(ingredients.split(','))
  expect(args0.id).toBeUndefined()
})

it ('create new recipe with: ingredient, recipe name', () => {
  const recipe = {
    id: 1,
    recipeName: 'name 1',
    ingredients: ['in1', 'in2']
  }
  const {componentWrapper, actions} = setup(recipe)
  
  //do nothing, and submit, should not change recipe data
  componentWrapper.find('form').simulate('submit')
  let args0 = actions.onSave.mock.calls[0][0];
  expect(args0).toEqual(recipe)

  //update recipe name, ingredients
  const recipeName = 'name 2', ingredients = 'in1'
  componentWrapper.find(FormControl).at(0).simulate('change', {target:{value: recipeName}})
  componentWrapper.find(FormControl).at(1).simulate('change', {target:{value: ingredients}})
  componentWrapper.find('form').simulate('submit')

  args0 = actions.onSave.mock.calls[1][0];
  expect(args0.recipeName).toBe(recipeName)
  expect(args0.ingredients).toEqual(ingredients.split(','))
  expect(args0.id).toBe(recipe.id)
})


