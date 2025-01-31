import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';  // Your DashboardPage component
import MaterialsPage from './components/MaterialsPage';  // Other pages
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import SignUpPage from './components/SignUpPage';

const App = () => {
  return (
    <Router>  {/* Ensure Router wraps the whole app */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
