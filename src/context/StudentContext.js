import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const StudentContext = createContext(null);

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

const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_URL, studentData);
        return response.data;
    } catch (error) {
        console.error("Error creating student:", error);
        throw new Error('Failed to create student');
    }
};

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

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);


    const fetchStudents = useCallback(async () => {
        setLoading(true); 
        setError(null); 
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (err) {
            setError('Failed to fetch student data.'); 
        } finally {
            setLoading(false); 
        }
    }, []);

    useEffect(() => {
        fetchStudents(); 
        const interval = setInterval(fetchStudents, 60000); 

        return () => clearInterval(interval); 
    }, [fetchStudents]);

  
    return (
        <StudentContext.Provider value={{ students, setStudents, loading, error, createStudent, updateStudent, deleteStudent, refreshStudents: fetchStudents }}>
            {children}
        </StudentContext.Provider>
    );
};
