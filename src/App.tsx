import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/startingPages/login';
import Register from './pages/startingPages/register';
import MainPages from './pages/startingPages/mainPages';
import AdminLayout from './pages/startingPages/adminLayout';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/*" element={<MainPages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
