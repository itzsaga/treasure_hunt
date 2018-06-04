import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import products from './reducers/productsReducer'

const rootReducer = combineReducers({
  products,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)