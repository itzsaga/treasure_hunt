import React from 'react'
import logo from '../images/th-logo.jpg'

const Hero = () =>
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="level">
          <div id="hero-left">
            <h1 className="title">
              Discover your next favorite thing
            </h1>
            <h2 className="subtitle">
              Treasure Hunt surfaces the best new products, every day. It's a place for product-loving enthusiasts to share and geek out about the latest mobile apps, websites, hardware projects, and tech creations.
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