import './Feature.css';

function Features() {
  return (
    <section className="features">
      <h2>Get Food Fast — Not Fast Food</h2>

      <div className="feature-grid">
        <div className="card">
          <img 
            src="https://img.icons8.com/fluency/96/calendar.png" 
            alt="365 days service"
          />
          <h3>Up to 365 Days/Year</h3>
          <p>Never cook again. We mean it.</p>
        </div>

        <div className="card">
          <img 
            src="https://img.icons8.com/fluency/96/delivery-time.png" 
            alt="20 minutes delivery"
          />
          <h3>Ready in 20 Minutes</h3>
          <p>Hot healthy meals delivered instantly.</p>
        </div>

        <div className="card">
          <img 
            src="https://img.icons8.com/fluency/96/organic-food.png" 
            alt="100 percent organic"
          />
          <h3>100% Organic</h3>
          <p>Fresh ingredients. No chemicals.</p>
        </div>

        <div className="card">
          <img 
            src="https://img.icons8.com/fluency/96/restaurant.png" 
            alt="order anything"
          />
          <h3>Order Anything</h3>
          <p>Over 100 delicious meals available.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
