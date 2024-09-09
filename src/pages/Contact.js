// src/pages/Contact.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual API call if needed)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send the message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="card ">
              <div className="card-header bg-secondary">
                <h4 className="text-light text-center">Contact Us</h4>
              </div>
              <div className="card-body">
                {success && <div className="alert alert-success">{success}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-dark">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-dark">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-dark">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Your Message ..."
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header bg-secondary">
                <h4 className="text-light">Our Contact Information</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>
                    <strong>Email:</strong> <a href="mailto:studentmanage@example.com">studentmanage@example.com</a>
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 123-456-7890
                  </li>
                  <li>
                    <strong>Address:</strong> 123 New Delhi, ABC 45678
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
                <Link to="/" className="btn btn-outline-info shadow-sm">Back to Home</Link>
         </div>
      </div>
    </>
  );
}

export default Contact;
