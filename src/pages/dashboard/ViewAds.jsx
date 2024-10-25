import React, { useEffect, useState } from 'react'; 
import { toast } from 'react-toastify';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import DeleteProductModal from '../../components/DeleteProductModal';
import { apiGetVendorAdverts } from '../../services/vendor';

const ViewAds = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchAdverts = async () => {
    try {
      const res = await apiGetVendorAdverts();
      console.log("Adverts--->", res.data);
      setAdverts(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching advert", error);
    }
  };

  useEffect(() => {
    fetchAdverts();
  }, []);

  const handleDelete = (id) => {
    toast.success("Advert deleted successfully");
    setAdverts(adverts.filter(advert => advert.id !== id));
    setIsModalOpen(false);
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">View Adverts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Maintained gap of 8 */}
        {adverts.map((advert) => (
          <div key={advert.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300"> {/* Removed fixed width and height */}
            <img
              src={`https://savefiles.org/${advert.image}?shareable_link=461`} // Use the correct image URL
              alt={advert.title}
              className="w-full h-64 object-cover" // Set height for the image to fit the card
            />
            <div className="p-2 flex flex-col justify-start items-center">
              <h3 className="text-lg font-semibold text-center">{advert.title}</h3>
              <p className="text-md text-gray-700 text-center">{advert.description}</p>
              <p className="text-xl text-[#e41e1b] font-bold text-center">{advert.price}</p>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
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
