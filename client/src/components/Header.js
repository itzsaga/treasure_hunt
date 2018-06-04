import React, { Component } from 'react'
import { Link } from '@reach/router'
import icon from '../images/th-icon.jpg'

class Header extends Component {
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
              Search Bar
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button className="button is-primary">Log In</button>
            </div>
            <div className="level-item">
              <button className="button is-primary">Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header