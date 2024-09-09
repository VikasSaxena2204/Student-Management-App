import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reports() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4">Reports Dashboard</h1>
        </div>

        {[
          { title: 'Student Performance Report', description: 'View and analyze the performance of students across various courses and subjects.', path: '/view-report' },
          { title: 'Course Completion Report', description: 'Track the progress of students and view course completion rates.', path: '/view-report' },
          { title: 'Attendance Report', description: 'Monitor student attendance and ensure they meet the required participation levels.', path: '/view-report' }
        ].map((report, index) => (
          <div className="col-md-12 col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-header bg-secondary">
                <h5 className="card-title text-light">{report.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{report.description}</p>
                <Link to={report.path} className="btn btn-outline-success">View Report</Link>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="row">
        <div className="col-12 text-center mt-5">
          <h2>Comprehensive Reporting System</h2>
          <p className="lead">Access detailed reports to gain insights and make informed decisions.</p>
          <p>Our platform provides a range of reports to help you monitor and improve student and course performance effectively.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center mt-5">
          <h3 className="text-secondary">Additional Resources</h3>
          <ul className="list-unstyled d-flex justify-content-center flex-wrap">
            {['Educational Guides', 'Tutorials', 'Webinars'].map((resource, index) => (
              <li className="m-2" key={index}>
                <Link to="/reports" className="btn btn-outline-info btn-lg shadow-sm">
                  {resource}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-info shadow-sm">Back to Home</Link>
      </div>

    </div>
  );
}

export default Reports;
