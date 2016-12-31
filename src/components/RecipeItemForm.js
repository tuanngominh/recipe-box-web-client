import React from 'react'
import {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class RecipeItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      recipeName: '',
      ingredients: '',
      //avoid validation on first load
      recipeNameDirty: false,
      ingredientsDirty: false
    }, (props.recipe) ? props.recipe : {})
    this.handleChangeRecipeName = this.handleChangeRecipeName.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.submit = this.submit.bind(this);    
  }
  getValidationStateRecipeName() {    
    if (!this.state.recipeNameDirty) {
      return undefined
    }

    //FIXME: how to show specific error message 
    const length = this.state.recipeName.length;
    if (length > 0) return 'success';
    else return 'error';
  }
  getValidationStateIngredients() {
    if (!this.state.ingredientsDirty) {
      return undefined
    }

    //FIXME: how to show specific error message 
    const length = this.state.ingredients.length;
    if (length > 0) return 'success';
    else return 'error';
  }
  handleChangeRecipeName(e) {
    this.setState({ 
      recipeName: e.target.value,
      recipeNameDirty: true
    });
  }
  handleChangeIngredients(e) {
    this.setState({ 
      ingredients: e.target.value.split(','),
      ingredientsDirty: true
    });
  }
  reset() {
    this.setState({
      recipeName: '',
      ingredients: '',
      //avoid validation on first load
      recipeNameDirty: false,
      ingredientsDirty: false
    });
  }
  submit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    let repice = {
      recipeName: this.state.recipeName,
      ingredients: this.state.ingredients,
    };
    if (this.props.recipe && 'id' in this.props.recipe) {
      repice.id = this.props.recipe.id;
    }
    
    this.props.onSave(repice);

    ReactDOM.findDOMNode(this.refs.form).reset();
    ReactDOM.findDOMNode(this.refs.recipeName).focus();
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.recipeName).focus();
  }
  render() {
    return (
      <form onSubmit={this.submit} ref='form'>
        <FormGroup
          controlId="recipeName"
          validationState={this.getValidationStateRecipeName()}
        >
          <ControlLabel>Recipe name</ControlLabel>
          <FormControl
            ref='recipeName'
            type="text"
            value={this.state.recipeName}
            placeholder="Enter recipe name"
            onChange={this.handleChangeRecipeName}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="ingredients"
          validationState={this.getValidationStateIngredients()}
        >
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl
            type="text"
            value={this.state.ingredients}
            placeholder="Enter ingredients,separated,by commas"
            onChange={this.handleChangeIngredients}
          />
          <FormControl.Feedback />
        </FormGroup>
        { /* add input submit so we can trigger onsubmit with enter key */ }
        <input type="submit" value="" style={{display:'none'}}/>      
      </form>      
    )
  }
}

RecipeItemForm.PropTypes = {
  onSave: PropTypes.func,
  recipe: PropTypes.shape({
    recipeName: PropTypes.string.isRequired, 
    ingredient: PropTypes.array.isRequired, 
    id: PropTypes.number.isRequired
  })
}

export default RecipeItemForm;