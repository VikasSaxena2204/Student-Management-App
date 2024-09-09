import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Course() {
  const courses = [
    {
      title: 'Web Development',
      description: 'Learn the fundamentals of web development, including HTML, CSS, JavaScript, and popular frameworks.',
    },
    {
      title: 'Data Science',
      description: 'Explore the world of data science with topics covering Python, data analysis, and machine learning.',
    },
    {
      title: 'Graphic Design',
      description: 'Master graphic design skills, including Adobe tools, design principles, and creative projects.',
    },
    {
      title: 'Digital Marketing',
      description: 'Understand the essentials of digital marketing, including SEO, SEM, social media, and content marketing.',
    },
    {
      title: 'Cybersecurity',
      description: 'Learn about cybersecurity fundamentals, threat management, and network security to protect digital assets.',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Dive into AI concepts, machine learning algorithms, and their applications in real-world scenarios.',
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4">Course Management</h1>
        </div>
        {courses.map((course, index) => (
          <div className="col-md-12 col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-header bg-secondary">
                <h5 className="card-title text-light">{course.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{course.description}</p>
                <Link to="/view-course" className="btn btn-outline-success">View Course</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-12 text-center mt-5">
          <h2>Welcome to the Course Management System</h2>
          <p className="lead">Efficiently manage your courses and students with our easy-to-use platform.</p>
        </div>
      </div>

      <div className="card-footer text-center">
        <Link to="/" className="btn btn-outline-info shadow-sm">Back to Home</Link>
      </div>
    </div>
  );
}

export default Course;
