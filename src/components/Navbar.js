import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

function Navbar() {
  const location = useLocation();
  const navbarCollapseRef = useRef(null);
  const [showItems, setShowItems] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context

  // Use a single effect to handle showing items
  useEffect(() => {
    const timer = setTimeout(() => setShowItems(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle the collapse element
  const handleNavbarTogglerClick = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: true,
      });
      bsCollapse.toggle();
    }
  };

  // Determine active class
  const isActive = (path) => (location.pathname === path ? "active" : "");

  // Handle nav link click to collapse the menu on smaller screens
  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseRef.current);
      if (bsCollapse && window.innerWidth < 992) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <>
      {/* Inline CSS for animation transitions and button styling */}
      <style>
        {`
          #navbarNav {
            transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
          }

          @media (max-width: 992px) {
            #navbarNav {
              max-height: 500px; 
              overflow: hidden;
            }
          }

          .navbar-custom {
            background-color: #0056b3; /* Teal background */
          }

          .navbar-custom .navbar-brand,
          .navbar-custom .nav-link {
            color: #ffffff; /* White text */
          }

          .navbar-custom .nav-link:hover,
          .navbar-custom .nav-link.active {
            color: #20c997;/* Darker Teal for hover and active state */
          }

          .theme-toggle-btn {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: ${isDarkMode ? '#333' : '#fff'};
            color: ${isDarkMode ? '#fff' : '#333'};
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            z-index: 1050; /* Ensure the button is above other content */
            transition: background-color 0.3s, color 0.3s;
          }

          .theme-toggle-btn:hover {
            opacity: 0.8;
          }

          .bi {
            font-size: 20px; /* Adjust size of the icon */
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm navbar-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            STUDENT MANAGE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={showItems ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavbarTogglerClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {showItems && (
            <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
              <ul className="navbar-nav ms-auto">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about-us", label: "About Us" },
                  { path: "/courses", label: "Courses" },
                  { path: "/students", label: "Students" },
                  { path: "/contact-us", label: "Contact Us" },
                ].map((navItem, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className={`nav-link ${isActive(navItem.path)}`}
                      to={navItem.path}
                      onClick={handleNavLinkClick}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/signin"
                    onClick={handleNavLinkClick}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isDarkMode ? (
            <span className="bi bi-sun"></span> // Sun icon for light mode
          ) : (
            <span className="bi bi-moon"></span> // Moon icon for dark mode
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
