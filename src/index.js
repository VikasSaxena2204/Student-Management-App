import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StudentProvider } from './context/StudentContext.js';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <StudentProvider>
          <App />
        </StudentProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// Report web vitals (performance metrics)
reportWebVitals(console.log); // You can also use an analytics endpoint here
