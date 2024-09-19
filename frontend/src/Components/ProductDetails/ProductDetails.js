// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import { Radio, RadioGroup } from "@headlessui/react";
// // import { useDispatch } from "react-redux";
// // import Review from "../Review/Review.js";
// // import { addToCart } from "../../Redux/Cart/cartSlice.js";

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(" ");
// // }

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [selectedColor, setSelectedColor] = useState(null);
// //   const [selectedSize, setSelectedSize] = useState(null);
// //   const navigate = useNavigate();

// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/api/p/${id}`);
// //         const fetchedProduct = response.data;

// //         setProduct(fetchedProduct);
// //         setSelectedColor(
// //           fetchedProduct.product_color &&
// //             fetchedProduct.product_color.length > 0
// //             ? fetchedProduct.product_color[0]
// //             : null
// //         );
// //         setSelectedSize(
// //           fetchedProduct.product_size && fetchedProduct.product_size.length > 0
// //             ? fetchedProduct.product_size[0]
// //             : null
// //         );
// //       } catch (error) {
// //         console.error("Error fetching product:", error);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   const handleAddToCart = () => {
// //     const { product_id, product_name, product_img, product_price } = product;
// //     dispatch(
// //       addToCart({
// //         productId: product_id,
// //         name: product_name,
// //         img: product_img,
// //         price: product_price,
// //       })
// //     );
// //   };

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="bg-white">
// //       <div className="pt-6">
// //         {/* Breadcrumbs */}
// //         <nav aria-label="Breadcrumb">
// //           <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
// //             {/* Render breadcrumbs here if available */}
// //             {/* Category */}
// //             {product.product_category1 && (
// //               <div className="mt-10">
// //                 <h3 className="text-sm font-medium text-gray-900">Category</h3>
// //                 <p className="mt-4 text-sm text-gray-600">
// //                   {product.product_category1} - {product.product_category2} -{" "}
// //                   {product.product_category3}
// //                 </p>
// //               </div>
// //             )}
// //           </ol>
// //         </nav>

// //         {/* Product info grid layout */}
// //         <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
// //           {/* Image */}
// //           <div className="lg:aspect-w-3 lg:aspect-h-4 lg:overflow-hidden lg:rounded-lg lg:block">
// //             <img
// //               src={`http://localhost:8080/uploads/${product.product_img}`}
// //               alt={product.product_name}
// //               className="h-full w-full object-cover object-center"
// //             />
// //           </div>

// //           {/* Details */}
// //           <div className="mt-6 lg:mt-0">
// //             {/* Product Name and Price */}
// //             <div className="lg:border-r lg:border-gray-200 lg:pr-8">
// //               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
// //                 {product.product_name}
// //               </h1>
// //               <p className="mt-2 text-3xl tracking-tight text-gray-900">
// //                 ${product.product_price}
// //               </p>
// //               {/* Brand */}
// //               {product.product_brand && (
// //                 <div className="mt-2">
// //                   <h3 className="text-sm font-medium text-gray-900">Brand</h3>
// //                   <p className="mt-2 text-sm text-gray-600">
// //                     {product.product_brand}
// //                   </p>
// //                 </div>
// //               )}
// //               {/* Reviews */}
// //               <div className="mt-6 flex items-center">
// //                 <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
// //                   <Review productId={id} />
// //                 </p>
// //               </div>

// //               {/* Form: Color and Size Selection */}
// //               <form className="mt-6">
// //                 {/* Colors */}
// //                 {Array.isArray(product.product_color) &&
// //                   product.product_color.length > 0 && (
// //                     <div className="mt-6">
// //                       <h3 className="text-sm font-medium text-gray-900">
// //                         Color
// //                       </h3>

// //                       <RadioGroup
// //                         value={selectedColor}
// //                         onChange={setSelectedColor}
// //                         className="mt-2 flex items-center space-x-3"
// //                       >
// //                         {product.product_color.map((color, index) => (
// //                           <Radio
// //                             key={index}
// //                             value={color}
// //                             className={({ active, checked }) =>
// //                               classNames(
// //                                 active ? "ring ring-offset-1" : "",
// //                                 !active && checked ? "ring-2" : "",
// //                                 "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
// //                               )
// //                             }
// //                           >
// //                             <span
// //                               aria-hidden="true"
// //                               className={classNames(
// //                                 "h-8 w-8 rounded-full border border-black border-opacity-10"
// //                               )}
// //                               style={{ backgroundColor: color }}
// //                             />
// //                           </Radio>
// //                         ))}
// //                       </RadioGroup>
// //                     </div>
// //                   )}

// //                 {/* Sizes */}
// //                 {Array.isArray(product.product_size) &&
// //                   product.product_size.length > 0 && (
// //                     <div className="mt-6">
// //                       <h3 className="text-sm font-medium text-gray-900">
// //                         Size
// //                       </h3>

// //                       <RadioGroup
// //                         value={selectedSize}
// //                         onChange={setSelectedSize}
// //                         className="mt-2 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
// //                       >
// //                         {product.product_size.map((size, index) => (
// //                           <Radio
// //                             key={index}
// //                             value={size}
// //                             className={({ active }) =>
// //                               classNames(
// //                                 active ? "ring-2 ring-indigo-500" : "",
// //                                 "group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3"
// //                               )
// //                             }
// //                           >
// //                             {size}
// //                           </Radio>
// //                         ))}
// //                       </RadioGroup>
// //                     </div>
// //                   )}

// //                 {/* Add to Bag Button */}
// //                 <button
// //                   type="button"
// //                   onClick={handleAddToCart}
// //                   className="mt-10 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //                 >
// //                   Add to bag
// //                 </button>
// //               </form>
// //             </div>

// //             {/* Right Column: Description and Details */}
// //             <div className="py-10 lg:col-span-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
// //               {/* Description */}
// //               <div>
// //                 <h3 className="text-sm font-medium text-gray-900">
// //                   Description
// //                 </h3>
// //                 <p className="mt-4 text-sm text-gray-600">
// //                   {product.product_description}
// //                 </p>
// //               </div>

// //               {/* Additional fields can be added similarly */}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { Radio, RadioGroup } from "@headlessui/react";
// import { useDispatch } from "react-redux";
// import Review from "../Review/Review";
// import { addToCart } from "../../Redux/Cart/cartSlice";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/p/${id}`);
//         const fetchedProduct = response.data;

//         setProduct(fetchedProduct);
//         setSelectedColor(
//           fetchedProduct.product_color &&
//             fetchedProduct.product_color.length > 0
//             ? fetchedProduct.product_color[0]
//             : null
//         );
//         setSelectedSize(
//           fetchedProduct.product_size && fetchedProduct.product_size.length > 0
//             ? fetchedProduct.product_size[0]
//             : null
//         );
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     const { product_id, product_name, product_img, product_price } = product;
//     dispatch(
//       addToCart({
//         productId: product_id,
//         name: product_name,
//         img: product_img,
//         price: product_price,
//       })
//     );
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-white">
//       <div className="pt-6">
//         {/* Breadcrumbs */}
//         <nav aria-label="Breadcrumb">
//           <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             {/* Render breadcrumbs here if available */}
//             {/* Category */}
//             {product.product_category1 && (
//               <div className="mt-10">
//                 <h3 className="text-sm font-medium text-gray-900">Category</h3>
//                 <p className="mt-4 text-sm text-gray-600">
//                   {product.product_category1} - {product.product_category2} -{" "}
//                   {product.product_category3}
//                 </p>
//               </div>
//             )}
//           </ol>
//         </nav>

//         {/* Product info grid layout */}
//         <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//           {/* Image */}
//           <div className="lg:aspect-w-3 lg:aspect-h-4 lg:overflow-hidden lg:rounded-lg lg:block">
//             <img
//               src={`http://localhost:8080/uploads/${product.product_img}`}
//               alt={product.product_name}
//               className="h-full w-full object-cover object-center"
//             />
//           </div>

//           {/* Details */}
//           <div className="mt-6 lg:mt-0">
//             {/* Product Name and Price */}
//             <div className="lg:border-r lg:border-gray-200 lg:pr-8">
//               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                 {product.product_name}
//               </h1>
//               <p className="mt-2 text-3xl tracking-tight text-gray-900">
//                 ${product.product_price}
//               </p>
//               {/* Brand */}
//               {product.product_brand && (
//                 <div className="mt-2">
//                   <h3 className="text-sm font-medium text-gray-900">Brand</h3>
//                   <p className="mt-2 text-sm text-gray-600">
//                     {product.product_brand}
//                   </p>
//                 </div>
//               )}
//               {/* Reviews */}
//               <div className="mt-6 flex items-center">
//                 <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                   <Review productId={id} />
//                 </p>
//               </div>

//               {/* Form: Color and Size Selection */}
//               <form className="mt-6">
//                 {/* Colors */}
//                 {Array.isArray(product.product_color) &&
//                   product.product_color.length > 0 && (
//                     <div className="mt-6">
//                       <h3 className="text-sm font-medium text-gray-900">
//                         Color
//                       </h3>

//                       <RadioGroup
//                         value={selectedColor}
//                         onChange={setSelectedColor}
//                         className="mt-2 flex items-center space-x-3"
//                       >
//                         {product.product_color.map((color, index) => (
//                           <Radio
//                             key={index}
//                             value={color}
//                             className={({ active, checked }) =>
//                               classNames(
//                                 active ? "ring ring-offset-1" : "",
//                                 !active && checked ? "ring-2" : "",
//                                 "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
//                               )
//                             }
//                           >
//                             <span
//                               aria-hidden="true"
//                               className={classNames(
//                                 "h-8 w-8 rounded-full border border-black border-opacity-10"
//                               )}
//                               style={{ backgroundColor: color }}
//                             />
//                           </Radio>
//                         ))}
//                       </RadioGroup>
//                     </div>
//                   )}

//                 {/* Sizes */}
//                 {Array.isArray(product.product_size) &&
//                   product.product_size.length > 0 && (
//                     <div className="mt-6">
//                       <h3 className="text-sm font-medium text-gray-900">
//                         Size
//                       </h3>

//                       <RadioGroup
//                         value={selectedSize}
//                         onChange={setSelectedSize}
//                         className="mt-2 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
//                       >
//                         {product.product_size.map((size, index) => (
//                           <Radio
//                             key={index}
//                             value={size}
//                             className={({ active }) =>
//                               classNames(
//                                 active ? "ring-2 ring-indigo-500" : "",
//                                 "group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3"
//                               )
//                             }
//                           >
//                             {size}
//                           </Radio>
//                         ))}
//                       </RadioGroup>
//                     </div>
//                   )}

//                 {/* Add to Bag Button */}
//                 <button
//                   type="button"
//                   onClick={handleAddToCart}
//                   className="mt-10 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   Add to bag
//                 </button>
//               </form>
//             </div>

//             {/* Right Column: Description and Details */}
//             <div className="py-10 lg:col-span-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//               {/* Description */}
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900">
//                   Description
//                 </h3>
//                 <p className="mt-4 text-sm text-gray-600">
//                   {product.product_description}
//                 </p>
//               </div>

//               {/* Additional fields can be added similarly */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



// // https://youtu.be/N60_oXI3wtQ?si=wAJZ89HYtqwG0h_f
// // https://youtu.be/1gTvEIpl8K0?si=z586Yil4bVmwi6WH
// //https://youtu.be/lnTWVAyMHg0?si=TxP5EzHAKKP82cdf
// //https://youtu.be/kkiJftHG3Wo?si=t2KejvC-PhPdd68B



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Radio, RadioGroup } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/cartSlice";
import Review from "../Review/Review";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://192.168.2.61:8080/api/p/${id}`);
        const fetchedProduct = response.data;

        setProduct(fetchedProduct);

        // Initialize selected color and size with defaults if available
        setSelectedColor(
          fetchedProduct.product_color && fetchedProduct.product_color.length > 0
            ? fetchedProduct.product_color[0]
            : null
        );
        setSelectedSize(
          fetchedProduct.product_size && fetchedProduct.product_size.length > 0
            ? fetchedProduct.product_size[0]
            : null
        );
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const { product_id, product_name, product_img, product_price } = product;

    toast.success(`${product_name}, is Added to the Bag`);


    // Ensure both color and size are selected
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    // Dispatch addToCart action with selected color and size
    dispatch(
      addToCart({
        productId: product_id,
        name: product_name,
        img: product_img,
        price: product_price,
        color: selectedColor,
        size: selectedSize,
      })
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Render breadcrumbs here if available */}
            {/* Category */}
            {product.product_category1 && (
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Category</h3>
                <p className="mt-4 text-sm text-gray-600">
                  {product.product_category1} - {product.product_category2} -{" "}
                  {product.product_category3}
                </p>
              </div>
            )}
          </ol>
        </nav>

        {/* Product info grid layout */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Image */}
          <div className="lg:aspect-w-3 lg:aspect-h-4 lg:overflow-hidden lg:rounded-lg lg:block">
            <img
              src={`http://192.168.2.61:8080/uploads/${product.product_img}`}
              alt={product.product_name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Details */}
          <div className="mt-6 lg:mt-0">
            {/* Product Name and Price */}
            <div className="lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.product_name}
              </h1>
              <p className="mt-2 text-3xl tracking-tight text-gray-900">
                ${product.product_price}
              </p>
              {/* Brand */}
              {product.product_brand && (
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-900">Brand</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.product_brand}
                  </p>
                </div>
              )}
              {/* Reviews */}
              <div className="mt-6 flex items-center">
                <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  <Review productId={id} />
                </p>
              </div>

              {/* Form: Color and Size Selection */}
              <form className="mt-6">
                {/* Colors */}
                {Array.isArray(product.product_color) &&
                  product.product_color.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor} // Update selectedColor state
                        className="mt-2 flex items-center space-x-3"
                      >
                        {product.product_color.map((color, index) => (
                          <Radio
                            key={index}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                active ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                              style={{ backgroundColor: color }}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                {/* Sizes */}
                {Array.isArray(product.product_size) &&
                  product.product_size.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize} // Update selectedSize state
                        className="mt-2 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.product_size.map((size, index) => (
                          <Radio
                            key={index}
                            value={size}
                            className={({ active }) =>
                              classNames(
                                active ? "ring-2 ring-indigo-500" : "",
                                "group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3"
                              )
                            }
                          >
                            {size}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={handleAddToCart} // Pass selected color and size to addToCart action
                  className="mt-10 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                  <ToastContainer />
                </button>
              </form>
            </div>

            {/* Right Column: Description and Details */}
            <div className="py-10 lg:col-span-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  {product.product_description}
                </p>
              </div>

              {/* Additional fields can be added similarly */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
