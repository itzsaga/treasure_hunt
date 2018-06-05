import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import products from './reducers/productsReducer'
import auth from './reducers/usersReducer'

const rootReducer = combineReducers({
  products,
  auth,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)