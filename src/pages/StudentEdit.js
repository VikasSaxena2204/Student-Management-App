import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export const StudentEdit = () => {
    const { id } = useParams();
    const { students, setStudents, updateStudent } = useStudents();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);
    const [inputErrorList, setInputErrorList] = useState({});

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const studentData = students.find(stu => stu.id === parseInt(id));
                if (studentData) {
                    setStudent(studentData);
                } else {
                    console.error('Student not found.');
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchStudent();
    }, [id, students]);

    const handleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!student.name || !student.email || !student.phone) {
            setInputErrorList({ general: 'All fields are required' });
            setLoading(false);
            return;
        }

        try {
            const updatedStudent = await updateStudent(id, student);
            setStudents(prevStudents =>
                prevStudents.map(stu => stu.id === id ? updatedStudent : stu)
            );
            alert('Student updated successfully!');
            navigate('/students');
        } catch (error) {
            alert('Failed to update student.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="text-center mb-4 text-info">Edit Student</h2>
                    <form onSubmit={saveStudent} className="bg-light p-4 rounded shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Student Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={student.name}
                                onChange={handleInput}
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={student.email}
                                onChange={handleInput}
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-control"
                                value={student.phone}
                                onChange={handleInput}
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success" disabled={loading}>
                                {loading ? 'Updating...' : 'Update Student'}
                            </button>
                        </div>
                        {inputErrorList.general && <p className="text-danger mt-2 text-center">{inputErrorList.general}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

