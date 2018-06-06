import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Fuse from 'fuse.js'

import { fuseOptions } from '../fuseOptions'
import icon from '../images/th-icon.jpg'

class Header extends Component {
  state = {
    searchInput: '',
    placeholderText: 'Search',
  }

  handleChange = e => {
    const fuse = new Fuse(this.props.products, fuseOptions)
    this.setState({
      searchInput: e.target.value,
    })
    this.props.updateResults(fuse.search(e.target.value))
    e.target.value !== '' ? this.props.searching(true) : this.props.searching(false)
  }

  render() {
    return (
      <div className="container">
        <nav className="level navbar">
          <div className="level-left">
            <div className="level-item">
              <Link to="/">
                <img id="th-icon" src={icon} alt={"treasure hunt icon"} />
              </Link>
            </div>
            <div className="level-item">
              <input type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder={this.state.placeholderText} />
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link to="/login">
                <button className="button is-primary">Log In</button>
              </Link>
            </div>
            <div className="level-item">
              <Link to="/signup">
                <button className="button is-primary">Sign Up</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Header)