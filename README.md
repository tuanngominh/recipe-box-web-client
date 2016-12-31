I build this small app during learning react and redux. The app is simple: build a recipe box.

## The steps

### App with react, webpack
Using [create-react-app](https://github.com/facebookincubator/create-react-app) to quickly build a code base with react, webpack

### App style
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

### Unit test
Using [enzyme](http://airbnb.io/enzyme/) with [jest](https://facebook.github.io/jest) [Redux example](https://github.com/reactjs/redux/tree/master/examples)

```sh
npm install --save-dev enzyme react-addons-test-utils
```

Create `component-name.spec.js` for test code