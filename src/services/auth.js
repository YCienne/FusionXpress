import { apiClient } from "./config";

// User Registration
export const apiUserSignup = async (payload) => {
  return await apiClient.post("users/signup", payload);
};

// Login for Users
export const apiUserLogin = async (payload) => {
  return await apiClient.post("users/login", payload);
};

// Vendor Registration
export const apiVendorSignup = async (payload) => {
  return await apiClient.post("/vendors/signup", payload);
};

// Login for Vendors
export const apiLogin = async (payload) => {
  return await apiClient.post("/vendors/login", payload); 
};


// Shared Logout for Users and Vendors
export const apiLogout = async (role) => {
  const endpoint = role === "vendor" ? "/vendors/logout" : "/users/logout";
  return apiClient.post(endpoint);
};
