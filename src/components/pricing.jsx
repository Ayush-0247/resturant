import "./pricing.css";
function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2 className="pricing-title">Start Eating Healthy Today</h2>
      <p className="pricing-subtitle">
        Choose a plan that fits your lifestyle. Upgrade anytime.
      </p>

      <div className="pricing-grid">

        <div className="price-card basic">
          <h3>Basic</h3>
          <p className="price">
            <span>$99</span>/month
          </p>
          <ul>
            <li>✔ 1 meal per day</li>
            <li>✔ Nutrition guide</li>
            <li>✔ Email support</li>
          </ul>
          <button className="btn-outline">Get Started</button>
        </div>

        <div className="price-card standard popular">
          <div className="badge">Most Popular</div>
          <h3>Standard</h3>
          <p className="price">
            <span>$199</span>/month
          </p>
          <ul>
            <li>✔ 2 meals per day</li>
            <li>✔ Personal diet plan</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="btn-primary">Get Started</button>
        </div>

        <div className="price-card premium">
          <h3>Premium</h3>
          <p className="price">
            <span>$399</span>/month
          </p>
          <ul>
            <li>✔ 3 meals per day</li>
            <li>✔ Custom nutrition coach</li>
            <li>✔ 24/7 VIP support</li>
          </ul>
          <button className="btn-outline">Get Started</button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
