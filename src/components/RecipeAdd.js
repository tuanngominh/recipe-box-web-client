import React, {Component, PropTypes} from 'react'
import RecipeItemModal from './RecipeItemModal'
import RecipeItemForm from './RecipeItemForm'

class RecipeAdd extends Component {
  constructor() {
    super()
    this.openModal = this.openModal.bind(this)
    this.submitModal = this.submitModal.bind(this)
  }
  openModal() {
    this.refs.modal.open()
  }
  submitModal() {
    this.refs.form.submit()
  }
  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={this.openModal}>Add Recipe</button>
        <RecipeItemModal ref='modal' title='Add Recipe' submitModal={this.submitModal}>
          <RecipeItemForm ref='form' onSave={this.props.onSave}/>
        </RecipeItemModal>      
      </div>
    )
  }
}

RecipeAdd.PropTypes = {
  onSave: PropTypes.func
}
export default RecipeAdd