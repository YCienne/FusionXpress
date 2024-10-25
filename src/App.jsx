import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from './layouts/DashboardLayout';
import HomeLayout from './layouts/HomeLayout'; // Import HomeLayout
import Overview from './pages/dashboard/Overview';
import PostAdForm from './pages/dashboard/PostAdForm';
import ViewAds from './pages/dashboard/ViewAds';
import EditAdForm from './pages/dashboard/EditAdForm';
import LoginForm from './pages/authentication/LoginForm'; // Import LoginForm for both user and vendor
import UserLoginForm from './pages/authentication/UserLoginForm'; // Import UserLoginForm
import UserSignupForm from './pages/authentication/UserSignupForm'; // Import UserSignupForm
import VendorSignupForm from './pages/authentication/VendorSignupForm'; // Import VendorSignupForm
import ForgotPassword from './pages/authentication/ForgotPassword'; // Import ForgotPassword
import Landing from './pages/authentication/Landing'; // Import the Landing component
import Profile from './pages/dashboard/Profile'; // Import Profile component
import AdvertList from './pages/userend/AdvertList'; // Import AdvertList component
import AdvertDetails from './pages/userend/AdvertDetails'; // Import AdvertDetails component
import Home from './components/Home'; // Import Home component
import CategoryList from './pages/userend/CategoryList'; // Import CategoryList component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<Landing />} />
          {/* User Login page route */}
          <Route path="/login/user" element={<UserLoginForm />} />
          {/* Vendor Login page route */}
          <Route path="/login/vendor" element={<LoginForm />} /> {/* Updated to use LoginForm */}
          {/* Forgot Password page route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* User Signup page route */}
          <Route path="/signup/user" element={<UserSignupForm />} />
          {/* Vendor Signup page route */}
          <Route path="/signup/vendor" element={<VendorSignupForm />} />

          {/* Dashboard routes wrapped in DashboardLayout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="post-ad" element={<PostAdForm />} />
            <Route path="view-ads" element={<ViewAds />} />
            <Route path="edit-ad/:id" element={<EditAdForm />} />
            <Route path="profile" element={<Profile />} /> {/* Profile route */}
          </Route>

          {/* Home layout for advert-related routes */}
          <Route path="/home" element={<HomeLayout />}>
            <Route index element={<Home />} /> {/* Home page */}
            <Route path="category/:category" element={<CategoryList />} /> {/* CategoryList page */}
            <Route path="adverts" element={<AdvertList />} /> {/* AdvertList page */}
            <Route path="advert/:id" element={<AdvertDetails />} /> {/* AdvertDetails page */}
          </Route>

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