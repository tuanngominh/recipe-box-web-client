import React from 'react'
import {Component, PropTypes} from 'react'

import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

class RecipeItemModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.props.submitModal}>Save</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </div>      
    )
  }
}

RecipeItemModal.propTypes = {
  title: PropTypes.string,
  submitModal: PropTypes.func,
  showModal: PropTypes.bool
}

RecipeItemModal.defaultProps = {
  showModal: false
}


export default RecipeItemModal;