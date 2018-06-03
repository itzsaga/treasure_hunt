import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import App from './components/App'

import './styles/base.sass'

ReactDOM.render(
  <Router>
    <App path="/">
    </App>
  </Router>,
  document.getElementById('app')
)