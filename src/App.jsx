
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Portfolio from './Welcome/Portfolio';
import AdminLogin from './Welcome/AdminLogin';
import AdminDashboard from './Welcome/AdminDashboard';

function AppRoutes() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (adminData) => {
    setAdmin(adminData);
    navigate('/admin/dashboard');
  };

  const handleLogout = () => {
    setAdmin(null);
    navigate('/admin');
  };

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/admin" element={admin ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLogin={handleLogin} />} />
      <Route path="/admin/dashboard" element={admin ? <AdminDashboard admin={admin} onLogout={handleLogout} /> : <Navigate to="/admin" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
