import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForm from './UserForm'

class Login extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className="title is-2">Login</h2>
        <UserForm history={this.props.history} type="login" />
      </div>
    )
  }
}

export default Login