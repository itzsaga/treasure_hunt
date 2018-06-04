import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './redux/store'

import './styles/base.sass'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App path="/">
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
)