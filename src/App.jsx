// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import AddProductForm from './pages/dashboard/AddProductForm';
import ViewProducts from './pages/dashboard/ViewProducts';
import EditProductForm from './pages/dashboard/EditProductForm';
import LoginForm from './pages/authentication/LoginForm'; // Import LoginForm
import UserSignupForm from './pages/authentication/UserSignupForm'; // Import UserSignupForm
import VendorSignupForm from './pages/authentication/VendorSignupForm'; // Import VendorSignupForm
import ForgotPassword from './pages/authentication/ForgotPassword'; // Import ForgotPassword
import Landing from './pages/authentication/Landing'; // Import the Landing component
import Profile from './pages/dashboard/Profile'; // Import Profile component
import ProductList from './pages/userend/ProductList'; // Import ProductList component
import ProductDetails from './pages/userend/ProductDetails'; // Import ProductDetails component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<Landing />} />
          {/* Login page route */}
          <Route path="/login" element={<LoginForm />} />
          {/* Forgot Password page route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* User Signup page route */}
          <Route path="/signup/user" element={<UserSignupForm />} />
          {/* Vendor Signup page route */}
          <Route path="/signup/vendor" element={<VendorSignupForm />} />

          {/* Dashboard routes wrapped in DashboardLayout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="add-product" element={<AddProductForm />} />
            <Route path="view-products" element={<ViewProducts />} />
            <Route path="edit-product/:id" element={<EditProductForm />} />
            <Route path="profile" element={<Profile />} /> {/* Add Profile route */}
          </Route>

          {/* Route for the ProductList component */}
          <Route path="/products" element={<ProductList />} /> {/* Add ProductList route */}
          {/* Route for the ProductDetails component */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Add ProductDetails route */}

          {/* Redirect to landing if route is not matched */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Toast container for displaying success/error messages */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;