// src/pages/Student.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStudents } from "../context/StudentContext.js";

function Student() {
    const { students, setStudents, loading, error, deleteStudent } = useStudents();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
            } catch (err) {
                console.error(err);
                setStudents([]);
            }
        };
        fetchStudents();
    }, [setStudents]);

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id);
            setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header bg-secondary">
                        <h4 className="d-flex justify-content-between align-items-center text-light">
                            Students List
                            <Link to="/students/create" className="btn btn-primary">Add Student</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.length > 0 ? (
                                        students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.phone}</td>
                                                <td>
                                                    <Link to={`/students/${student.id}/edit`} className="btn btn-success btn-sm">Edit</Link>
                                                </td>
                                                <td>
                                                    <button
                                                        type='button'
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDelete(student.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">No students found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center">
                <Link to="/" className="btn btn-outline-info shadow-sm">Back to Home</Link>
            </div>
        </>
    );
}

export default Student;
