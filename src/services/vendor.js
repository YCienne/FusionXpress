import { apiClient } from "./config";

// Get Vendor Registration Details
export const apiGetVendorDetails = async (vendorId) => {
  try {
    const response = await apiClient.get(`/vendors/${vendorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vendor details:", error);
    throw error;
  }
};

// Update Vendor Registration Details
export const apiUpdateVendorDetails = async (vendorId, payload) => {
  try {
    const response = await apiClient.patch(`/vendors/${vendorId}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating vendor details:", error);
    throw error;
  }
};

// Post Advert
export const apiPostAdvert = async (payload) => {
  try {
    const response = await apiClient.post("/adverts", payload, {
      headers: {
        'Content-Type': 'multipart/form-data', // For image uploads
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting new advert:", error);
    throw error;
  }
};

// Get Advert by ID
export const apiGetAdvert = async (advertId) => {
  try {
    const response = await apiClient.get(`/adverts/${advertId}`);
    return response.data; // Return the advert details
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
};

// Update Advert
export const apiUpdateAdvert = async (advertId, payload) => {
  try {
    const response = await apiClient.patch(`/adverts/${advertId}`, payload);
    return response.data; // Return the updated advert
  } catch (error) {
    console.error("Error updating advert:", error);
    throw error;
  }
};

// Delete Advert
export const apiDeleteAdvert = async (advertId) => {
  try {
    const response = await apiClient.delete(`/adverts/${advertId}`);
    return response.data; // Return confirmation of deletion
  } catch (error) {
    console.error("Error deleting advert:", error);
    throw error;
  }
};

// Get Vendor Dashboard Statistics
export const apiGetVendorStats = async (vendorId) => {
  try {
    const response = await apiClient.get(`/vendors/${vendorId}/stats`);
    return response.data; // Return vendor stats
  } catch (error) {
    console.error("Error fetching vendor stats:", error);
    throw error;
  }
};
