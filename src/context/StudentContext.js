import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// Create a context for student data
export const StudentContext = createContext(null);

// Custom hook to use the StudentContext
export const useStudents = () => {
    const context = useContext(StudentContext);
    if (!context) {
        throw new Error('useStudents must be used within a StudentProvider');
    }
    return context;
};

// API URL for student data
const API_URL = 'https://66cd97b28ca9aa6c8ccaeb37.mockapi.io/api/Students';

// Function to fetch students data
const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw new Error('Failed to fetch students');
    }
};

// Function to create a new student
const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_URL, studentData);
        return response.data;
    } catch (error) {
        console.error("Error creating student:", error);
        throw new Error('Failed to create student');
    }
};

// Function to update student data
const updateStudent = async (id, studentData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, studentData);
        return response.data;
    } catch (error) {
        console.error("Error updating student:", error);
        throw new Error('Failed to update student');
    }
};

// Function to delete a student
const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting student:", error);
        throw new Error('Failed to delete student');
    }
};

// StudentProvider component to manage student state and provide it to child components
export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]); // State to hold student data
    const [loading, setLoading] = useState(false); // Loading state to manage API request status
    const [error, setError] = useState(null); // Error state to handle any issues during API requests

    // Function to fetch and set students data
    const fetchStudents = useCallback(async () => {
        setLoading(true); // Set loading to true before the request starts
        setError(null); // Reset error state before fetching
        try {
            const data = await getStudents();
            setStudents(data); // Update state with fetched data
        } catch (err) {
            setError('Failed to fetch student data.'); // Set error message if API call fails
        } finally {
            setLoading(false); // Set loading to false once the request is complete
        }
    }, []);

    useEffect(() => {
        fetchStudents(); // Fetch students when component mounts
        const interval = setInterval(fetchStudents, 60000); // Auto-refresh every 60 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [fetchStudents]);

    // Provide student data, loading, error, and CRUD operations to child components
    return (
        <StudentContext.Provider value={{ students, setStudents, loading, error, createStudent, updateStudent, deleteStudent, refreshStudents: fetchStudents }}>
            {children}
        </StudentContext.Provider>
    );
};
