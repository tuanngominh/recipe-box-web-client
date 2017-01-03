import reducers from './reducers'
import {createStore} from 'redux'

import {loadState, saveState} from './localStorage'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(reducers, persistedState)  
  store.subscribe(() => {
    saveState(store.getState())
  })
  return store
}

export default configureStore