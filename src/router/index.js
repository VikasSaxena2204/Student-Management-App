// src/router/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import StudentList from "../pages/Student.js";
import { StudentCreate } from '../pages/StudentCreate.js'; // Named import
import { StudentEdit } from '../pages/StudentEdit.js'; // Named import
import Course from "../pages/Course.js";
import Reports from "../pages/Reports.js";
import SignUp from "../pages/SignUp.js";
import SignIn from "../pages/SignIn.js";
import ViewReport from "../pages/ViewReport.js";
import ViewCourse from "../pages/ViewCourse.js";

function MyRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/View-course" element={<ViewCourse />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/view-report" element={<ViewReport />} />
            <Route path="/students/create" element={<StudentCreate />} />
            <Route path="/students/:id/edit" element={<StudentEdit />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default MyRouter;
