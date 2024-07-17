

import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing bootstrap CSS globally
import './index.css';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
