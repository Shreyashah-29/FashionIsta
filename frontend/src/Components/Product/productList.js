// import { Fragment, useEffect, useState } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
// import ProductCard from "./ProductCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Pagination } from "@mui/material";
// import { Squares2X2Icon } from '@heroicons/react/solid';
// import { PlusIcon } from '@heroicons/react/outline';
// import { MinusIcon } from '@heroicons/react/outline';

// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White" },
//       { value: "red", label: "Red" },
//       { value: "pink", label: "Pink" },
//       { value: "yellow", label: "Yellow" },
//     ],
//   },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "s", label: "S" },
//       { value: "l", label: "L" },
//       { value: "m", label: "M" },
//       { value: "xl", label: "XL" },
//     ],
//   },
//   {
//     id: "price",
//     name: "Price",
//     options: [
//       { value: "100-200", label: "100-200" },
//       { value: "200-300", label: "200-300" },
//       { value: "300-400", label: "300-400" },
//       { value: "400-500", label: "400-500" },
//     ],
//   },
//   {
//     id: "discount",
//     name: "Discount",
//     options: [
//       { value: "10", label: "10%" },
//       { value: "20", label: "20%" },
//       { value: "30", label: "30%" },
//       { value: "40", label: "40%" },
//     ],
//   },
// ];

// const sortOptions = [
//   { name: "Price: Low to High", value: "price_low" },
//   { name: "Price: High to Low", value: "price_high" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Products() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     color: [],
//     size: [],
//     price: [],
//     discount: [],
//   });
//   const [sortValue, setSortValue] = useState("");

//   const handleFilterChange = (value, sectionId) => {
//     const filtersCopy = { ...selectedFilters };
//     const index = filtersCopy[sectionId].indexOf(value);
//     if (index > -1) {
//       filtersCopy[sectionId].splice(index, 1);
//     } else {
//       filtersCopy[sectionId].push(value);
//     }
//     setSelectedFilters(filtersCopy);
//   };

//   const handleSortChange = (value) => {
//     setSortValue(value);
//   };

//   const applyFilters = () => {
//     let query = "";
//     Object.keys(selectedFilters).forEach((sectionId) => {
//       if (selectedFilters[sectionId].length > 0) {
//         query += `&${sectionId}=${selectedFilters[sectionId].join(",")}`;
//       }
//     });
//     if (sortValue !== "") {
//       query += `&sort=${sortValue}`;
//     }
//     navigate(`?${query}`);
//   };

//   useEffect(() => {
//     // Fetch products based on selectedFilters and sortValue
//     // Example fetch logic:
//     const fetchData = async () => {
//       const response = await fetch(`/api/products${location.search}`);
//       const data = await response.json();
//       // Handle data and update UI accordingly
//     };
//     fetchData();
//   }, [selectedFilters, sortValue, location.search]);

//   return (
//     <div className="bg-white">
//       <div>
//         {/* Mobile filter dialog */}
//         <Transition show={mobileFiltersOpen}>
//           <Disclosure as="div" className="fixed inset-0 z-50 bg-black bg-opacity-50" onClose={() => setMobileFiltersOpen(false)}>
//             <DisclosurePanel as="div" className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl py-6 px-4">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-500">
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   <span className="sr-only">Close menu</span>
//                 </button>
//               </div>
//               <div className="mt-4 border-t border-gray-200">
//                 {filters.map((section) => (
//                   <Disclosure as="div" key={section.id} className="mt-4">
//                     <DisclosureButton className="flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
//                       {section.name}
//                       <ChevronDownIcon className={classNames(open ? 'transform rotate-180' : '', 'w-5 h-5 text-gray-500')} />
//                     </DisclosureButton>
//                     <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
//                       {section.options.map((option) => (
//                         <div key={option.value} className="flex items-center mt-2">
//                           <input
//                             type="checkbox"
//                             id={`${section.id}-${option.value}`}
//                             name={`${section.id}-${option.value}`}
//                             checked={selectedFilters[section.id].includes(option.value)}
//                             onChange={() => handleFilterChange(option.value, section.id)}
//                             className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                           />
//                           <label htmlFor={`${section.id}-${option.value}`} className="ml-2">{option.label}</label>
//                         </div>
//                       ))}
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//                 <div className="mt-4">
//                   <Menu as="div" className="relative">
//                     <MenuButton className="block w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50">
//                       Sort By
//                       <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500" />
//                     </MenuButton>
//                     <MenuItems className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       {sortOptions.map((option) => (
//                         <MenuItem key={option.value}>
//                           {({ active }) => (
//                             <button
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700 w-full text-left'
//                               )}
//                               onClick={() => {
//                                 setSortValue(option.value);
//                                 setMobileFiltersOpen(false);
//                               }}
//                             >
//                               {option.name}
//                             </button>
//                           )}
//                         </MenuItem>
//                       ))}
//                     </MenuItems>
//                   </Menu>
//                 </div>
//                 <div className="mt-4">
//                   <button
//                     type="button"
//                     onClick={applyFilters}
//                     className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
//                   >
//                     Apply Filters
//                   </button>
//                 </div>
//               </div>
//             </DisclosurePanel>
//           </Disclosure>
//         </Transition>

//         <main className="mx-auto px-4 sm:px-6 lg:px-10">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               New Arrivals
//             </h1>

//             <div className="flex items-center">
//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pb-24 pt-6">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
//               {/* Product grid section */}
//               {/* Replace with your actual product cards */}
//               <ProductCard />
//               <ProductCard />
//               <ProductCard />
//               <ProductCard />
//               <ProductCard />
//             </div>
//           </section>

//           {/* Pagination section */}
//           <Pagination
//             count={10} // Replace with actual count based on fetched data
//             shape="rounded"
//             variant="outlined"
//             color="primary"
//             boundaryCount={2}
//             onChange={(event, page) => {
//               // Handle pagination change
//               navigate(`?page=${page}`);
//             }}
//           />
//         </main>
//       </div>
//     </div>
//   );
// }
