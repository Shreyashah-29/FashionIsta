import React from 'react';

const ProductFilter = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mx-2">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500 mt-2">${product.price}</p>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
