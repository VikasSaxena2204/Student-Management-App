import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual sign-up logic
        alert("Sign Up Successful!");
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-secondary">
                <div className="card shadow-lg p-5 w-100" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa" }}>
                    <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label" style={{ color: "#495057" }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: "#495057" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label" style={{ color: "#495057" }}>
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{ color: "#495057" }}>
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}>
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <p className="mb-1">Already have an account?</p>
                        <Link to="/signin" className="text-danger">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
