import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser, login } from '../redux/actions/userActions'

class UserForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  submit = e => {
    e.preventDefault()
    this.props.type === 'signup'
      ? this.props.createUser(this.state).then(() => {
          this.setState({ name: '', email: '', password: '' })
          this.props.history.push('/')
        })
      : this.props.login(this.state).then(() => {
          this.setState({ email: '', password: '' })
          this.props.history.push('/')
        })
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        {this.props.type === 'signup' && <input
          onChange={this.handleOnChange}
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Name"
        />}
        <input
          onChange={this.handleOnChange}
          name="email"
          type="email"
          value={this.state.email}
          placeholder="Email"
        />
        <input
          onChange={this.handleOnChange}
          name="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { createUser, login })(UserForm)