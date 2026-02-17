import React from 'react';
import './Hero.css';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Goodbye <span>junk food</span>! <br />
          Hello Super Healthy Food
        </h1>
        <div className="hero-buttons">
          <button className="btn-primary">I'm Hungry</button>
          <button className="btn-secondary">Show me more</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
