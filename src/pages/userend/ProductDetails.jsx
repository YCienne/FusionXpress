// src/pages/userend/ProductDetails.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="border rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                    <div className="w-1/2">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                        <p className="text-lg text-gray-700 mb-2">${product.price}</p>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <button className="bg-blue-500 text-white rounded px-4 py-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;