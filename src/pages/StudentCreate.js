import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export const StudentCreate = () => {
    const { setStudents, createStudent } = useStudents();
    const navigate = useNavigate();
    const [inputErrorList, setInputErrorList] = useState({});
    const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate fields
        const errors = {};
        if (!student.name) errors.name = 'Student Name is required';
        if (!student.email) errors.email = 'Email is required';
        if (!student.phone) errors.phone = 'Phone number is required';

        if (Object.keys(errors).length > 0) {
            setInputErrorList(errors);
            setLoading(false);
            return;
        }

        try {
            const newStudent = await createStudent(student);
            alert('Student added successfully!');
            setStudents(prevStudents => [...prevStudents, newStudent]);
            navigate('/students');
        } catch (error) {
            alert('Failed to add student.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="text-center mb-4 text-info">Add New Student</h2>
                    <form onSubmit={saveStudent} className="bg-light p-4 rounded shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Student Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`form-control ${inputErrorList.username ? 'is-invalid' : ''}`}
                                value={student.name}
                                onChange={handleInput}
                                placeholder="Enter Name"
                            />
                            {inputErrorList.username && <div className="invalid-feedback">{inputErrorList.username}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${inputErrorList.email ? 'is-invalid' : ''}`}
                                value={student.email}
                                onChange={handleInput}
                                placeholder="Enter email"
                            />
                            {inputErrorList.email && <div className="invalid-feedback">{inputErrorList.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={`form-control ${inputErrorList.phone ? 'is-invalid' : ''}`}
                                value={student.phone}
                                onChange={handleInput}
                                placeholder="Enter phone number"
                            />
                            {inputErrorList.phone && <div className="invalid-feedback">{inputErrorList.phone}</div>}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-success" disabled={loading}>
                                {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Add Student'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
