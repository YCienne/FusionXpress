import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../pages/dashboard/Navbar'; // Updated import path for the Navbar

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Handle Sidebar Toggle
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle Logout
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing auth tokens, etc.)
    window.location.href = '/'; // Redirect to the landing page
  };


  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar handleLogout={handleLogout} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet /> {/* This will render the profile page or any other dashboard pages */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
