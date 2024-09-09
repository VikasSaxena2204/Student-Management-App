
import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: '#0056b3', // Dark background
  color: 'white',
  textAlign: 'center',
  padding: '1rem 0',
  marginTop: '2rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const linkHoverStyle = {
  textDecoration: 'underline'
};

const listItemStyle = {
  display: 'inline',
  margin: '0 10px'
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p className="mb-2">
        © {new Date().getFullYear()} Student Management System. All rights reserved to{' '}
        <a
          href="https://github.com/VikasSaxena2204"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          VikasSaxena2204
        </a>.
      </p>

      <ul style={{ paddingLeft: 0, listStyleType: 'none', margin: 0 }}>
        {['/', '/about-us', '/contact-us'].map((path, index) => (
          <li key={index} style={listItemStyle}>
            <Link
              to={path}
              style={linkStyle}
              onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
