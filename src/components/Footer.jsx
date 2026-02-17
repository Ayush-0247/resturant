import { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { FaGoogle, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <section
        ref={sectionRef}
        className={`newsletter-wrapper ${visible ? "show" : ""}`}
      >
        <div className="newsletter-card">
<h3>Fuel Your Day the Healthy Way</h3>
<p>
  Receive weekly healthy meal inspiration, nutrition tips,
  and special subscriber-only discounts.
</p>


          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="footer-container">

        <div className="footer-brand">
          <h2>NoticeX</h2>
          <p>
            A modern community notice board platform that connects
            people through seamless announcements and updates.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>+91 9876543210</li>
            <li>support@noticex.com</li>
            <li>India</li>
          </ul>

          <div className="social-icons">
            <FaGoogle />
            <FaGithub />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>

      </div>

     

    </footer>
  );
}

export default Footer;
