// src/components/Loader.jsx
import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="flex flex-col items-center">
      <div className="animate-spin h-12 w-12 border-b-4 border-blue-600 rounded-full mb-4" />
      <span className="text-gray-700 font-semibold">Loading...</span>
    </div>
  </div>
);

export default Loader;
