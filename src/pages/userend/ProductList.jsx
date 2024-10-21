import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTh, FaList } from 'react-icons/fa';

// Dummy data for products
const dummyProducts = [
    { id: 1, name: 'Smartphone', price: 699, image: 'https://via.placeholder.com/300?text=Smartphone', category: 'electronics', description: 'Latest model smartphone with advanced features.' },
    { id: 2, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/300?text=Laptop', category: 'electronics', description: 'High-performance laptop for all your needs.' },
    { id: 3, name: 'Headphones', price: 199, image: 'https://via.placeholder.com/300?text=Headphones', category: 'accessories', description: 'Noise-cancelling headphones for immersive sound.' },
    { id: 4, name: 'T-Shirt', price: 29, image: 'https://via.placeholder.com/300?text=T-Shirt', category: 'fashion', description: 'Comfortable cotton t-shirt available in various sizes.' },
    { id: 5, name: 'Sneakers', price: 89, image: 'https://via.placeholder.com/300?text=Sneakers', category: 'fashion', description: 'Stylish sneakers for everyday wear.' },
    { id: 6, name: 'Smartwatch', price: 249, image: 'https://via.placeholder.com/300?text=Smartwatch', category: 'electronics', description: 'Smartwatch with fitness tracking features.' },
    { id: 7, name: 'Bath Towel', price: 19, image: 'https://via.placeholder.com/300?text=Bath+Towel', category: 'bed & bath', description: 'Soft and absorbent bath towel.' },
    { id: 8, name: 'Action Figure', price: 15, image: 'https://via.placeholder.com/300?text=Action+Figure', category: 'toys', description: 'Collectible action figure from your favorite movie.' },
    { id: 9, name: 'Lipstick', price: 25, image: 'https://via.placeholder.com/300?text=Lipstick', category: 'beauty', description: 'Long-lasting lipstick in various shades.' },
    { id: 10, name: 'Bluetooth Speaker', price: 79, image: 'https://via.placeholder.com/300?text=Bluetooth+Speaker', category: 'electronics', description: 'Portable Bluetooth speaker with great sound quality.' },
];

const ProductList = () => {
    const [products] = useState(dummyProducts);
    const [view, setView] = useState('grid'); // 'grid' or 'list'
    const [categoryFilter, setCategoryFilter] = useState('all'); // Category filter
    const [sortOrder, setSortOrder] = useState('default'); // Sort order
    const [searchTerm, setSearchTerm] = useState(''); // Search term
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const itemsPerPage = 5; // Number of items per page

    // Function to filter and sort products
    const filteredProducts = () => {
        let filtered = products;

        // Filter by category
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(product => product.category === categoryFilter);
        }

        // Filter by search term (keywords)
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort by price
        if (sortOrder === 'low-to-high') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    };

    // Get the current products for the current page
    const currentProducts = () => {
        const filtered = filteredProducts();
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        return filtered.slice(indexOfFirstProduct, indexOfLastProduct);
    };

    // Calculate total pages
    const totalPages = () => {
        return Math.ceil(filteredProducts().length / itemsPerPage);
    };

    return (
        <div className="container mx-auto p-4 flex flex-col">
            <ToastContainer />
            
            {/* Top Banner */}
            <div className="bg-purple-600 text-white text-center p-4 mb-4">
                <h1 className="text-2xl font-bold">Search, Find & Own It.!</h1>
                <p>Discover the best products at unbeatable prices.</p>
            </div>

            <div className="flex">
                {/* Side Banner */}
                <div className="w-1/4 p-4">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-2">Side Banner</h2>
                        <p>Promotions and offers go here!</p>
                    </div>
                </div>

                <div className="flex-1 mb-4">
                    <div className="flex justify-between mb-4">
                        <h1 className="text-2xl font-bold">Product List</h1>
                        <div>
                            <button onClick={() => setView('grid')} className="p-2"><FaTh /></button>
                            <button onClick={() => setView('list')} className="p-2"><FaList /></button>
                        </div>
                    </div>

                    {/* Search Bar, Filter, and Sort Options in the same line */}
                    <div className="flex items-center mb-4">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="border rounded p-2 w-1/3 mr-2" // Adjusted width and margin
                        />
                        <select 
                            value={categoryFilter} 
                            onChange={(e) => setCategoryFilter(e.target.value)} 
                            className="border rounded p-2 mr-2"
                        >
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="accessories">Accessories</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="toys">Toys</option>
                            <option value="beauty">Beauty</option>
                            <option value="books">Books</option>
                        </select>

                        <select 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)} 
                            className="border rounded p-2"
                        >
                            <option value="default">Sort By</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>

                    <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>
                        {currentProducts().map(product => (
                            <Link to={{
                                pathname: `/product/${product.id}`,
                                state: { product } // Pass the product data
                            }} key={product.id} className={`border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105`}>
                                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-2 rounded-md" />
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-700">${product.price}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                            disabled={currentPage === 1} 
                            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="self-center">Page {currentPage} of {totalPages()}</span>
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages()))} 
                            disabled={currentPage === totalPages()} 
                            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;