// // // // // // // // // /*
// // // // // // // // //   This example requires some changes to your config:

// // // // // // // // //   ```
// // // // // // // // //   // tailwind.config.js
// // // // // // // // //   module.exports = {
// // // // // // // // //     // ...
// // // // // // // // //     plugins: [
// // // // // // // // //       // ...
// // // // // // // // //       require('@tailwindcss/forms'),
// // // // // // // // //     ],
// // // // // // // // //   }
// // // // // // // // //   ```
// // // // // // // // // */
// // // // // // // // // import { useState } from 'react'
// // // // // // // // // import {
// // // // // // // // //   Dialog,
// // // // // // // // //   DialogBackdrop,
// // // // // // // // //   DialogPanel,
// // // // // // // // //   Disclosure,
// // // // // // // // //   DisclosureButton,
// // // // // // // // //   DisclosurePanel,
// // // // // // // // //   Menu,
// // // // // // // // //   MenuButton,
// // // // // // // // //   MenuItem,
// // // // // // // // //   MenuItems,
// // // // // // // // // } from '@headlessui/react'
// // // // // // // // // import { XMarkIcon } from '@heroicons/react/24/outline'
// // // // // // // // // import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
// // // // // // // // // import ProductCard from './ProductCard'

// // // // // // // // // const sortOptions = [
// // // // // // // // //   { name: 'Price: Low to High', href: '#', current: false },
// // // // // // // // //   { name: 'Price: High to Low', href: '#', current: false },
// // // // // // // // // ]
// // // // // // // // // // const subCategories = [
// // // // // // // // // //   { name: 'Totes', href: '#' },
// // // // // // // // // //   { name: 'Backpacks', href: '#' },
// // // // // // // // // //   { name: 'Travel Bags', href: '#' },
// // // // // // // // // //   { name: 'Hip Bags', href: '#' },
// // // // // // // // // //   { name: 'Laptop Sleeves', href: '#' },
// // // // // // // // // // ]
// // // // // // // // // const filters = [
// // // // // // // // //   {
// // // // // // // // //     id: 'color',
// // // // // // // // //     name: 'Color',
// // // // // // // // //     options: [
// // // // // // // // //       { value: 'white', label: 'White', checked: false },
// // // // // // // // //       { value: 'beige', label: 'Beige', checked: false },
// // // // // // // // //       { value: 'blue', label: 'Blue', checked: true },
// // // // // // // // //       { value: 'brown', label: 'Brown', checked: false },
// // // // // // // // //       { value: 'green', label: 'Green', checked: false },
// // // // // // // // //       { value: 'purple', label: 'Purple', checked: false },
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // //   // {
// // // // // // // // //   //   id: 'category',
// // // // // // // // //   //   name: 'Category',
// // // // // // // // //   //   options: [
// // // // // // // // //   //     { value: 'new-arrivals', label: 'New Arrivals', checked: false },
// // // // // // // // //   //     { value: 'sale', label: 'Sale', checked: false },
// // // // // // // // //   //     { value: 'travel', label: 'Travel', checked: true },
// // // // // // // // //   //     { value: 'organization', label: 'Organization', checked: false },
// // // // // // // // //   //     { value: 'accessories', label: 'Accessories', checked: false },
// // // // // // // // //   //   ],
// // // // // // // // //   // },
// // // // // // // // //   {
// // // // // // // // //     id: 'size',
// // // // // // // // //     name: 'Size',
// // // // // // // // //     options: [
// // // // // // // // //       { value: 's', label: 's', checked: false },
// // // // // // // // //       { value: 'm', label: 'm', checked: false },
// // // // // // // // //       { value: 'l', label: 'l', checked: false },
// // // // // // // // //       { value: 'xl', label: 'xl', checked: false },
// // // // // // // // //     ],
// // // // // // // // //   },
// // // // // // // // // ]

// // // // // // // // // function classNames(...classes) {
// // // // // // // // //   return classes.filter(Boolean).join(' ')
// // // // // // // // // }

// // // // // // // // // export default function Products() {
// // // // // // // // //   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-white">
// // // // // // // // //       <div>
// // // // // // // // //         {/* Mobile filter dialog */}
// // // // // // // // //         <Dialog className="relative z-40 lg:hidden" open={mobileFiltersOpen} onClose={setMobileFiltersOpen}>
// // // // // // // // //           {/* <DialogBackdrop
// // // // // // // // //             transition
// // // // // // // // //             className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
// // // // // // // // //           /> */}
// // // // // // // // // <p>DialogBackdrop</p>
// // // // // // // // //           <div className="fixed inset-0 z-40 flex">
// // // // // // // // //             <DialogPanel
// // // // // // // // //               transition
// // // // // // // // //               className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
// // // // // // // // //             >
// // // // // // // // //               <div className="flex items-center justify-between px-4">
// // // // // // // // //                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
// // // // // // // // //                 <button
// // // // // // // // //                   type="button"
// // // // // // // // //                   className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
// // // // // // // // //                   onClick={() => setMobileFiltersOpen(false)}
// // // // // // // // //                 >
// // // // // // // // //                   <span className="sr-only">Close menu</span>
// // // // // // // // //                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
// // // // // // // // //                 </button>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Filters */}
// // // // // // // // //               <form className="mt-4 border-t border-gray-200">
// // // // // // // // //                 <h3 className="sr-only">Categories</h3>
// // // // // // // // //                 <ul role="list" className="px-2 py-3 font-medium text-gray-900">
// // // // // // // // //                   {/* {subCategories.map((category) => (
// // // // // // // // //                     <li key={category.name}>
// // // // // // // // //                       <a href={category.href} className="block px-2 py-3">
// // // // // // // // //                         {category.name}
// // // // // // // // //                       </a>
// // // // // // // // //                     </li>
// // // // // // // // //                   ))} */}
// // // // // // // // //                 </ul>

// // // // // // // // //                 {filters.map((section) => (
// // // // // // // // //                   <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
// // // // // // // // //                     {({ open }) => (
// // // // // // // // //                       <>
// // // // // // // // //                         <h3 className="-mx-2 -my-3 flow-root">
// // // // // // // // //                           <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
// // // // // // // // //                             <span className="font-medium text-gray-900">{section.name}</span>
// // // // // // // // //                             <span className="ml-6 flex items-center">
// // // // // // // // //                               {open ? (
// // // // // // // // //                                 <MinusIcon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                               ) : (
// // // // // // // // //                                 <PlusIcon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                               )}
// // // // // // // // //                             </span>
// // // // // // // // //                           </DisclosureButton>
// // // // // // // // //                         </h3>
// // // // // // // // //                         <DisclosurePanel className="pt-6">
// // // // // // // // //                           <div className="space-y-6">
// // // // // // // // //                             {section.options.map((option, optionIdx) => (
// // // // // // // // //                               <div key={option.value} className="flex items-center">
// // // // // // // // //                                 <input
// // // // // // // // //                                   id={`filter-mobile-${section.id}-${optionIdx}`}
// // // // // // // // //                                   name={`${section.id}[]`}
// // // // // // // // //                                   defaultValue={option.value}
// // // // // // // // //                                   type="checkbox"
// // // // // // // // //                                   defaultChecked={option.checked}
// // // // // // // // //                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
// // // // // // // // //                                 />
// // // // // // // // //                                 <label
// // // // // // // // //                                   htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
// // // // // // // // //                                   className="ml-3 min-w-0 flex-1 text-gray-500"
// // // // // // // // //                                 >
// // // // // // // // //                                   {option.label}
// // // // // // // // //                                 </label>
// // // // // // // // //                               </div>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         </DisclosurePanel>
// // // // // // // // //                       </>
// // // // // // // // //                     )}
// // // // // // // // //                   </Disclosure>
// // // // // // // // //                 ))}
// // // // // // // // //               </form>
// // // // // // // // //             </DialogPanel>
// // // // // // // // //           </div>
// // // // // // // // //         </Dialog>

// // // // // // // // //         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // // // // // //           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
// // // // // // // // //             <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

// // // // // // // // //             <div className="flex items-center">
// // // // // // // // //               <Menu as="div" className="relative inline-block text-left">
// // // // // // // // //                 <div>
// // // // // // // // //                   <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
// // // // // // // // //                     Sort
// // // // // // // // //                     <ChevronDownIcon
// // // // // // // // //                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
// // // // // // // // //                       aria-hidden="true"
// // // // // // // // //                     />
// // // // // // // // //                   </MenuButton>
// // // // // // // // //                 </div>

// // // // // // // // //                 <MenuItems
// // // // // // // // //                   transition
// // // // // // // // //                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
// // // // // // // // //                 >
// // // // // // // // //                   <div className="py-1">
// // // // // // // // //                     {sortOptions.map((option) => (
// // // // // // // // //                       <MenuItem key={option.name}>
// // // // // // // // //                         {({ focus }) => (
// // // // // // // // //                           <a
// // // // // // // // //                             href={option.href}
// // // // // // // // //                             className={classNames(
// // // // // // // // //                               option.current ? 'font-medium text-gray-900' : 'text-gray-500',
// // // // // // // // //                               focus ? 'bg-gray-100' : '',
// // // // // // // // //                               'block px-4 py-2 text-sm',
// // // // // // // // //                             )}
// // // // // // // // //                           >
// // // // // // // // //                             {option.name}
// // // // // // // // //                           </a>
// // // // // // // // //                         )}
// // // // // // // // //                       </MenuItem>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 </MenuItems>
// // // // // // // // //               </Menu>

// // // // // // // // //               <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
// // // // // // // // //                 <span className="sr-only">View grid</span>
// // // // // // // // //                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //               </button>
// // // // // // // // //               <button
// // // // // // // // //                 type="button"
// // // // // // // // //                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
// // // // // // // // //                 onClick={() => setMobileFiltersOpen(true)}
// // // // // // // // //               >
// // // // // // // // //                 <span className="sr-only">Filters</span>
// // // // // // // // //                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           <section aria-labelledby="products-heading" className="pb-24 pt-6">
// // // // // // // // //             <h2 id="products-heading" className="sr-only">
// // // // // // // // //               Products
// // // // // // // // //             </h2>

// // // // // // // // //             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
// // // // // // // // //               {/* Filters */}
// // // // // // // // //               <form className="hidden lg:block">
// // // // // // // // //                 <h3 className="sr-only">Categories</h3>
// // // // // // // // //                 <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
// // // // // // // // //                   {/* {subCategories.map((category) => (
// // // // // // // // //                     <li key={category.name}>
// // // // // // // // //                       <a href={category.href}>{category.name}</a>
// // // // // // // // //                     </li>
// // // // // // // // //                   ))} */}
// // // // // // // // //                 </ul>

// // // // // // // // //                 {filters.map((section) => (
// // // // // // // // //                   <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
// // // // // // // // //                     {({ open }) => (
// // // // // // // // //                       <>
// // // // // // // // //                         <h3 className="-my-3 flow-root">
// // // // // // // // //                           <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
// // // // // // // // //                             <span className="font-medium text-gray-900">{section.name}</span>
// // // // // // // // //                             <span className="ml-6 flex items-center">
// // // // // // // // //                               {open ? (
// // // // // // // // //                                 <MinusIcon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                               ) : (
// // // // // // // // //                                 <PlusIcon className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                               )}
// // // // // // // // //                             </span>
// // // // // // // // //                           </DisclosureButton>
// // // // // // // // //                         </h3>
// // // // // // // // //                         <DisclosurePanel className="pt-6">
// // // // // // // // //                           <div className="space-y-4">
// // // // // // // // //                             {section.options.map((option, optionIdx) => (
// // // // // // // // //                               <div key={option.value} className="flex items-center">
// // // // // // // // //                                 <input
// // // // // // // // //                                   id={`filter-${section.id}-${optionIdx}`}
// // // // // // // // //                                   name={`${section.id}[]`}
// // // // // // // // //                                   defaultValue={option.value}
// // // // // // // // //                                   type="checkbox"
// // // // // // // // //                                   defaultChecked={option.checked}
// // // // // // // // //                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
// // // // // // // // //                                 />
// // // // // // // // //                                 <label
// // // // // // // // //                                   htmlFor={`filter-${section.id}-${optionIdx}`}
// // // // // // // // //                                   className="ml-3 text-sm text-gray-600"
// // // // // // // // //                                 >
// // // // // // // // //                                   {option.label}
// // // // // // // // //                                 </label>
// // // // // // // // //                               </div>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         </DisclosurePanel>
// // // // // // // // //                       </>
// // // // // // // // //                     )}
// // // // // // // // //                   </Disclosure>
// // // // // // // // //                 ))}
// // // // // // // // //               </form>

// // // // // // // // //               {/* Product grid */}
// // // // // // // // //               <div className="lg:col-span-3"><ProductCard/></div>
// // // // // // // // //             </div>
// // // // // // // // //           </section>
// // // // // // // // //         </main>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import ProductCard from './ProductCard';
// // // // // // // // import axios from 'axios';

// // // // // // // // const filters = [
// // // // // // // //   {
// // // // // // // //     id: 'color',
// // // // // // // //     name: 'Color',
// // // // // // // //     options: [
// // // // // // // //       { value: 'white', label: 'White' },
// // // // // // // //       { value: 'beige', label: 'Beige' },
// // // // // // // //       { value: 'blue', label: 'Blue' },
// // // // // // // //       { value: 'brown', label: 'Brown' },
// // // // // // // //       { value: 'green', label: 'Green' },
// // // // // // // //       { value: 'purple', label: 'Purple' },
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'size',
// // // // // // // //     name: 'Size',
// // // // // // // //     options: [
// // // // // // // //       { value: 's', label: 'S' },
// // // // // // // //       { value: 'm', label: 'M' },
// // // // // // // //       { value: 'l', label: 'L' },
// // // // // // // //       { value: 'xl', label: 'XL' },
// // // // // // // //     ],
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // export default function Products() {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [appliedFilters, setAppliedFilters] = useState({ color: [], size: [] });

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchProducts();
// // // // // // // //   }, [appliedFilters]);

// // // // // // // //   const fetchProducts = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get('http://localhost:8080/api/p/list', { params: appliedFilters });
// // // // // // // //       setProducts(response.data);
// // // // // // // //       console.log(response.data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching products:', error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const toggleFilter = (filterType, value) => {
// // // // // // // //     const lowercasedValue = value.toLowerCase(); // Normalize to lowercase

// // // // // // // //     const newFilters = { ...appliedFilters };

// // // // // // // //     // Find index of the selected value in the current array
// // // // // // // //     const currentIndex = newFilters[filterType].indexOf(lowercasedValue);

// // // // // // // //     // Toggle the selection
// // // // // // // //     if (currentIndex === -1) {
// // // // // // // //       newFilters[filterType] = [...newFilters[filterType], lowercasedValue]; // Add if not present
// // // // // // // //     } else {
// // // // // // // //       newFilters[filterType] = newFilters[filterType].filter((item) => item !== lowercasedValue); // Remove if present
// // // // // // // //     }

// // // // // // // //     setAppliedFilters(newFilters); // Update state with new filters
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="bg-white">
// // // // // // // //       {/* Your existing UI */}
// // // // // // // //       {/* Filter UI */}
// // // // // // // //       <div className="lg:block hidden"> {/* Hidden on mobile */}
// // // // // // // //         {filters.map((filter) => (
// // // // // // // //           <div key={filter.id}>
// // // // // // // //             <h3 className="font-medium text-gray-900">{filter.name}</h3>
// // // // // // // //             <div className="space-y-2">
// // // // // // // //               {filter.options.map((option) => (
// // // // // // // //                 <div key={option.value} className="flex items-center">
// // // // // // // //                   <input
// // // // // // // //                     id={`filter-${filter.id}-${option.value}`}
// // // // // // // //                     type="checkbox"
// // // // // // // //                     checked={appliedFilters[filter.id].includes(option.value.toLowerCase())}
// // // // // // // //                     onChange={() => toggleFilter(filter.id, option.value.toLowerCase())}
// // // // // // // //                     className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
// // // // // // // //                   />
// // // // // // // //                   <label
// // // // // // // //                     htmlFor={`filter-${filter.id}-${option.value}`}
// // // // // // // //                     className="ml-2 text-gray-600"
// // // // // // // //                   >
// // // // // // // //                     {option.label}
// // // // // // // //                   </label>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Product display */}
// // // // // // // //       <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
// // // // // // // //         {products.map((product) => (
// // // // // // // //           <div key={product._id}>
// // // // // // // //             <ProductCard product={product} />
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import ProductCard from './ProductCard';

// // // // // // // const filters = [
// // // // // // //   {
// // // // // // //     id: 'color',
// // // // // // //     name: 'Color',
// // // // // // //     options: [
// // // // // // //       { value: 'white', label: 'White' },
// // // // // // //       { value: 'beige', label: 'Beige' },
// // // // // // //       { value: 'blue', label: 'Blue' },
// // // // // // //       { value: 'brown', label: 'Brown' },
// // // // // // //       { value: 'green', label: 'Green' },
// // // // // // //       { value: 'purple', label: 'Purple' },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'size',
// // // // // // //     name: 'Size',
// // // // // // //     options: [
// // // // // // //       { value: 's', label: 'S' },
// // // // // // //       { value: 'm', label: 'M' },
// // // // // // //       { value: 'l', label: 'L' },
// // // // // // //       { value: 'xl', label: 'XL' },
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];

// // // // // // // export default function Products() {
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [appliedFilters, setAppliedFilters] = useState({ color: [], size: [] });

// // // // // // //   useEffect(() => {
// // // // // // //     fetchProducts();
// // // // // // //   }, [appliedFilters]);

// // // // // // //   const fetchProducts = async () => {
// // // // // // //     try {
// // // // // // //       const normalizedFilters = {
// // // // // // //         color: appliedFilters.color.map(color => color.toLowerCase()),
// // // // // // //         size: appliedFilters.size.map(size => size.toLowerCase()),
// // // // // // //       };

// // // // // // //       const response = await axios.get('http://localhost:8080/api/p/list', { params: normalizedFilters });

// // // // // // //       setProducts(response.data);
// // // // // // //       console.log(response.data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching products:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleFilter = (filterType, value) => {
// // // // // // //     const lowercasedValue = value.toLowerCase();
// // // // // // //     const newFilters = { ...appliedFilters };

// // // // // // //     const currentIndex = newFilters[filterType].indexOf(lowercasedValue);
// // // // // // //     if (currentIndex === -1) {
// // // // // // //       newFilters[filterType] = [...newFilters[filterType], lowercasedValue];
// // // // // // //     } else {
// // // // // // //       newFilters[filterType] = newFilters[filterType].filter((item) => item !== lowercasedValue);
// // // // // // //     }

// // // // // // //     setAppliedFilters(newFilters);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="bg-white">
// // // // // // //       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // // // //         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
// // // // // // //           <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
// // // // // // //           <div className="flex items-center">
// // // // // // //             <div className="lg:block hidden">
// // // // // // //               {filters.map((filter) => (
// // // // // // //                 <div key={filter.id} className="ml-4">
// // // // // // //                   <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
// // // // // // //                   <div className="mt-2 space-y-2">
// // // // // // //                     {filter.options.map((option) => (
// // // // // // //                       <div key={option.value} className="flex items-center">
// // // // // // //                         <input
// // // // // // //                           id={`filter-${filter.id}-${option.value}`}
// // // // // // //                           type="checkbox"
// // // // // // //                           checked={appliedFilters[filter.id].includes(option.value.toLowerCase())}
// // // // // // //                           onChange={() => toggleFilter(filter.id, option.value)}
// // // // // // //                           className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
// // // // // // //                         />
// // // // // // //                         <label
// // // // // // //                           htmlFor={`filter-${filter.id}-${option.value}`}
// // // // // // //                           className="ml-2 text-sm text-gray-600"
// // // // // // //                         >
// // // // // // //                           {option.label}
// // // // // // //                         </label>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <section aria-labelledby="products-heading" className="pb-24 pt-6">
// // // // // // //           <h2 id="products-heading" className="sr-only">Products</h2>
// // // // // // //           <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
// // // // // // //             {products.map((product) => (
// // // // // // //               <div key={product._id}>
// // // // // // //                 <ProductCard product={product} />
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </section>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import ProductCard from './ProductCard';
// // // // // // import { categories1, categories2, categories3 } from '../../Admin/Components/Category'; // Import category data

// // // // // // const filters = [
// // // // // //   {
// // // // // //     id: 'color',
// // // // // //     name: 'Color',
// // // // // //     options: [
// // // // // //       { value: 'white', label: 'White' },
// // // // // //       { value: 'beige', label: 'Beige' },
// // // // // //       { value: 'blue', label: 'Blue' },
// // // // // //       { value: 'brown', label: 'Brown' },
// // // // // //       { value: 'green', label: 'Green' },
// // // // // //       { value: 'purple', label: 'Purple' },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'size',
// // // // // //     name: 'Size',
// // // // // //     options: [
// // // // // //       { value: 's', label: 'S' },
// // // // // //       { value: 'm', label: 'M' },
// // // // // //       { value: 'l', label: 'L' },
// // // // // //       { value: 'xl', label: 'XL' },
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // export default function Products() {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [appliedFilters, setAppliedFilters] = useState({ color: [], size: [], category: null, subcategory: null });
// // // // // //   const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category

// // // // // //   useEffect(() => {
// // // // // //     fetchProducts();
// // // // // //   }, [appliedFilters]);

// // // // // //   const fetchProducts = async () => {
// // // // // //     try {
// // // // // //       const normalizedFilters = {
// // // // // //         color: appliedFilters.color.map(color => color.toLowerCase()),
// // // // // //         size: appliedFilters.size.map(size => size.toLowerCase()),
// // // // // //         category: appliedFilters.category,
// // // // // //         subcategory: appliedFilters.subcategory,
// // // // // //       };

// // // // // //       const response = await axios.get('http://localhost:8080/api/p/list', { params: normalizedFilters });
// // // // // //       debugger
// // // // // //       setProducts(response.data);
// // // // // //       console.log(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching products:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCategoryClick = (category) => {
// // // // // //     if (selectedCategory === category) {
// // // // // //       setSelectedCategory(null);
// // // // // //       setAppliedFilters({ color: [], size: [], category: null, subcategory: null });
// // // // // //     } else {
// // // // // //       setSelectedCategory(category);
// // // // // //       setAppliedFilters({ ...appliedFilters, category });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubcategoryClick = (subcategory) => {
// // // // // //     setAppliedFilters({ ...appliedFilters, subcategory });
// // // // // //   };

// // // // // //   const toggleFilter = (filterType, value) => {
// // // // // //     const lowercasedValue = value.toLowerCase();
// // // // // //     const newFilters = { ...appliedFilters };

// // // // // //     const currentIndex = newFilters[filterType].indexOf(lowercasedValue);
// // // // // //     if (currentIndex === -1) {
// // // // // //       newFilters[filterType] = [...newFilters[filterType], lowercasedValue];
// // // // // //     } else {
// // // // // //       newFilters[filterType] = newFilters[filterType].filter((item) => item !== lowercasedValue);
// // // // // //     }

// // // // // //     setAppliedFilters(newFilters);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-white">
// // // // // //       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // // //         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
// // // // // //           <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
// // // // // //           <div className="flex items-center">
// // // // // //             <div className="lg:block hidden">
// // // // // //               <div className="ml-4">
// // // // // //                 <h3 className="text-sm font-medium text-gray-900">Categories</h3>
// // // // // //                 <div className="mt-2 space-y-2">
// // // // // //                   {categories1.map((category) => (
// // // // // //                     <div key={category} className="flex items-center cursor-pointer">
// // // // // //                       <div
// // // // // //                         className={`h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 ${
// // // // // //                           selectedCategory === category ? 'bg-indigo-200' : ''
// // // // // //                         }`}
// // // // // //                         onClick={() => handleCategoryClick(category)}
// // // // // //                       />
// // // // // //                       <label className="ml-2 text-sm text-gray-600">{category}</label>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {selectedCategory && (
// // // // // //                 <div className="ml-4 mt-4">
// // // // // //                   <h3 className="text-sm font-medium text-gray-900">Subcategories</h3>
// // // // // //                   <div className="mt-2 space-y-2">
// // // // // //                     {categories2[selectedCategory].map((subcategory) => (
// // // // // //                       <div key={subcategory} className="flex items-center cursor-pointer">
// // // // // //                         <div
// // // // // //                           className={`h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 ${
// // // // // //                             appliedFilters.subcategory === subcategory ? 'bg-indigo-200' : ''
// // // // // //                           }`}
// // // // // //                           onClick={() => handleSubcategoryClick(subcategory)}
// // // // // //                         />
// // // // // //                         <label className="ml-2 text-sm text-gray-600">{subcategory}</label>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {appliedFilters.subcategory && (
// // // // // //                 <div className="ml-4 mt-4">
// // // // // //                   <h3 className="text-sm font-medium text-gray-900">Filters</h3>
// // // // // //                   <div className="mt-2 space-y-2">
// // // // // //                     {filters.map((filter) => (
// // // // // //                       <div key={filter.id}>
// // // // // //                         <h4 className="text-xs font-medium text-gray-900">{filter.name}</h4>
// // // // // //                         {filter.options.map((option) => (
// // // // // //                           <div key={option.value} className="flex items-center">
// // // // // //                             <input
// // // // // //                               id={`filter-${filter.id}-${option.value}`}
// // // // // //                               type="checkbox"
// // // // // //                               checked={appliedFilters[filter.id].includes(option.value.toLowerCase())}
// // // // // //                               onChange={() => toggleFilter(filter.id, option.value)}
// // // // // //                               className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
// // // // // //                             />
// // // // // //                             <label
// // // // // //                               htmlFor={`filter-${filter.id}-${option.value}`}
// // // // // //                               className="ml-2 text-sm text-gray-600"
// // // // // //                             >
// // // // // //                               {option.label}
// // // // // //                             </label>
// // // // // //                           </div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <section aria-labelledby="products-heading" className="pb-24 pt-6">
// // // // // //           <h2 id="products-heading" className="sr-only">Products</h2>
// // // // // //           <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
// // // // // //             {products.map((product) => (
// // // // // //               <div key={product._id}>
// // // // // //                 {
// // // // // //                     console.log(product)
// // // // // //                 }
// // // // // //                 <ProductCard product={product} />
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </section>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import ProductCard from './ProductCard';
// // // // // import { categories1, categories2 } from '../../Admin/Components/Category'; // Import category data

// // // // // const filters = [
// // // // //   {
// // // // //     id: 'color',
// // // // //     name: 'Color',
// // // // //     options: [
// // // // //       { value: 'white', label: 'White' },
// // // // //       { value: 'beige', label: 'Beige' },
// // // // //       { value: 'blue', label: 'Blue' },
// // // // //       { value: 'brown', label: 'Brown' },
// // // // //       { value: 'green', label: 'Green' },
// // // // //       { value: 'purple', label: 'Purple' },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 'size',
// // // // //     name: 'Size',
// // // // //     options: [
// // // // //       { value: 's', label: 'S' },
// // // // //       { value: 'm', label: 'M' },
// // // // //       { value: 'l', label: 'L' },
// // // // //       { value: 'xl', label: 'XL' },
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // export default function Products() {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [appliedFilters, setAppliedFilters] = useState({ color: [], size: [], category: null, subcategory: null });
// // // // //   const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category

// // // // //   useEffect(() => {
// // // // //     fetchProducts();
// // // // //   }, [appliedFilters]);

// // // // //   const fetchProducts = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('http://localhost:8080/api/p/list', { params: appliedFilters });
// // // // //       setProducts(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching products:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleCategoryClick = (category) => {
// // // // //     if (selectedCategory === category) {
// // // // //       setSelectedCategory(null);
// // // // //       setAppliedFilters({ color: [], size: [], category: null, subcategory: null });
// // // // //     } else {
// // // // //       setSelectedCategory(category);
// // // // //       setAppliedFilters({ ...appliedFilters, category, subcategory: null });
// // // // //     }
// // // // //   };

// // // // //   const handleSubcategoryClick = (subcategory) => {
// // // // //     setAppliedFilters({ ...appliedFilters, subcategory });
// // // // //   };

// // // // //   const toggleFilter = (filterType, value) => {
// // // // //     const lowercasedValue = value.toLowerCase();
// // // // //     const newFilters = { ...appliedFilters };

// // // // //     const currentIndex = newFilters[filterType].indexOf(lowercasedValue);
// // // // //     if (currentIndex === -1) {
// // // // //       newFilters[filterType] = [...newFilters[filterType], lowercasedValue];
// // // // //     } else {
// // // // //       newFilters[filterType] = newFilters[filterType].filter((item) => item !== lowercasedValue);
// // // // //     }

// // // // //     setAppliedFilters(newFilters);
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-white">
// // // // //       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
// // // // //           <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
// // // // //           <div className="flex items-center">
// // // // //             <div className="lg:block hidden">
// // // // //               <div className="ml-4">
// // // // //                 <h3 className="text-sm font-medium text-gray-900">Categories</h3>
// // // // //                 <div className="mt-2 space-y-2">
// // // // //                   {categories1.map((category) => (
// // // // //                     <div key={category} className="flex items-center cursor-pointer">
// // // // //                       <div
// // // // //                         className={`h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 ${
// // // // //                           selectedCategory === category ? 'bg-indigo-200' : ''
// // // // //                         }`}
// // // // //                         onClick={() => handleCategoryClick(category)}
// // // // //                       />
// // // // //                       <label className="ml-2 text-sm text-gray-600">{category}</label>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {selectedCategory && (
// // // // //                 <div className="ml-4 mt-4">
// // // // //                   <h3 className="text-sm font-medium text-gray-900">Subcategories</h3>
// // // // //                   <div className="mt-2 space-y-2">
// // // // //                     {categories2[selectedCategory].map((subcategory) => (
// // // // //                       <div key={subcategory} className="flex items-center cursor-pointer">
// // // // //                         <div
// // // // //                           className={`h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 ${
// // // // //                             appliedFilters.subcategory === subcategory ? 'bg-indigo-200' : ''
// // // // //                           }`}
// // // // //                           onClick={() => handleSubcategoryClick(subcategory)}
// // // // //                         />
// // // // //                         <label className="ml-2 text-sm text-gray-600">{subcategory}</label>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {appliedFilters.subcategory && (
// // // // //                 <div className="ml-4 mt-4">
// // // // //                   <h3 className="text-sm font-medium text-gray-900">Filters</h3>
// // // // //                   <div className="mt-2 space-y-2">
// // // // //                     {filters.map((filter) => (
// // // // //                       <div key={filter.id}>
// // // // //                         <h4 className="text-xs font-medium text-gray-900">{filter.name}</h4>
// // // // //                         {filter.options.map((option) => (
// // // // //                           <div key={option.value} className="flex items-center">
// // // // //                             <input
// // // // //                               id={`filter-${filter.id}-${option.value}`}
// // // // //                               type="checkbox"
// // // // //                               checked={appliedFilters[filter.id].includes(option.value.toLowerCase())}
// // // // //                               onChange={() => toggleFilter(filter.id, option.value)}
// // // // //                               className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
// // // // //                             />
// // // // //                             <label
// // // // //                               htmlFor={`filter-${filter.id}-${option.value}`}
// // // // //                               className="ml-2 text-sm text-gray-600"
// // // // //                             >
// // // // //                               {option.label}
// // // // //                             </label>
// // // // //                           </div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <section aria-labelledby="products-heading" className="pb-24 pt-6">
// // // // //           <h2 id="products-heading" className="sr-only">Products</h2>
// // // // //           <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
// // // // //             {products.map((product) => (
// // // // //               <div key={product._id}>
// // // // //                 <ProductCard product={product} />
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </section>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useState } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import axios from 'axios'; // Use axios or your preferred HTTP client
// // // // import ProductCard from './ProductCard'; // Import the ProductCard component

// // // // const ProductListing = () => {
// // // //   const { category } = useParams();
// // // //   const [products, setProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:8080/api/p?category=${category}`);
// // // //         setProducts(response.data);
// // // //       return response.data
// // // //       } catch (error) {
// // // //         console.error('Error fetching products:', error);
// // // //         // Handle error state or fallback
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, [category]); // Dependency on category ensures re-fetching when category changes

// // // //   return (
// // // //     <div>
// // // //       <h1>Products in {category}</h1>
// // // //       <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
// // // //         {products.map((product) => (
// // // //           <ProductCard key={product._id} product={product} />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductListing;

// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import ProductCard from './ProductCard';
// // // // import './productlist.css'

// // // const ProductListing = () => {
// // //   const { category } = useParams();
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await axios.get(`http://192.168.2.61:8080/api/p/?product_category1=${category.toLowerCase()}`);
// // //         setProducts(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching products:', error);
// // //         // Handle error state or fallback
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [category]);

// // //   const filteredProducts = products.filter(
// // //     (product) =>
// // //       product.product_category1.toLowerCase() === category.toLowerCase()
// // //   );

// // //   return (
// // //     <div>
// // //       <h1>Products in {category}</h1>
// // //       <div className="product-list">
// // //       <div className="w-full grid grid-cols-1 gap-x-1 gap-y-1 lg:grid-cols-4">
// // //         {filteredProducts.map((product) => (
// // //           <div key={product._id} className="product-item">
// // //             <ProductCard product={product} />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductListing;

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import ProductCard from './ProductCard';
// // import { categories1, categories2, categories3 } from '../../Admin/Components/Category'; // Assuming you have defined these in categoriesData.js
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import InputLabel from '@mui/material/InputLabel';

// // const ProductListing = () => {
// //   const { category } = useParams();
// //   const [products, setProducts] = useState([]);
// //   const [category2, setCategory2] = useState('');
// //   const [category3, setCategory3] = useState('');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         let url = `http://192.168.2.61:8080/api/p/?product_category1=${category.toLowerCase()}`;

// //         // Add category 2 and 3 to the URL if selected
// //         if (category2) {
// //           url += `&product_category2=${category2.toLowerCase()}`;
// //         }
// //         if (category3) {
// //           url += `&product_category3=${category3.toLowerCase()}`;
// //         }

// //         const response = await axios.get(url);
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //         // Handle error state or fallback
// //       }
// //     };

// //     fetchData();
// //   }, [category, category2, category3]);

// //   const handleCategory2Change = (e) => {
// //     setCategory2(e.target.value);
// //     // Reset category 3 when category 2 changes to avoid inconsistent combinations
// //     setCategory3('');
// //   };

// //   const handleCategory3Change = (e) => {
// //     setCategory3(e.target.value);
// //   };

// //   const filteredProducts = products.filter((product) => {
// //     const matchesCategory1 = product.product_category1.toLowerCase() === category.toLowerCase();
// //     const matchesCategory2 = !category2 || product.product_category2.toLowerCase() === category2.toLowerCase();
// //     const matchesCategory3 = !category3 || product.product_category3.toLowerCase() === category3.toLowerCase();

// //     return matchesCategory1 && matchesCategory2 && matchesCategory3;
// //   });

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-2xl font-bold mb-4">Products in {category}</h1>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
// //         {/* Filters */}
// //         <div className="lg:col-span-1">
// //           <div className="bg-white p-4 rounded-lg shadow-md">
// //             <h2 className="text-lg font-semibold mb-2">Filters</h2>
// //             {/* Dropdown for Category 2 */}
// //             <FormControl fullWidth variant="outlined" className="mb-4">
// //               <InputLabel id="category2-label">Category 2</InputLabel>
// //               <Select
// //                 labelId="category2-label"
// //                 id="category2"
// //                 value={category2}
// //                 onChange={handleCategory2Change}
// //                 label="Category 2"
// //                 sx={{m:"5px"}}
// //               >
// //                 <MenuItem value="">
// //                   <em>All</em>
// //                 </MenuItem>
// //                 {categories2[category.toLowerCase()] && categories2[category.toLowerCase()].map((cat, index) => (
// //                   <MenuItem key={index} value={cat.toLowerCase()}>{cat}</MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>

// //             {/* Dropdown for Category 3 */}
// //             <FormControl fullWidth variant="outlined">
// //               <InputLabel id="category3-label">Category 3</InputLabel>
// //               <Select
// //                 labelId="category3-label"
// //                 id="category3"
// //                 value={category3}
// //                 onChange={handleCategory3Change}
// //                 label="Category 3"
// //                 sx={{m:"5px"}}
// //               >
// //                 <MenuItem value="">
// //                   <em>All</em>
// //                 </MenuItem>
// //                 {categories3[category2.toLowerCase()] && categories3[category2.toLowerCase()].map((cat, index) => (
// //                   <MenuItem key={index} value={cat.toLowerCase()}>{cat}</MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //           </div>
// //         </div>

// //         {/* Products */}
// //         <div className="lg:col-span-2">
// //           <div className="grid grid-cols-3 gap-4">
// //             {filteredProducts.map((product) => (
// //               <div key={product._id} >
// //                 <ProductCard product={product} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductListing;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import { categories1, categories2, categories3 } from '../../Admin/Components/Category'; // Assuming you have defined these in categoriesData.js
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Slider from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';

// const ProductListing = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [category2, setCategory2] = useState('');
//   const [category3, setCategory3] = useState('');
//   const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let url = `http://192.168.2.61:8080/api/p/?product_category1=${category.toLowerCase()}`;

//         // Add category 2 and 3 to the URL if selected
//         if (category2) {
//           url += `&product_category2=${category2.toLowerCase()}`;
//         }
//         if (category3) {
//           url += `&product_category3=${category3.toLowerCase()}`;
//         }

//         // Add price range filter
//         url += `&min_price=${priceRange[0]}&max_price=${priceRange[1]}`;

//         const response = await axios.get(url);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         // Handle error state or fallback
//       }
//     };

//     fetchData();
//   }, [category, category2, category3, priceRange]);

//   const handleCategory2Change = (e) => {
//     setCategory2(e.target.value);
//     // Reset category 3 when category 2 changes to avoid inconsistent combinations
//     setCategory3('');
//   };

//   const handleCategory3Change = (e) => {
//     setCategory3(e.target.value);
//   };

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesCategory1 = product.product_category1.toLowerCase() === category.toLowerCase();
//     const matchesCategory2 = !category2 || product.product_category2.toLowerCase() === category2.toLowerCase();
//     const matchesCategory3 = !category3 || product.product_category3.toLowerCase() === category3.toLowerCase();
//     const withinPriceRange = product.product_price >= priceRange[0] && product.product_price <= priceRange[1];

//     return matchesCategory1 && matchesCategory2 && matchesCategory3 && withinPriceRange;
//   });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Products in {category}</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         {/* Filters */}
//         <div className="lg:col-span-1">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-2">Filters</h2>
//             {/* Dropdown for Category 2 */}
//             <FormControl fullWidth variant="outlined" className="mb-4">
//               <InputLabel id="category2-label">Category 2</InputLabel>
//               <Select
//                 labelId="category2-label"
//                 id="category2"
//                 value={category2}
//                 onChange={handleCategory2Change}
//                 label="Category 2"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="">
//                   <em>All</em>
//                 </MenuItem>
//                 {categories2[category.toLowerCase()] && categories2[category.toLowerCase()].map((cat, index) => (
//                   <MenuItem key={index} value={cat.toLowerCase()}>{cat}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Dropdown for Category 3 */}
//             <FormControl fullWidth variant="outlined" className="mb-4">
//               <InputLabel id="category3-label">Category 3</InputLabel>
//               <Select
//                 labelId="category3-label"
//                 id="category3"
//                 value={category3}
//                 onChange={handleCategory3Change}
//                 label="Category 3"
//                 sx={{ mb: 2 }}
//               >
//                 <MenuItem value="">
//                   <em>All</em>
//                 </MenuItem>
//                 {categories3[category2.toLowerCase()] && categories3[category2.toLowerCase()].map((cat, index) => (
//                   <MenuItem key={index} value={cat.toLowerCase()}>{cat}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Price Range Slider */}
//             <Typography id="price-range-slider" gutterBottom>
//               Price Range
//             </Typography>
//             <Slider
//               value={priceRange}
//               onChange={handlePriceChange}
//               valueLabelDisplay="auto"
//               aria-labelledby="price-range-slider"
//               min={0}
//               max={10000}
//               step={10}
//             />
//           </div>
//         </div>

//         {/* Products */}
//         <div className="lg:col-span-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredProducts.map((product) => (
//               <div key={product._id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import {
  categories1,
  categories2,
  categories3,
} from "../../Admin/Components/Category"; // Assuming you have defined these in categoriesData.js
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]); // Updated default price range
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `http://192.168.2.61:8080/api/p/?product_category1=${category.toLowerCase()}`;

        // Add category 2 and 3 to the URL if selected
        if (category2) {
          url += `&product_category2=${category2.toLowerCase()}`;
        }
        if (category3) {
          url += `&product_category3=${category3.toLowerCase()}`;
        }

        // Add price range filter
        url += `&min_price=${priceRange[0]}&max_price=${priceRange[1]}`;

        // Add size filter (if selected)
        if (selectedSize) {
          url += `&size=${selectedSize.toUpperCase()}`;
        }

        // Add color filter (if selected)
        if (selectedColor) {
          url += `&color=${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error state or fallback
      }
    };

    fetchData();
  }, [category, category2, category3, priceRange, selectedSize, selectedColor]);

  const handleCategory2Change = (e) => {
    setCategory2(e.target.value);
    // Reset category 3 when category 2 changes to avoid inconsistent combinations
    setCategory3("");
  };

  const handleCategory3Change = (e) => {
    setCategory3(e.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory1 =
      product.product_category1.toLowerCase() === category.toLowerCase();
    const matchesCategory2 =
      !category2 ||
      product.product_category2.toLowerCase() === category2.toLowerCase();
    const matchesCategory3 =
      !category3 ||
      product.product_category3.toLowerCase() === category3.toLowerCase();
    const withinPriceRange =
      product.product_price >= priceRange[0] &&
      product.product_price <= priceRange[1];

    // Check if selected size matches any size in product's array
    const matchesSize =
      !selectedSize ||
      product.product_size.includes(selectedSize.toUpperCase());


    // Check if selected color matches any color in product's array
    const matchesColor =
      !selectedColor ||
      product.product_color.includes(selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1));

      return (
      matchesCategory1 &&
      matchesCategory2 &&
      matchesCategory3 &&
      withinPriceRange &&
      matchesSize &&
      matchesColor
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Products in {category}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Filters</h2>
            {/* Dropdown for Category 2 */}
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel id="category2-label">Category 2</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                value={category2}
                onChange={handleCategory2Change}
                label="Category 2"
                sx={{ mb: 2 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {categories2[category.toLowerCase()] &&
                  categories2[category.toLowerCase()].map((cat, index) => (
                    <MenuItem key={index} value={cat.toLowerCase()}>
                      {cat}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Dropdown for Category 3 */}
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel id="category3-label">Category 3</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                value={category3}
                onChange={handleCategory3Change}
                label="Category 3"
                sx={{ mb: 2 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {categories3[category2.toLowerCase()] &&
                  categories3[category2.toLowerCase()].map((cat, index) => (
                    <MenuItem key={index} value={cat.toLowerCase()}>
                      {cat}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Price Range Slider */}
            <Typography id="price-range-slider" gutterBottom>
              Price Range
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              aria-labelledby="price-range-slider"
              min={0}
              max={10000}
              step={10}
            />

            {/* Dropdown for Size */}
            <FormControl fullWidth variant="outlined" className="mb-4">
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                labelId="size-label"
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
                label="Size"
                sx={{ mb: 2 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {["S", "M", "L", "XL"].map((size) => (
                  <MenuItem key={size} value={size.toLowerCase()}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Dropdown for Color */}
            <FormControl fullWidth variant="outlined">
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                value={selectedColor}
                onChange={handleColorChange}
                label="Color"
                sx={{ mb: 2 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {["Red", "Green", "Blue", "Black", "Pink", "Natural"].map(
                  (color) => (
                    <MenuItem key={color} value={color.toLowerCase()}>
                      {color}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
