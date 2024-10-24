import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Import icons for edit and delete
import DeleteProductModal from '../../components/DeleteProductModal'; // Import your delete modal component

const ViewAds = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample data for products until API is called
  const sampleProducts = [
    { id: 1, title: 'Product 1', price: '$10.00' },
    { id: 2, title: 'Product 2', price: '$15.00' },
    { id: 3, title: 'Product 3', price: '$20.00' },
    { id: 4, title: 'Product 4', price: '$25.00' },
    { id: 5, title: 'Product 5', price: '$30.00' },
  ];

  useEffect(() => {
    // Simulate fetching products from the API
    const fetchProducts = async () => {
      try {
        // Uncomment the lines below to fetch real data from the API
        // const response = await fetch('YOUR_API_URL/products'); // Replace with your API URL
        // const data = await response.json();
        // setProducts(data);

        // Simulating a delay to mimic API call
        setTimeout(() => {
          setProducts(sampleProducts);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        toast.error("Failed to fetch products");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    // Logic to delete the product
    toast.success("Product deleted successfully");
    // Update the products state to remove the deleted product
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (id) => {
    // Logic for editing the product (not implemented in this example)
    toast.info("Edit functionality not implemented yet");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">View Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-52">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-md text-gray-700">{product.price}</p>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => handleEdit(product.id)} className="text-blue-500 hover:text-blue-700">
                <AiFillEdit size={24} />
              </button>
              <button onClick={() => setSelectedProduct(product)} className="text-red-500 hover:text-red-700">
                <AiFillDelete size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <DeleteProductModal 
          product={selectedProduct} 
          onDelete={handleDelete}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ViewAds;
