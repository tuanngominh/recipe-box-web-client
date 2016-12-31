import React from 'react'
import {Component, PropTypes} from 'react'

import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

import RecipeItemForm from './RecipeItemForm'

const ModalChildWrapper = ({ModalChild, onSave}) => (
  <ModalChild onSave={onSave} />
);
class RecipeItemModal extends Component{
  constructor() {
    super();
    this.state = {
      showModal: true
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  submitModal() {
    if (this.refs.modalChild && this.refs.modalChild.submit) {
      this.refs.modalChild.submit();
    }
  }
  render() {
    //add ref to props.children so later we can call submit
    const childWithRefProps = React.cloneElement(
      React.Children.only(this.props.children),
      {
        ref: 'modalChild'
      }
    )    
    return (
      <div>
        { /*<Button bsStyle='primary' onClick={this.open}>{this.props.children}</Button>*/}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create new recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {childWithRefProps}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.submitModal}>Save</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </div>      
    )
  }
}

RecipeItemModal.propTypes = {
  // onAdd: PropTypes.func,
  // onEdit: PropTypes.func
}


export default RecipeItemModal;