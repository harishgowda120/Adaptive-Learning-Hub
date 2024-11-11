import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

export default function Navbar() {
  const navRef = useRef(null);

  // Function to close the navbar on link click (only for smaller screens)
  const handleNavCollapse = () => {
    if (navRef.current && window.innerWidth <= 992) { // Only close the navbar for smaller screens
      const navbarToggler = new window.bootstrap.Collapse(navRef.current);
      navbarToggler.hide(); // Hide navbar after clicking a link
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ position: 'fixed', width: '100%', zIndex: '1030', background: "linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)" }}>
        <div className="container-fluid">
          <img src={logo} alt="logo" style={{ height: '25px', width: '25px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={handleNavCollapse}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/leaderboard" onClick={handleNavCollapse}>LeadersBoard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/resource" onClick={handleNavCollapse}>Resource</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/faq" onClick={handleNavCollapse}>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about" onClick={handleNavCollapse}>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
