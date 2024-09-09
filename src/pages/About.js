import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-secondary text-white text-center py-4">
                <h2>About Us</h2>
              </div>
              <div className="card-body">
                <section className="mb-5">
                  <h3 className="text-secondary">Our Mission</h3>
                  <p className="text-muted">
                    Our mission is to provide high-quality educational resources and support to students around the world. We are dedicated to helping students achieve their academic and personal goals through innovative solutions and a strong commitment to excellence.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="text-secondary">Our Team</h3>
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <img
                          src="https://media.istockphoto.com/id/645075706/photo/mature-businessman-smiling-wearing-classic-suit.jpg?s=612x612&w=0&k=20&c=nwkIaq8_3EJg9fFWMVYMv4y7kLwUuHBL8Np6Nigwhg4="
                          className="card-img-top rounded"
                          alt="John Doe"
                        />
                        <div className="card-body">
                          <h5 className="card-title">John Doe</h5>
                          <p className="card-text text-muted">CEO & Founder</p>
                          <p className="text-muted">
                            John is an experienced educator with over 20 years of experience in the field. He is passionate about improving education through technology.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <img
                          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                          className="card-img-top rounded"
                          alt="Jane Smith"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Jane Smith</h5>
                          <p className="card-text text-muted">Educational Specialist</p>
                          <p className="text-muted">
                            Jane brings a wealth of knowledge in curriculum development and instructional design, focusing on creating engaging learning experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <img
                          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                          className="card-img-top rounded"
                          alt="Michael Brown"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Michael Brown</h5>
                          <p className="card-text text-muted">Tech Lead</p>
                          <p className="text-muted">
                            Michael oversees the development of our technology solutions, ensuring they meet the needs of our users and adhere to the highest standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-5">
                  <h3 className="text-secondary">Contact Us</h3>
                  <p className="text-muted">
                    If you have any questions or would like to get in touch with us, please feel free to contact us through the following methods:
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">
                      <i className="bi bi-envelope-fill me-2 text-primary"></i>
                      <strong>Email:</strong> <a href="mailto:info@example.com" className="text-decoration-none text-primary">info@example.com</a>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-telephone-fill me-2 text-primary"></i>
                      <strong>Phone:</strong> +91 931-XXX-XXXX
                    </li>
                    <li>
                      <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                      <strong>Address:</strong> 123 New Delhi, ABC 45678
                    </li>
                  </ul>
                </section>
              </div>
              <div className="card-footer text-center">
                <Link to="/" className="btn btn-outline-info shadow-sm">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
