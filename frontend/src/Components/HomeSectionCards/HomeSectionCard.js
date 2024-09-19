// import React from "react";

// const HomeSectionCard = ({ product }) => {
//   return (
//     <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={`http://192.168.2.61:8080/uploads/${product.product_img}`} // Assuming product_img is the file name
//           alt={product.product_brand} // Add alt text for accessibility
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">
//           { 
//             product.product_name
//           } {/* Display product title */}
//         </h3>
//         <p className="mt-3 text-sm text-gray-500">
//           {product.product_price} {/* Display product details */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;


import React from "react";
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
         onClick={() => handleCardClick(product._id)}>
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={`http://192.168.2.61:8080/uploads/${product.product_img}`}
          alt={product.product_brand}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {product.product_name}
        </h3>
        <p className="mt-3 text-sm text-gray-500">
          ${product.product_price}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
