import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa';  // Ensure react-icons is installed

function ViewCourse() {
  const course = {
    title: 'Course Title',
    description: 'Master the essentials of web development through practical experience. This course covers HTML, CSS, JavaScript, and popular frameworks, equipping you with the skills needed to build modern, responsive websites.',
    details: [
      'Introduction to HTML & CSS',
      'JavaScript Fundamentals & Advanced Techniques',
      'Responsive Web Design Principles',
      'Front-end Frameworks (React, Angular, etc.)',
      'Back-end Integration & APIs',
      'Project Work & Real-world Applications',
    ],
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <h1 className="text-center mb-4 text-primary">{course.title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-light mb-4">
            <div className="card-header bg-info text-white">
              <h5 className="card-title">{course.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted">{course.description}</p>
              <h6 className="card-subtitle mb-3 text-dark">Course Details:</h6>
              <ul className="list-unstyled">
                {course.details.map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-center">
                    <FaCheckCircle className="text-success me-2" /> {item}
                  </li>
                ))}
              </ul>
              <div className="col-12 text-center mt-4">
                <Link to="/courses" className="btn btn-outline-info">
                  Back to Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
