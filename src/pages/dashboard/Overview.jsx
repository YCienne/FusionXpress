import React, { useState, useEffect } from 'react';
import overviewImage1 from '../../assets/images/overview1.jpg';
import overviewImage3 from '../../assets/images/overview3.jpg';
// import { apiGetVendorStatistics } from '../../services/vendor'; // Uncomment when API is ready

const Overview = () => {
  const [statistics, setStatistics] = useState({
    recentlyViewedAds: [],
    totalAds: 0,
    frequentlyViewedAds: [],
    recentlyUploadedAds: [],
  });

  // Fetch vendor statistics from the API when the component mounts
  // useEffect(() => {
  //   const fetchVendorStatistics = async () => {
  //     try {
  //       const response = await apiGetVendorStatistics(); // Fetch data from API
  //       setStatistics({
  //         recentlyViewedAds: response.recentlyViewedAds,
  //         totalAds: response.totalAds,
  //         frequentlyViewedAds: response.frequentlyViewedAds,
  //         recentlyUploadedAds: response.recentlyUploadedAds,
  //       });
  //     } catch (error) {
  //       console.error("Failed to fetch vendor statistics", error);
  //     }
  //   };

  //   fetchVendorStatistics();
  // }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Recently Viewed Ads */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Recently Viewed Ads</h2>
          <p>{statistics.recentlyViewedAds.join(', ') || 'No ads viewed recently'}</p>
        </div>

        {/* Total Ads in Account */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Ads In Account</h2>
          <p>{statistics.totalAds || '0 Ads'}</p>
        </div>

        {/* Frequently Viewed Ads */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Frequently Viewed Ads</h2>
          <p>{statistics.frequentlyViewedAds.join(', ') || 'No frequently viewed ads'}</p>
        </div>

        {/* Recently Uploaded Ads */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Recently Uploaded Ads</h2>
          <p>{statistics.recentlyUploadedAds.join(', ') || 'No recently uploaded ads'}</p>
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
