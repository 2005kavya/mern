import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App';  // Importing App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element

root.render(
  <React.StrictMode>
    <App />  {/* Ensure App is rendered correctly */}
  </React.StrictMode>
);
