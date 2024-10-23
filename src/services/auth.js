import { apiClient } from "./config";

// User Registration
export const apiUserSignup = async (payload) => {
  return await apiClient.post("/users/login", payload);
};

// Vendor Registration
export const apiVendorSignup = async (payload) => {
  return await apiClient.post("/vendors/signup", payload);
};

// Shared Login for both Users and Vendors
export const apiLogin = async (payload) => {
  return await apiClient.post("/vendors/login", payload); // Assuming shared login endpoint
};

// Shared Logout for Users and Vendors
export const apiLogout = async (role) => {
  const endpoint = role === "vendor" ? "/vendors/logout" : "/users/logout";
  return apiClient.post(endpoint);
};
