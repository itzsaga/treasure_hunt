import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="level navbar">
          <div className="level-left">
            <div className="level-item">
              Logo
            </div>
            <div className="level-item">
              Search Bar
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              Log In
            </div>
            <div className="level-item">
              Sign Up
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header