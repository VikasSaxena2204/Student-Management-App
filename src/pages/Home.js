import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container mt-5">
            {/* Hero Section */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-3 text-secondary fw-bold">Welcome to the Student Management System</h1>
                    <h5 className="lead text-warning">Manage students, courses, and reports efficiently and effectively.</h5>
                    <Link to="/signup" className="btn btn-outline-success btn-lg me-2 shadow-sm">Get Started</Link>
                    <Link to="/about-us" className="btn btn-outline-primary btn-lg shadow-sm">Learn More</Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="row text-center">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 border-0 shadow">
                        <div className="card-body">
                            <div className="icon-container mb-3">
                                <i className="bi bi-people-fill text-primary" style={{ fontSize: '2rem' }}></i>
                            </div>
                            <h5 className="card-title fw-bold">Student Management</h5>
                            <p className="card-text text-muted">Manage your students effectively with our easy-to-use interface. Add, edit, and delete student records.</p>
                            <Link to="/students" className="btn btn-outline-success">View Students</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 border-0 shadow">
                        <div className="card-body">
                            <div className="icon-container mb-3">
                                <i className="bi bi-book-fill text-success" style={{ fontSize: '2rem' }}></i>
                            </div>
                            <h5 className="card-title fw-bold">Course Management</h5>
                            <p className="card-text text-muted">Manage your courses and enrollments with ease. Add new courses and view details of existing ones.</p>
                            <Link to="/courses" className="btn btn-outline-success">View Courses</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 border-0 shadow">
                        <div className="card-body">
                            <div className="icon-container mb-3">
                                <i className="bi bi-graph-up-arrow text-info" style={{ fontSize: '2rem' }}></i>
                            </div>
                            <h5 className="card-title fw-bold">Reports</h5>
                            <p className="card-text text-muted">Generate and view reports for student performance and course progress. Get insights to improve your management.</p>
                            <Link to="/reports" className="btn btn-outline-success">View Reports</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="row text-center mt-5">
                <div className="col-12">
                    <h2 className="text-secondary fw-bold">Start Managing Your Education System Today</h2>
                    <p className="text-warning">Sign up and start managing students, courses, and reports effortlessly.</p>
                    <Link to="/contact-us" className="btn btn-outline-info shadow-sm">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
