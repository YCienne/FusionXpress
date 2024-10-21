// HomeLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar'; 
import Footer from '../components/Footer'; 

const HomeLayout = () => {
  const handleLogout = () => {
    // Add logout logic, such as clearing user data or tokens
    window.location.href = '/'; // Redirect to the landing page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <HomeNavbar handleLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* This will render the pages under the user route */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
