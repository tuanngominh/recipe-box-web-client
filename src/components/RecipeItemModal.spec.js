import React from 'react'
import {shallow, mount} from 'enzyme'
import Button from 'react-bootstrap/lib/Button'
import RecipeItemModal from './RecipeItemModal'

const setup = () => {
  const actions = {
    onSubmit: jest.fn()
  }
  const componentWrapper = mount(
    <RecipeItemModal onSubmit={actions.onSubmit}>
    </RecipeItemModal>
  )

  return {
    componentWrapper: componentWrapper,
    actions: actions
  }
};

it ('Click submit button on modal -> call submit callback', () => {
  const {componentWrapper, actions} = setup()
  componentWrapper.find(Button).at(0).simulate('click')
  expect(actions.onSubmit).toHaveBeenCalledTimes(1)
})