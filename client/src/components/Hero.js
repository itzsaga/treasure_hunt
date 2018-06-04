import React from 'react'
import logo from '../images/th-logo.jpg'

const Hero = () =>
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="level">
          <div>
            <h1 className="title">
              Hero title
            </h1>
            <h2 className="subtitle">
              Hero subtitle
            </h2>
          </div>
          <div className="level-right">
            <div className="level-item">
              <img src={logo} alt={"treasure hunt logo"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default Hero