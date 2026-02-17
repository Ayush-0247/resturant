import { useEffect, useRef, useState } from "react";
import "./HowItWorks.css";
import logo from "../assets/img.png";

function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    "Choose your subscription plan that fits your lifestyle.",
    "Download the app and complete your payment securely.",
    "Start ordering healthy meals delivered to your door."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section  id="how"
      className={`how ${isVisible ? "show" : ""}`}
      ref={sectionRef}
    >
      <h2>How It Works — Simple As That</h2>

      <div className="how-container">
        <div className="how-image">
          <img src={logo} alt="App preview" />
        </div>

        <ol className="steps">
          {steps.map((text, index) => (
            <li className="step" key={index}>
              <span className="step-number">{index + 1}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
