import React from "react";
import "./About.css";
import { useEffect} from "react";

import Footer from "../components/Footer";







const About = () => {


useEffect(() => {
  const animatedElements = document.querySelectorAll(
    ".edge-card, .ext-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);



  return (
    <section className="about-page">
      {/* HERO (keeping your good part) */}
      <div className="about-hero">
        <div className="about-text">
          <h1>Redefining Healthy Food Delivery</h1>
          <p>
            GreenBite blends culinary craftsmanship with smart logistics to
            deliver fresh, responsibly sourced meals at scale.
          </p>
          <h3 className="motto">Fresh. Fast. Responsible.</h3>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Healthy Food"
          />
        </div>
      </div>

      {/* BRAND PHILOSOPHY */}
      <div className="philosophy">
        <h2>Built for the Modern Lifestyle</h2>
        <p>
          We design every meal for people who move fast but care deeply about
          what they consume. From sourcing to delivery, efficiency meets
          integrity.
        </p>
      </div>

      <div className="food-marquee">
        <div className="food-track">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" />
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" />
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" />
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" />
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" />
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" />
        </div>
      </div>

      {/* OPERATIONAL EDGE */}
<div className="edge-section">
  <div className="edge-header">
    <h2>Our Operational Edge</h2>
    <p>
      Technology and sustainability power every layer of our delivery ecosystem.
    </p>
  </div>

  <div className="edge-grid">

    <div className="edge-card">
      <div className="edge-number">01</div>
      <h3>Smart Logistics</h3>
      <p>
        AI-optimized routing reduces delivery time while lowering carbon emissions.
      </p>
    </div>

    <div className="edge-card">
      <div className="edge-number">02</div>
      <h3>Farm Partnerships</h3>
      <p>
        Direct sourcing from certified farms ensures freshness and traceability.
      </p>
    </div>

    <div className="edge-card">
      <div className="edge-number">03</div>
      <h3>Data Driven Kitchens</h3>
      <p>
        Predictive demand forecasting minimizes waste and maintains ingredient quality.
      </p>
    </div>

  </div>
</div>


<div className="about-extension">
  <div className="extension-header">
    <h2>Engineered for Modern Food Delivery</h2>
    <p>
      From sourcing to doorstep, every layer of GreenBite is optimized
      for quality, speed, and sustainability.
    </p>
  </div>

  <div className="extension-cards">
    <div className="ext-card">
      <div className="ext-icon">⚡</div>
      <h3>Real-Time Tracking</h3>
      <p>
        Live order monitoring with transparent preparation and delivery updates.
      </p>
    </div>

    <div className="ext-card">
      <div className="ext-icon">🌍</div>
      <h3>Eco Infrastructure</h3>
      <p>
        Sustainable packaging and optimized routes to reduce carbon footprint.
      </p>
    </div>

    <div className="ext-card">
      <div className="ext-icon">📊</div>
      <h3>Smart Kitchens</h3>
      <p>
        Data-driven forecasting systems to ensure freshness and reduce waste.
      </p>
    </div>
  </div>
</div>




<div className="sustainability">
  <div className="sustain-left">
    <h2>Committed to a Greener Future</h2>
    <p>
      Sustainability is embedded into our operations. From biodegradable
      packaging to route optimization, we actively reduce environmental impact
      at every stage of delivery.
    </p>

    <ul>
      <li>✔ 100% eco-friendly packaging</li>
      <li>✔ Carbon-optimized delivery routes</li>
      <li>✔ Zero food waste policy</li>
    </ul>
  </div>

  <div className="sustain-right">
    <img
      src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
      alt="Eco Packaging"
    />
  </div>
</div>






<Footer />
    </section>
  );
};

export default About;
