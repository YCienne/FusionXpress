import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import DeleteProductModal from '../../components/DeleteProductModal';
import Modal from 'react-modal';
import { apiGetVendorAdverts } from '../../services/vendor';

const ViewAds = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  const sampleAdverts = [
    { id: 1, title: 'Advert 1', description: 'Description 1', price: '10.00', category: 'Electronics', image: null },
    { id: 2, title: 'Advert 2', description: 'Description 2', price: '15.00', category: 'Clothing', image: null },
    { id: 3, title: 'Advert 3', description: 'Description 3', price: '20.00', category: 'Home', image: null },
    { id: 4, title: 'Advert 4', description: 'Description 4', price: '25.00', category: 'Toys', image: null },
    { id: 5, title: 'Advert 5', description: 'Description 5', price: '30.00', category: 'Books', image: null },
  ];


  const fetchAdverts = async () => {
    try {
      const res = await apiGetVendorAdverts();
      console.log("Adverts--->", res.data);
      setAdverts(res.data.data)
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching advert", error);
    }
  };

  useEffect(() => {
    fetchAdverts();
  }, []);

  // useEffect(() => {
  //   const fetchAdverts = async () => {
  //     setTimeout(() => {
  //       setAdverts(sampleAdverts);
  //       setIsLoading(false);
  //     }, 1000);
  //   };

  //   fetchAdverts();
  // }, []);

  const handleDelete = (id) => {
    toast.success("Advert deleted successfully");
    setAdverts(adverts.filter(advert => advert.id !== id));
    setIsModalOpen(false); // Close the modal after deletion
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit-ad/${id}`);
  };

  const openModal = (advert) => {
    setSelectedAdvert(advert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
    setIsModalOpen(false);
  };

  const updateAdvert = (updatedAdvert) => {
    setAdverts(adverts.map(advert =>
      advert.id === updatedAdvert.id ? updatedAdvert : advert
    ));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">View Adverts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {adverts.map((advert) => (
          <div key={advert.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-52">
            <h3 className="text-lg font-semibold">{advert.title}</h3>
            <p className="text-md text-gray-700">{advert.price}</p>
            <img
                  src={`https://savefiles.org/${advert.image}?shareable_link=461`}
                  alt={advert.title}
                  className="w-full h-64 object-cover mb-2 rounded-md"
                />
            <div className="mt-4 flex space-x-2">
              <button onClick={() => handleEdit(advert.id)} className="text-blue-500 hover:text-blue-700">
                <AiFillEdit size={24} />
              </button>
              <button onClick={() => openModal(advert)} className="text-red-500 hover:text-red-700">
                <AiFillDelete size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAdvert && (
        <DeleteProductModal 
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onDeleteProduct={() => handleDelete(selectedAdvert.id)}
        />
      )}
    </div>
  );
};

export default ViewAds;
