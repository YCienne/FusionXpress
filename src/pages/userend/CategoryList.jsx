import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetAdvertsByCategory } from '../../services/user';

const CategoryList = () => {
  const { category } = useParams(); // Get category from the URL
  const [adverts, setAdverts] = useState([]); // State to store adverts
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch adverts based on category when component mounts or category changes
  useEffect(() => {
    if (!category) {
      setError('Category is undefined');
      setLoading(false);
      return;
    }

    // Fetch adverts by category
    const fetchAdverts = async () => {
      try {
        const response = await apiGetAdvertsByCategory(category); // Assuming the data is the array of adverts
        setAdverts(response.data.data); // Set the adverts to state
      } catch (err) {
        console.error('Error fetching advert category:', err);
        setError('Error fetching adverts for the selected category.');
      } finally {
        setLoading(false); // Always set loading to false at the end
      }
    };

    fetchAdverts();
  }, [category]);

  // Render loading state
  if (loading) {
    return <div>Loading adverts...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render the list of adverts if there is no error and loading is done
  return (
    <div>
      <h1 className="text-2xl font-bold">Adverts in {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {adverts.length > 0 ? (
          adverts.map((advert) => (
            <div key={advert.id} className="p-4 border rounded shadow">
              <img
                src={`https://savefiles.org/${advert.image}?shareable_link=461`}
                alt={advert.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-lg font-semibold mt-2">{advert.title}</h2>
              <p className="text-gray-600">{advert.price}</p>
            </div>
          ))
        ) : (
          <div>No adverts found for this category.</div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
