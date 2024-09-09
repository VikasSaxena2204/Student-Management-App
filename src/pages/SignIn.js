import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual sign-in logic
        alert("Sign In Successful!");
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-secondary">
                <div className="card shadow-lg p-5 w-100" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa" }}>
                    <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: "#495057" }}>
                                Enter Email
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
                            <label htmlFor="password" className="form-label" style={{ color: "#495057" }}>
                                Enter Your Password
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
                            Sign In
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <p className="mb-1">Don't have an account?</p>
                        <Link to="/signup" className="text-danger">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
