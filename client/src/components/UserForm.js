import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser, login } from '../redux/actions/userActions'

class UserForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  onSubmit = e => {
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
    const name = this.props.type === 'signup' ?
      <div className="field">
        <label className="label">Name</label>
          <div className="control">
            <input
              onChange={this.handleOnChange}
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Name"
            />
          </div>
        </div> :
        null
    return (
      <form onSubmit={this.submit}>
        { name }
        <div className="field">
          <label className="label">E-mail</label>
          <div className="control">
            <input
              onChange={this.handleOnChange}
              name="email"
              type="email"
              value={this.state.email}
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              onChange={this.handleOnChange}
              name="password"
              type="password"
              value={this.state.password}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button onClick={this.onSubmit} className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, { createUser, login })(UserForm)