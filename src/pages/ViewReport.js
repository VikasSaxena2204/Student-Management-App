import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(...registerables);

// Example data for Chart.js
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Performance Data',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

function ViewReport() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Report Title</h1>
        </div>

        <div className="col-md-12">
          <div className="card shadow-lg mb-4">
            <div className="card-header bg-success text-light">
              <h5 className="card-title">Detailed Report</h5>
            </div>
            <div className="card-body">
              <p className="card-text mb-4">
                This is a detailed view of the report. Here, you can provide comprehensive information, charts, and data
                relevant to the selected report. Ensure that the content is well-organized and readable on various devices.
              </p>
              {/* Example Chart */}
              <div className="mb-4">
                <h6 className="text-center">Performance Overview</h6>
                <Bar data={data} options={{ responsive: true }} />
              </div>
              {/* Add more detailed content such as charts, tables, or graphs here */}
            </div>
          </div>
        </div>

        <div className="col-12 text-center mt-4">
          <Link to="/reports" className="btn btn-outline-info ">
            Back to Reports
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
