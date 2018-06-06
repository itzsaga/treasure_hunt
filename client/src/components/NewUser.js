import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForm from './UserForm'

class NewUser extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className="title is-2">Register</h2>
        <UserForm type="signup" history={this.props.history} />
      </div>
    )
  }
}

export default NewUser