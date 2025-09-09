import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import './App.css';

const isAuthenticated = () => !!localStorage.getItem('token');

const PrivateRoute = ({ children }: { children: React.ReactNode }) => (
  isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />
);

const PublicRoute = ({ children }: { children: React.ReactNode }) => (
  isAuthenticated() ? <Navigate to="/" replace /> : <>{children}</>
);

const AppContent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      {isAuthenticated() && <Header onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
