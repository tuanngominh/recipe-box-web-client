import React from 'react'
import {shallow, mount} from 'enzyme'
import Button from 'react-bootstrap/lib/Button'
import RecipeItemForm from './RecipeItemForm'
import RecipeItemModal from './RecipeItemModal'

const setup = () => {
  const actions = {
    onSave: jest.fn()
  }
  const componentWrapper = mount(
    <RecipeItemModal >
      <RecipeItemForm onSave={actions.onSave}/>
    </RecipeItemModal>
  )

  return {
    componentWrapper: componentWrapper,
    actions: actions
  }
};

it ('Click submit button on modal -> inner form save', () => {
  const {componentWrapper, actions} = setup()
  console.log(componentWrapper.html())
  console.log(componentWrapper.find(Button))
  componentWrapper.find(Button).at(0).simulate('click')
  expect(actions.onSave).toHaveBeenCalledTimes(1)
})