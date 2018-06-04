import React, { Component } from 'react'
import { Link } from '@reach/router'
import Fuse from 'fuse.js'
import { fuseOptions } from '../fuseOptions'
import icon from '../images/th-icon.jpg'

class Header extends Component {
  state = {
    results: [],
    searchInput: '',
    placeholderText: 'Search',
  }

  handleChange = e => {
    const fuse = new Fuse(this.props.products, fuseOptions)
    this.setState({
      searchInput: e.target.value,
      results: fuse.search(e.target.value)
    })
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