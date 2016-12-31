import React from 'react'
import {mount} from 'enzyme'
import Recipe from './Recipe'

const setup = (recipe) => {
  const actions = {
    onDelete: jest.fn(),
    onSave: jest.fn(),
    onToggleIngredientsVisible: jest.fn()

  }
  const recipeItem = {
    id: 1,
    recipeName: 'recipe 1',
    ingredients: ['ingredient 1', 'ingredient 2']
  }
  const componentWrapper = mount(
    <Recipe {...actions} recipe={recipeItem}/>
  )

  return {
    componentWrapper: componentWrapper,
    actions: actions,
    recipe: recipe
  }
};

it ('render single recipe detail', () => {
  const {componentWrapper, actions} = setup()

  expect(componentWrapper.find('.panel-heading strong').at(0).text()).toEqual('recipe 1')

  expect(componentWrapper.find('li').at(0).text()).toEqual('ingredient 1')
  expect(componentWrapper.find('li').at(1).text()).toEqual('ingredient 2')

  componentWrapper.find('.btn-delete').at(0).simulate('click')
  expect(actions.onDelete).toBeCalled()

  componentWrapper.find('.panel-heading').at(0).simulate('click')
  expect(actions.onToggleIngredientsVisible).toBeCalled()

  //can't test onSave
})



