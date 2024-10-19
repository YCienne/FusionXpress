import React from 'react';
import overviewImage1 from '../../assets/images/overview1.jpg';
import overviewImage3 from '../../assets/images/overview3.jpg';

const Overview = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Recently Sold Items */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Recently Sold Items</h2>
          <p>Item 1, Item 2, Item 3...</p>
        </div>

        {/* Total Items in Store */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Items in Store</h2>
          <p>25 Items</p>
        </div>

        {/* Best-Selling Items */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Best-Selling Items</h2>
          <p>Item A, Item B...</p>
        </div>

        {/* Recently Uploaded Items */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Recently Uploaded Items</h2>
          <p>Item X, Item Y...</p>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={overviewImage1} alt="Overview 1" className="w-full h-auto rounded-lg shadow-md" />
        <img src={overviewImage3} alt="Overview 3" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Overview;
