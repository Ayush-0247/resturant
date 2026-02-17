import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <h1 className="logo">
            Green<span>Bite</span>
          </h1>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#cities">Our Cities</a>
            </li>
            <li>
              <a href="#how">How It Works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#signup" className="btn-nav">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
