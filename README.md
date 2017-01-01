I build this small app during learning react and redux. The app is simple: build a recipe box. 

[Demo](https://tuanngominh.github.io/recipe-box-web-client) is in [storybook](https://getstorybook.io) format in which first story is full app and following ones are app's components.

## App building steps

### Step 1 - Add react, webpack
Using [create-react-app](https://github.com/facebookincubator/create-react-app) to quickly build a code base with react, webpack

### Step 2 - Add style
Add style for the app by adding bootstrap, fontawesome
```sh
cd project-folder
npm install bootstrap --save
```

Update `src/index.js` by adding :
```js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
```

In this example code, I use Bootsrap's modal which will need Bootstrap js. Looks like we will have conflict between Bootstrap js and react so I switch to use [React-Bootstrap](react-bootstrap.github.io)
```
npm install react-bootstrap --save
```

### Step 3 - Enable unit test
Using [enzyme](http://airbnb.io/enzyme/) with [jest](https://facebook.github.io/jest) as recommended by [Redux example](https://github.com/reactjs/redux/tree/master/examples)

```sh
npm install --save-dev enzyme react-addons-test-utils
```

Create `component-name.spec.js` for test code

### Step 4 - Add visual test catalog
Using [react storybook](https://github.com/kadirahq/react-storybook) to view the app components in different ways at once. It looks like we explorer all [bootstrap components](http://getbootstrap.com/components/) with different configurations at once.

This tool is helpfull during shaping, splitting the responsibility of presentational components during development. 

## Issues 
During the course of building this sample app, I face several issues.

### Unit test component which use React-Bootstrap
If component include React-Bootstrap component e.g. `src/components/RecipeItemModal.js` :
```js
class RecipeItemModal extends Component{
  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.props.submitModal}>Save</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </div>      
    )
  }
}
```

then in test code `src/components/RecipeItemModal.spec.js`
```jsx
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
  componentWrapper.find(Button).at(0).simulate('click') <-- Can't find Button
  expect(actions.onSubmit).toHaveBeenCalledTimes(1)
})
```
I can't find Button component in RecipeItemModal. But I can find FormControl component in `src/components/RecipeItemForm.spec.js`. So there is some tricky with working with React-Bootstrap Modal