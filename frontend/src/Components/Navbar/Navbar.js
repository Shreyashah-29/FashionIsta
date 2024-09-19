// // // // // // import { Fragment, useEffect, useState } from "react";
// // // // // // import {
// // // // // //   Dialog,
// // // // // //   DialogPanel,
// // // // // //   Popover,
// // // // // //   PopoverButton,
// // // // // //   PopoverGroup,
// // // // // //   PopoverPanel,
// // // // // //   Tab,
// // // // // //   TabGroup,
// // // // // //   TabList,
// // // // // //   TabPanel,
// // // // // //   TabPanels,
// // // // // //   Transition,
// // // // // //   TransitionChild,
// // // // // // } from "@headlessui/react";

// // // // // // import { logo } from "../../Assets/Assets";
// // // // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // // // import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
// // // // // // // import { navigation } from "../../../config/navigationMenu";
// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { logout } from '../../Redux/User/authSlice';

// // // // // // import SearchIcon from "@mui/icons-material/Search";
// // // // // // import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// // // // // // import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
// // // // // // import CloseIcon from "@mui/icons-material/Close";

// // // // // // // Import categories data
// // // // // // import {
// // // // // //   categories1,
// // // // // //   categories2,
// // // // // //   categories3,
// // // // // // } from "../../Admin/Components/Category";

// // // // // // const navigation = {
// // // // // //   categories: categories1.map((mainCategory) => ({
// // // // // //     id: mainCategory,
// // // // // //     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
// // // // // //     featured: [
// // // // // //       {
// // // // // //         name: "New Arrivals",
// // // // // //         href: `/${mainCategory}/new-arrivals`,
// // // // // //         imageSrc:
// // // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
// // // // // //         imageAlt: "New Arrivals",
// // // // // //       },
// // // // // //       {
// // // // // //         name: "Popular Items",
// // // // // //         href: `/${mainCategory}/popular-items`,
// // // // // //         imageSrc:
// // // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
// // // // // //         imageAlt: "Popular Items",
// // // // // //       },
// // // // // //     ],
// // // // // //     sections: categories2[mainCategory].map((subCategory) => ({
// // // // // //       id: subCategory,
// // // // // //       name: subCategory.charAt(0).toUpperCase() + subCategory.slice(1),
// // // // // //       items: categories3[subCategory].map((subSubCategory) => ({
// // // // // //         name: subSubCategory.charAt(0).toUpperCase() + subSubCategory.slice(1),
// // // // // //         href: `/${mainCategory}/${subCategory}/${subSubCategory}`,
// // // // // //       })),
// // // // // //     })),
// // // // // //   })),
// // // // // // };

// // // // // // function classNames(...classes) {
// // // // // //   return classes.filter(Boolean).join(" ");
// // // // // // }

// // // // // // export default function Navbar() {
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const navigate = useNavigate();
// // // // // //   const dispatch = useDispatch();
// // // // // //   const { user, isAuthenticated } = useSelector(state => state.auth);
// // // // // //   const [anchorEl, setAnchorEl] = useState(null);

// // // // // //   const cartCount = useSelector((state) => state.cart.cartCount);

// // // // // //   const handleAvatarClick = (event) => {
// // // // // //     setAnchorEl(event.currentTarget);
// // // // // //     setOpen(true);
// // // // // //   };

// // // // // //   const handleCategoryClick = (category, section, item, close) => {
// // // // // //     navigate(item.href);
// // // // // //     close();
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     dispatch(logout());

// // // // // //     // You might also want to redirect the user after logout
// // // // // //     // Example: history.push('/signIn');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-white pb-10">
// // // // // //       {/* Mobile menu */}
// // // // // //       <Transition show={open}>
// // // // // //         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
// // // // // //           <TransitionChild
// // // // // //             enter="transition-opacity ease-linear duration-300"
// // // // // //             enterFrom="opacity-0"
// // // // // //             enterTo="opacity-100"
// // // // // //             leave="transition-opacity ease-linear duration-300"
// // // // // //             leaveFrom="opacity-100"
// // // // // //             leaveTo="opacity-0"
// // // // // //           >
// // // // // //             <div className="fixed inset-0 bg-black bg-opacity-25" />
// // // // // //           </TransitionChild>

// // // // // //           <div className="fixed inset-0 z-50 flex">
// // // // // //             <TransitionChild
// // // // // //               enter="transition ease-in-out duration-300 transform"
// // // // // //               enterFrom="-translate-x-full"
// // // // // //               enterTo="translate-x-0"
// // // // // //               leave="transition ease-in-out duration-300 transform"
// // // // // //               leaveFrom="translate-x-0"
// // // // // //               leaveTo="-translate-x-full"
// // // // // //             >
// // // // // //               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
// // // // // //                 <div className="flex px-4 pb-2 pt-5">
// // // // // //                   <button
// // // // // //                     type="button"
// // // // // //                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// // // // // //                     onClick={() => setOpen(false)}
// // // // // //                   >
// // // // // //                     <span className="absolute -inset-0.5" />
// // // // // //                     <span className="sr-only">Close menu</span>
// // // // // //                     {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
// // // // // //                     </IconButton>
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 {/* Links */}
// // // // // //                 <TabGroup className="mt-2">
// // // // // //                   <div className="border-b border-gray-200">
// // // // // //                     <TabList className="-mb-px flex space-x-8 px-4">
// // // // // //                       {navigation.categories.map((category) => (
// // // // // //                         <Tab
// // // // // //                           key={category.name}
// // // // // //                           className={({ selected }) =>
// // // // // //                             classNames(
// // // // // //                               selected
// // // // // //                                 ? "border-indigo-600 text-indigo-600"
// // // // // //                                 : "border-transparent text-gray-900",
// // // // // //                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
// // // // // //                             )
// // // // // //                           }
// // // // // //                         >
// // // // // //                           {category.name}
// // // // // //                         </Tab>
// // // // // //                       ))}
// // // // // //                     </TabList>
// // // // // //                   </div>
// // // // // //                   <TabPanels as={Fragment}>
// // // // // //                     {navigation.categories.map((category) => (
// // // // // //                       <TabPanel
// // // // // //                         key={category.name}
// // // // // //                         className="space-y-10 px-4 pb-8 pt-10"
// // // // // //                       >
// // // // // //                         <div className="grid grid-cols-2 gap-x-4">
// // // // // //                           {category.featured.map((item) => (
// // // // // //                             <div
// // // // // //                               key={item.name}
// // // // // //                               className="group relative text-sm"
// // // // // //                             >
// // // // // //                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // // //                                 <img
// // // // // //                                   src={item.imageSrc}
// // // // // //                                   alt={item.imageAlt}
// // // // // //                                   className="object-cover object-center"
// // // // // //                                 />
// // // // // //                               </div>
// // // // // //                               <a
// // // // // //                                 href={item.href}
// // // // // //                                 className="mt-6 block font-medium text-gray-900"
// // // // // //                               >
// // // // // //                                 <span
// // // // // //                                   className="absolute inset-0 z-10"
// // // // // //                                   aria-hidden="true"
// // // // // //                                 />
// // // // // //                                 {item.name}
// // // // // //                               </a>
// // // // // //                               <p aria-hidden="true" className="mt-1">
// // // // // //                                 Shop now
// // // // // //                               </p>
// // // // // //                             </div>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                         {category.sections.map((section) => (
// // // // // //                           <div key={section.name}>
// // // // // //                             <p
// // // // // //                               id={`${category.id}-${section.id}-heading-mobile`}
// // // // // //                               className="font-medium text-gray-900"
// // // // // //                             >
// // // // // //                               {section.name}
// // // // // //                             </p>
// // // // // //                             <ul
// // // // // //                               role="list"
// // // // // //                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
// // // // // //                               className="mt-6 flex flex-col space-y-6"
// // // // // //                             >
// // // // // //                               {section.items.map((item) => (
// // // // // //                                 <li key={item.name} className="flow-root">
// // // // // //                                   <a
// // // // // //                                     href={item.href}
// // // // // //                                     className="-m-2 block p-2 text-gray-500"
// // // // // //                                   >
// // // // // //                                     {item.name}
// // // // // //                                   </a>
// // // // // //                                 </li>
// // // // // //                               ))}
// // // // // //                             </ul>
// // // // // //                           </div>
// // // // // //                         ))}
// // // // // //                       </TabPanel>
// // // // // //                     ))}
// // // // // //                   </TabPanels>
// // // // // //                 </TabGroup>

// // // // // //                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// // // // // //                   <div className="flow-root">
// // // // // //                     <Link
// // // // // //                       to={"/signIn"}
// // // // // //                       className="-m-2 block p-2 font-medium text-gray-900"
// // // // // //                     >
// // // // // //                       Sign in
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </DialogPanel>
// // // // // //             </TransitionChild>
// // // // // //           </div>
// // // // // //         </Dialog>
// // // // // //       </Transition>

// // // // // //       <header className="relative bg-white">
// // // // // //         <nav
// // // // // //           aria-label="Top"
// // // // // //           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
// // // // // //         >
// // // // // //           <div className="border-b border-gray-200">
// // // // // //             <div className="flex h-16 items-center">
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
// // // // // //                 onClick={() => setOpen(true)}
// // // // // //               >
// // // // // //                 <span className="absolute -inset-0.5" />
// // // // // //                 <span className="sr-only">Open menu</span>
// // // // // //                 {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
// // // // // //                 <IconButton color="secondary">
// // // // // //                   <HorizontalSplitOutlinedIcon />
// // // // // //                 </IconButton>
// // // // // //               </button>

// // // // // //               {/* Logo */}
// // // // // //               <div className="ml-4 flex lg:ml-0">
// // // // // //                 <Link to={"/"}>
// // // // // //                   <span className="sr-only">Your Company</span>
// // // // // //                   <img className="h-8 w-auto" src={logo} alt="logo" />
// // // // // //                 </Link>
// // // // // //               </div>

// // // // // //               <div className="flex items-center">
// // // // // //           {isAuthenticated ? (
// // // // // //             <div className="flex items-center">
// // // // // //               <Avatar alt={user.userName} src={user.avatarUrl} />
// // // // // //               <p className="ml-2 text-sm font-medium text-gray-700">{user.userName}</p>
// // // // // //               <button onClick={handleLogout} className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-800">
// // // // // //                 Logout
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <Link to="/signIn" className="text-sm font-medium text-gray-700 hover:text-gray-800">
// // // // // //               Sign in
// // // // // //             </Link>
// // // // // //           )}
// // // // // //         </div>

// // // // // //               {/* Flyout menus */}
// // // // // //               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
// // // // // //                 <div className="flex h-full space-x-8">
// // // // // //                   {navigation.categories.map((category) => (
// // // // // //                     <Popover key={category.name} className="flex">
// // // // // //                       {({ open, close }) => (
// // // // // //                         <>
// // // // // //                           <PopoverButton
// // // // // //                             className={classNames(
// // // // // //                               open
// // // // // //                                 ? "border-indigo-600 text-indigo-600"
// // // // // //                                 : "border-transparent text-gray-700 hover:text-gray-800",
// // // // // //                               "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
// // // // // //                             )}
// // // // // //                           >
// // // // // //                             {category.name}
// // // // // //                           </PopoverButton>

// // // // // //                           <Transition
// // // // // //                             as={Fragment}
// // // // // //                             enter="transition ease-out duration-200"
// // // // // //                             enterFrom="opacity-0"
// // // // // //                             enterTo="opacity-100"
// // // // // //                             leave="transition ease-in duration-150"
// // // // // //                             leaveFrom="opacity-100"
// // // // // //                             leaveTo="opacity-0"
// // // // // //                           >
// // // // // //                             <PopoverPanel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500">
// // // // // //                               {/* Mega menu */}
// // // // // //                               <div
// // // // // //                                 className="absolute inset-0 top-1/2 bg-white shadow"
// // // // // //                                 aria-hidden="true"
// // // // // //                               />

// // // // // //                               <div className="relative bg-white">
// // // // // //                                 <div className="mx-auto max-w-7xl px-8">
// // // // // //                                   <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
// // // // // //                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
// // // // // //                                       {category.featured.map((item) => (
// // // // // //                                         <div
// // // // // //                                           key={item.name}
// // // // // //                                           className="group relative text-base sm:text-sm"
// // // // // //                                         >
// // // // // //                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // // //                                             <img
// // // // // //                                               src={item.imageSrc}
// // // // // //                                               alt={item.imageAlt}
// // // // // //                                               className="object-cover object-center"
// // // // // //                                             />
// // // // // //                                           </div>
// // // // // //                                           <Link
// // // // // //                                             to={item.href}
// // // // // //                                             className="mt-6 block font-medium text-gray-900"
// // // // // //                                             onClick={() => close()}
// // // // // //                                           >
// // // // // //                                             <span
// // // // // //                                               className="absolute inset-0 z-10"
// // // // // //                                               aria-hidden="true"
// // // // // //                                             />
// // // // // //                                             {item.name}
// // // // // //                                           </Link>
// // // // // //                                           <p
// // // // // //                                             aria-hidden="true"
// // // // // //                                             className="mt-1"
// // // // // //                                           >
// // // // // //                                             Shop now
// // // // // //                                           </p>
// // // // // //                                         </div>
// // // // // //                                       ))}
// // // // // //                                     </div>
// // // // // //                                     <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
// // // // // //                                       {category.sections.map((section) => (
// // // // // //                                         <div key={section.name}>
// // // // // //                                           <p
// // // // // //                                             id={`${section.name}-heading`}
// // // // // //                                             className="font-medium text-gray-900"
// // // // // //                                           >
// // // // // //                                             {section.name}
// // // // // //                                           </p>
// // // // // //                                           <ul
// // // // // //                                             role="list"
// // // // // //                                             aria-labelledby={`${section.name}-heading`}
// // // // // //                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
// // // // // //                                           >
// // // // // //                                             {section.items.map((item) => (
// // // // // //                                               <li
// // // // // //                                                 key={item.name}
// // // // // //                                                 className="flex"
// // // // // //                                               >
// // // // // //                                                 <Link
// // // // // //                                                   to={item.href}
// // // // // //                                                   className="hover:text-gray-800"
// // // // // //                                                   onClick={() =>
// // // // // //                                                     handleCategoryClick(
// // // // // //                                                       category,
// // // // // //                                                       section,
// // // // // //                                                       item,
// // // // // //                                                       close
// // // // // //                                                     )
// // // // // //                                                   }
// // // // // //                                                 >
// // // // // //                                                   {item.name}
// // // // // //                                                 </Link>
// // // // // //                                               </li>
// // // // // //                                             ))}
// // // // // //                                           </ul>
// // // // // //                                         </div>
// // // // // //                                       ))}
// // // // // //                                     </div>
// // // // // //                                   </div>
// // // // // //                                 </div>
// // // // // //                               </div>
// // // // // //                             </PopoverPanel>
// // // // // //                           </Transition>
// // // // // //                         </>
// // // // // //                       )}
// // // // // //                     </Popover>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </PopoverGroup>

// // // // // //               <div className="ml-auto flex items-center">
// // // // // //                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
// // // // // //                   <Link
// // // // // //                     to={"/signIn"}
// // // // // //                     className="text-sm font-medium text-gray-700 hover:text-gray-800"
// // // // // //                   >
// // // // // //                     Sign in
// // // // // //                   </Link>
// // // // // //                 </div>

// // // // // //                 {/* Search */}
// // // // // //                 <div className="flex lg:ml-6">
// // // // // //                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
// // // // // //                     <span className="sr-only">Search</span>
// // // // // //                     {/* <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" /> */}
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <SearchIcon />
// // // // // //                     </IconButton>
// // // // // //                   </a>
// // // // // //                 </div>

// // // // // //                 {/* Cart */}
// // // // // //                 <div className="ml-4 flow-root lg:ml-6 relative">
// // // // // //                   <Link
// // // // // //                     to={"/cart"}
// // // // // //                     className="group -m-2 flex items-center p-2 relative"
// // // // // //                   >
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <ShoppingBagIcon
// // // // // //                         className="h-6 w-6 flex-shrink-0"
// // // // // //                         aria-hidden="true"
// // // // // //                       />
// // // // // //                     </IconButton>

// // // // // //                     {/* Cart count */}
// // // // // //                     {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
// // // // // //                       {cartCount}
// // // // // //                     </span> */}
// // // // // //                     <span className="sr-only">items in cart, view bag</span>

// // // // // //                     <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
// // // // // //                       {cartCount > 0 && (
// // // // // //                         <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
// // // // // //                           {cartCount}
// // // // // //                         </span>
// // // // // //                       )}
// // // // // //                     </span>
// // // // // //                   </Link>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </nav>
// // // // // //       </header>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // import { Fragment, useEffect, useState } from "react";
// // // // // // import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { logout } from "../../Redux/User/authSlice";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import {
// // // // // //   Dialog,
// // // // // //   DialogPanel,
// // // // // //   Popover,
// // // // // //   PopoverButton,
// // // // // //   PopoverGroup,
// // // // // //   PopoverPanel,
// // // // // //   Tab,
// // // // // //   TabGroup,
// // // // // //   TabList,
// // // // // //   TabPanel,
// // // // // //   TabPanels,
// // // // // //   Transition,
// // // // // //   TransitionChild,
// // // // // // } from "@headlessui/react";

// // // // // // // Import your logo and other necessary assets
// // // // // // import { logo } from "../../Assets/Assets";
// // // // // // import SearchIcon from "@mui/icons-material/Search";
// // // // // // import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// // // // // // import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
// // // // // // import CloseIcon from "@mui/icons-material/Close";

// // // // // // import {
// // // // // //   categories1,
// // // // // //   categories2,
// // // // // //   categories3,
// // // // // // } from "../../Admin/Components/Category";

// // // // // // const navigation = {
// // // // // //   categories: categories1.map((mainCategory) => ({
// // // // // //     id: mainCategory,
// // // // // //     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
// // // // // //     featured: [
// // // // // //       {
// // // // // //         name: "New Arrivals",
// // // // // //         href: `/${mainCategory}/new-arrivals`,
// // // // // //         imageSrc:
// // // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
// // // // // //         imageAlt: "New Arrivals",
// // // // // //       },
// // // // // //       {
// // // // // //         name: "Popular Items",
// // // // // //         href: `/${mainCategory}/popular-items`,
// // // // // //         imageSrc:
// // // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
// // // // // //         imageAlt: "Popular Items",
// // // // // //       },
// // // // // //     ],
// // // // // //     sections: categories2[mainCategory].map((subCategory) => ({
// // // // // //       id: subCategory,
// // // // // //       name: subCategory.charAt(0).toUpperCase() + subCategory.slice(1),
// // // // // //       items: categories3[subCategory].map((subSubCategory) => ({
// // // // // //         name: subSubCategory.charAt(0).toUpperCase() + subSubCategory.slice(1),
// // // // // //         href: `/${mainCategory}/${subCategory}/${subSubCategory}`,
// // // // // //       })),
// // // // // //     })),
// // // // // //   })),
// // // // // // };

// // // // // // function classNames(...classes) {
// // // // // //   return classes.filter(Boolean).join(" ");
// // // // // // }

// // // // // // export default function Navbar() {
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const [anchorEl, setAnchorEl] = useState(null);
// // // // // //   const dispatch = useDispatch();
// // // // // //   const { user, isAuthenticated } = useSelector((state) => state.auth);

// // // // // //   const cartCount = useSelector((state) => state.cart.cartCount);

// // // // // //   const handleCategoryClick = (category, section, item, close) => {
// // // // // //     // Navigate to the selected item's href
// // // // // //     // For example:
// // // // // //     // navigate(item.href);
// // // // // //     close(); // Close the popover or menu
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     dispatch(logout());
// // // // // //     // Close the menu after logout if necessary
// // // // // //     handleClose();
// // // // // //     // You might also want to redirect the user after logout
// // // // // //     // Example: history.push('/signIn');
// // // // // //   };

// // // // // //   const handleAvatarClick = (event) => {
// // // // // //     setAnchorEl(event.currentTarget);
// // // // // //     setOpen(true);
// // // // // //   };

// // // // // //   const handleClose = () => {
// // // // // //     setAnchorEl(null);
// // // // // //     setOpen(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-white pb-10">
// // // // // //       {/* Mobile menu */}
// // // // // //       <Transition show={open}>
// // // // // //         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
// // // // // //           <TransitionChild
// // // // // //             enter="transition-opacity ease-linear duration-300"
// // // // // //             enterFrom="opacity-0"
// // // // // //             enterTo="opacity-100"
// // // // // //             leave="transition-opacity ease-linear duration-300"
// // // // // //             leaveFrom="opacity-100"
// // // // // //             leaveTo="opacity-0"
// // // // // //           >
// // // // // //             <div className="fixed inset-0 bg-black bg-opacity-25" />
// // // // // //           </TransitionChild>

// // // // // //           <div className="fixed inset-0 z-50 flex">
// // // // // //             <TransitionChild
// // // // // //               enter="transition ease-in-out duration-300 transform"
// // // // // //               enterFrom="-translate-x-full"
// // // // // //               enterTo="translate-x-0"
// // // // // //               leave="transition ease-in-out duration-300 transform"
// // // // // //               leaveFrom="translate-x-0"
// // // // // //               leaveTo="-translate-x-full"
// // // // // //             >
// // // // // //               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
// // // // // //                 <div className="flex px-4 pb-2 pt-5">
// // // // // //                   <button
// // // // // //                     type="button"
// // // // // //                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// // // // // //                     onClick={() => setOpen(false)}
// // // // // //                   >
// // // // // //                     <span className="absolute -inset-0.5" />
// // // // // //                     <span className="sr-only">Close menu</span>
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
// // // // // //                     </IconButton>
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 {/* Links */}
// // // // // //                 <TabGroup className="mt-2">
// // // // // //                   <div className="border-b border-gray-200">
// // // // // //                     <TabList className="-mb-px flex space-x-8 px-4">
// // // // // //                       {navigation.categories.map((category) => (
// // // // // //                         <Tab
// // // // // //                           key={category.name}
// // // // // //                           className={({ selected }) =>
// // // // // //                             classNames(
// // // // // //                               selected
// // // // // //                                 ? "border-indigo-600 text-indigo-600"
// // // // // //                                 : "border-transparent text-gray-900",
// // // // // //                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
// // // // // //                             )
// // // // // //                           }
// // // // // //                         >
// // // // // //                           {category.name}
// // // // // //                         </Tab>
// // // // // //                       ))}
// // // // // //                     </TabList>
// // // // // //                   </div>
// // // // // //                   <TabPanels as={Fragment}>
// // // // // //                     {navigation.categories.map((category) => (
// // // // // //                       <TabPanel
// // // // // //                         key={category.name}
// // // // // //                         className="space-y-10 px-4 pb-8 pt-10"
// // // // // //                       >
// // // // // //                         <div className="grid grid-cols-2 gap-x-4">
// // // // // //                           {category.featured.map((item) => (
// // // // // //                             <div
// // // // // //                               key={item.name}
// // // // // //                               className="group relative text-sm"
// // // // // //                             >
// // // // // //                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // // //                                 <img
// // // // // //                                   src={item.imageSrc}
// // // // // //                                   alt={item.imageAlt}
// // // // // //                                   className="object-cover object-center"
// // // // // //                                 />
// // // // // //                               </div>
// // // // // //                               <a
// // // // // //                                 href={item.href}
// // // // // //                                 className="mt-6 block font-medium text-gray-900"
// // // // // //                               >
// // // // // //                                 <span
// // // // // //                                   className="absolute inset-0 z-10"
// // // // // //                                   aria-hidden="true"
// // // // // //                                 />
// // // // // //                                 {item.name}
// // // // // //                               </a>
// // // // // //                               <p aria-hidden="true" className="mt-1">
// // // // // //                                 Shop now
// // // // // //                               </p>
// // // // // //                             </div>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                         {category.sections.map((section) => (
// // // // // //                           <div key={section.name}>
// // // // // //                             <p
// // // // // //                               id={`${category.id}-${section.id}-heading-mobile`}
// // // // // //                               className="font-medium text-gray-900"
// // // // // //                             >
// // // // // //                               {section.name}
// // // // // //                             </p>
// // // // // //                             <ul
// // // // // //                               role="list"
// // // // // //                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
// // // // // //                               className="mt-6 flex flex-col space-y-6"
// // // // // //                             >
// // // // // //                               {section.items.map((item) => (
// // // // // //                                 <li key={item.name} className="flow-root">
// // // // // //                                   <a
// // // // // //                                     href={item.href}
// // // // // //                                     className="-m-2 block p-2 text-gray-500"
// // // // // //                                   >
// // // // // //                                     {item.name}
// // // // // //                                   </a>
// // // // // //                                 </li>
// // // // // //                               ))}
// // // // // //                             </ul>
// // // // // //                           </div>
// // // // // //                         ))}
// // // // // //                       </TabPanel>
// // // // // //                     ))}
// // // // // //                   </TabPanels>
// // // // // //                 </TabGroup>

// // // // // //                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// // // // // //                   <div className="flow-root">
// // // // // //                     <Link
// // // // // //                       to={"/signIn"}
// // // // // //                       className="-m-2 block p-2 font-medium text-gray-900"
// // // // // //                     >
// // // // // //                       Sign in
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </DialogPanel>
// // // // // //             </TransitionChild>
// // // // // //           </div>
// // // // // //         </Dialog>
// // // // // //       </Transition>

// // // // // //       <header className="relative bg-white">
// // // // // //         <nav
// // // // // //           aria-label="Top"
// // // // // //           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
// // // // // //         >
// // // // // //           <div className="border-b border-gray-200">
// // // // // //             <div className="flex h-16 items-center">
// // // // // //               <button
// // // // // //                 type="button"
// // // // // //                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
// // // // // //                 onClick={() => setOpen(true)}
// // // // // //               >
// // // // // //                 <span className="absolute -inset-0.5" />
// // // // // //                 <span className="sr-only">Open menu</span>
// // // // // //                 <IconButton color="secondary">
// // // // // //                   <HorizontalSplitOutlinedIcon />
// // // // // //                 </IconButton>
// // // // // //               </button>

// // // // // //               {/* Logo */}
// // // // // //               <div className="ml-4 flex lg:ml-0">
// // // // // //                 <Link to={"/"}>
// // // // // //                   <span className="sr-only">Your Company</span>
// // // // // //                   <img className="h-8 w-auto" src={logo} alt="logo" />
// // // // // //                 </Link>
// // // // // //               </div>

// // // // // //               {/* Flyout menus */}
// // // // // //               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
// // // // // //                 <div className="flex h-full space-x-8">
// // // // // //                   {navigation.categories.map((category) => (
// // // // // //                     <Popover key={category.name} className="flex">
// // // // // //                       {({ open, close }) => (
// // // // // //                         <>
// // // // // //                           <PopoverButton
// // // // // //                             className={classNames(
// // // // // //                               open
// // // // // //                                 ? "border-indigo-600 text-indigo-600"
// // // // // //                                 : "border-transparent text-gray-700 hover:text-gray-800",
// // // // // //                               "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
// // // // // //                             )}
// // // // // //                           >
// // // // // //                             {category.name}
// // // // // //                           </PopoverButton>

// // // // // //                           <Transition
// // // // // //                             as={Fragment}
// // // // // //                             enter="transition ease-out duration-200"
// // // // // //                             enterFrom="opacity-0"
// // // // // //                             enterTo="opacity-100"
// // // // // //                             leave="transition ease-in duration-150"
// // // // // //                             leaveFrom="opacity-100"
// // // // // //                             leaveTo="opacity-0"
// // // // // //                           >
// // // // // //                             <PopoverPanel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500">
// // // // // //                               {/* Mega menu */}
// // // // // //                               <div
// // // // // //                                 className="absolute inset-0 top-1/2 bg-white shadow"
// // // // // //                                 aria-hidden="true"
// // // // // //                               />

// // // // // //                               <div className="relative bg-white">
// // // // // //                                 <div className="mx-auto max-w-7xl px-8">
// // // // // //                                   <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
// // // // // //                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
// // // // // //                                       {category.featured.map((item) => (
// // // // // //                                         <div
// // // // // //                                           key={item.name}
// // // // // //                                           className="group relative text-base sm:text-sm"
// // // // // //                                         >
// // // // // //                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // // //                                             <img
// // // // // //                                               src={item.imageSrc}
// // // // // //                                               alt={item.imageAlt}
// // // // // //                                               className="object-cover object-center"
// // // // // //                                             />
// // // // // //                                           </div>
// // // // // //                                           <Link
// // // // // //                                             to={item.href}
// // // // // //                                             className="mt-6 block font-medium text-gray-900"
// // // // // //                                             onClick={() => close()}
// // // // // //                                           >
// // // // // //                                             <span
// // // // // //                                               className="absolute inset-0 z-10"
// // // // // //                                               aria-hidden="true"
// // // // // //                                             />
// // // // // //                                             {item.name}
// // // // // //                                           </Link>
// // // // // //                                           <p
// // // // // //                                             aria-hidden="true"
// // // // // //                                             className="mt-1"
// // // // // //                                           >
// // // // // //                                             Shop now
// // // // // //                                           </p>
// // // // // //                                         </div>
// // // // // //                                       ))}
// // // // // //                                     </div>
// // // // // //                                     <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
// // // // // //                                       {category.sections.map((section) => (
// // // // // //                                         <div key={section.name}>
// // // // // //                                           <p
// // // // // //                                             id={`${section.name}-heading`}
// // // // // //                                             className="font-medium text-gray-900"
// // // // // //                                           >
// // // // // //                                             {section.name}
// // // // // //                                           </p>
// // // // // //                                           <ul
// // // // // //                                             role="list"
// // // // // //                                             aria-labelledby={`${section.name}-heading`}
// // // // // //                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
// // // // // //                                           >
// // // // // //                                             {section.items.map((item) => (
// // // // // //                                               <li
// // // // // //                                                 key={item.name}
// // // // // //                                                 className="flex"
// // // // // //                                               >
// // // // // //                                                 <Link
// // // // // //                                                   to={item.href}
// // // // // //                                                   className="hover:text-gray-800"
// // // // // //                                                   onClick={() =>
// // // // // //                                                     handleCategoryClick(
// // // // // //                                                       category,
// // // // // //                                                       section,
// // // // // //                                                       item,
// // // // // //                                                       close
// // // // // //                                                     )
// // // // // //                                                   }
// // // // // //                                                 >
// // // // // //                                                   {item.name}
// // // // // //                                                 </Link>
// // // // // //                                               </li>
// // // // // //                                             ))}
// // // // // //                                           </ul>
// // // // // //                                         </div>
// // // // // //                                       ))}
// // // // // //                                     </div>
// // // // // //                                   </div>
// // // // // //                                 </div>
// // // // // //                               </div>
// // // // // //                             </PopoverPanel>
// // // // // //                           </Transition>
// // // // // //                         </>
// // // // // //                       )}
// // // // // //                     </Popover>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </PopoverGroup>

// // // // // //               <div className="ml-auto flex items-center">
// // // // // //                 {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
// // // // // //                   <Link
// // // // // //                     to={"/signIn"}
// // // // // //                     className="text-sm font-medium text-gray-700 hover:text-gray-800"
// // // // // //                   >
// // // // // //                     Sign in
// // // // // //                   </Link>
// // // // // //                 </div> */}

// // // // // //               <div className="flex items-center flex-1 justify-center lg:justify-start">
// // // // // //                 {isAuthenticated ? (
// // // // // //                   <div className="relative flex items-center">
// // // // // //                     <Avatar
// // // // // //                       alt={user?.name}
// // // // // //                       src={user?.avatarUrl}
// // // // // //                       onClick={handleAvatarClick}
// // // // // //                       className="cursor-pointer"
// // // // // //                     >
// // // // // //                       {user?.name ? user.name.charAt(0) : ""}
// // // // // //                     </Avatar>
// // // // // //                     <Menu
// // // // // //                       anchorEl={anchorEl}
// // // // // //                       open={open}
// // // // // //                       onClose={handleClose}
// // // // // //                       anchorOrigin={{
// // // // // //                         vertical: "bottom",
// // // // // //                         horizontal: "right",
// // // // // //                       }}
// // // // // //                       transformOrigin={{
// // // // // //                         vertical: "top",
// // // // // //                         horizontal: "right",
// // // // // //                       }}
// // // // // //                       getContentAnchorEl={null}
// // // // // //                     >
// // // // // //                       <MenuItem onClick={handleClose}>Profile</MenuItem>
// // // // // //                       <MenuItem onClick={handleClose}>Orders</MenuItem>
// // // // // //                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // // // // //                     </Menu>
// // // // // //                     <Menu
// // // // // //                       anchorEl={anchorEl}
// // // // // //                       open={open}
// // // // // //                       onClose={handleClose}
// // // // // //                       anchorOrigin={{
// // // // // //                         vertical: "bottom",
// // // // // //                         horizontal: "right",
// // // // // //                       }}
// // // // // //                       transformOrigin={{
// // // // // //                         vertical: "top",
// // // // // //                         horizontal: "right",
// // // // // //                       }}
// // // // // //                       getContentAnchorEl={null}
// // // // // //                     >
// // // // // //                       <MenuItem onClick={handleClose}>Profile</MenuItem>
// // // // // //                       <MenuItem onClick={handleClose}>Orders</MenuItem>
// // // // // //                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // // // // //                     </Menu>
// // // // // //                   </div>
// // // // // //                 ) : (
// // // // // //                   <Link
// // // // // //                     to="/signIn"
// // // // // //                     className="text-sm font-medium text-gray-700 hover:text-gray-800"
// // // // // //                   >
// // // // // //                     Sign in
// // // // // //                   </Link>
// // // // // //                 )}
// // // // // //               </div>

// // // // // //                 {/* Search */}
// // // // // //                 <div className="flex lg:ml-6">
// // // // // //                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
// // // // // //                     <span className="sr-only">Search</span>
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <SearchIcon />
// // // // // //                     </IconButton>
// // // // // //                   </a>
// // // // // //                 </div>

// // // // // //                 {/* Cart */}
// // // // // //                 <div className="ml-4 flow-root lg:ml-6 relative">
// // // // // //                   <Link
// // // // // //                     to={"/cart"}
// // // // // //                     className="group -m-2 flex items-center p-2 relative"
// // // // // //                   >
// // // // // //                     <IconButton color="secondary">
// // // // // //                       <ShoppingBagIcon
// // // // // //                         className="h-6 w-6 flex-shrink-0"
// // // // // //                         aria-hidden="true"
// // // // // //                       />
// // // // // //                     </IconButton>
// // // // // //                     <span className="sr-only">items in cart, view bag</span>
// // // // // //                     <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
// // // // // //                       {cartCount > 0 && (
// // // // // //                         <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
// // // // // //                           {cartCount}
// // // // // //                         </span>
// // // // // //                       )}
// // // // // //                     </span>
// // // // // //                   </Link>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </nav>
// // // // // //       </header>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { Fragment, useEffect, useState } from "react";
// // // // // import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { logout } from "../../Redux/User/authSlice";
// // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogPanel,
// // // // //   Popover,
// // // // //   PopoverButton,
// // // // //   PopoverGroup,
// // // // //   PopoverPanel,
// // // // //   Tab,
// // // // //   TabGroup,
// // // // //   TabList,
// // // // //   TabPanel,
// // // // //   TabPanels,
// // // // //   Transition,
// // // // //   TransitionChild,
// // // // // } from "@headlessui/react";

// // // // // // Import your logo and other necessary assets
// // // // // import { logo } from "../../Assets/Assets";
// // // // // import SearchIcon from "@mui/icons-material/Search";
// // // // // import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// // // // // import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
// // // // // import CloseIcon from "@mui/icons-material/Close";

// // // // // import {
// // // // //   categories1,
// // // // //   categories2,
// // // // //   categories3,
// // // // // } from "../../Admin/Components/Category";

// // // // // const navigation = {
// // // // //   categories: categories1.map((mainCategory) => ({
// // // // //     id: mainCategory,
// // // // //     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
// // // // //     featured: [
// // // // //       {
// // // // //         name: "New Arrivals",
// // // // //         href: `/${mainCategory}/new-arrivals`,
// // // // //         imageSrc:
// // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
// // // // //         imageAlt: "New Arrivals",
// // // // //       },
// // // // //       {
// // // // //         name: "Popular Items",
// // // // //         href: `/${mainCategory}/popular-items`,
// // // // //         imageSrc:
// // // // //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
// // // // //         imageAlt: "Popular Items",
// // // // //       },
// // // // //     ],
// // // // //     sections: categories2[mainCategory].map((subCategory) => ({
// // // // //       id: subCategory,
// // // // //       name: subCategory.charAt(0).toUpperCase() + subCategory.slice(1),
// // // // //       items: categories3[subCategory].map((subSubCategory) => ({
// // // // //         name: subSubCategory.charAt(0).toUpperCase() + subSubCategory.slice(1),
// // // // //         href: `/${mainCategory}/${subCategory}/${subSubCategory}`,
// // // // //       })),
// // // // //     })),
// // // // //   })),
// // // // // };

// // // // // function classNames(...classes) {
// // // // //   return classes.filter(Boolean).join(" ");
// // // // // }

// // // // // export default function Navbar() {
// // // // //   const [open, setOpen] = useState(false);
// // // // //   const [anchorEl, setAnchorEl] = useState(null);
// // // // //   const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
// // // // //   const [anchorElAvatar, setAnchorElAvatar] = useState(null);
// // // // //   const navigate = useNavigate();

// // // // //   const dispatch = useDispatch();
// // // // //   const { user, isAuthenticated } = useSelector((state) => state.auth);
// // // // //   const cartCount = useSelector((state) => state.cart.cartCount);

// // // // //   const handleCategoryClick = (category, section, item, close) => {
// // // // //     // Example: Navigate to the selected item's href
// // // // //     navigate(item.href);
// // // // //     close(); // Close the popover or menu
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     dispatch(logout());
// // // // //     handleCloseAvatar();
// // // // //     // You might also want to redirect the user after logout
// // // // //     // Example: history.push('/signIn');
// // // // //   };

// // // // //   const handleAvatarClick = (event) => {
// // // // //     setAnchorElAvatar(event.currentTarget);
// // // // //     setOpenAvatarMenu(true);
// // // // //   };

// // // // //   const handleCloseAvatar = () => {
// // // // //     setAnchorElAvatar(null);
// // // // //     setOpenAvatarMenu(false);
// // // // //     navigate("/success")
// // // // //   };

// // // // //   const handleClose = () => {
// // // // //     setAnchorEl(null);
// // // // //     setOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-white pb-10">
// // // // //       {/* Mobile menu */}
// // // // //       <Transition show={open}>
// // // // //         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
// // // // //           <TransitionChild
// // // // //             enter="transition-opacity ease-linear duration-300"
// // // // //             enterFrom="opacity-0"
// // // // //             enterTo="opacity-100"
// // // // //             leave="transition-opacity ease-linear duration-300"
// // // // //             leaveFrom="opacity-100"
// // // // //             leaveTo="opacity-0"
// // // // //           >
// // // // //             <div className="fixed inset-0 bg-black bg-opacity-25" />
// // // // //           </TransitionChild>

// // // // //           <div className="fixed inset-0 z-50 flex">
// // // // //             <TransitionChild
// // // // //               enter="transition ease-in-out duration-300 transform"
// // // // //               enterFrom="-translate-x-full"
// // // // //               enterTo="translate-x-0"
// // // // //               leave="transition ease-in-out duration-300 transform"
// // // // //               leaveFrom="translate-x-0"
// // // // //               leaveTo="-translate-x-full"
// // // // //             >
// // // // //               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
// // // // //                 <div className="flex px-4 pb-2 pt-5">
// // // // //                   <button
// // // // //                     type="button"
// // // // //                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// // // // //                     onClick={() => setOpen(false)}
// // // // //                   >
// // // // //                     <span className="absolute -inset-0.5" />
// // // // //                     <span className="sr-only">Close menu</span>
// // // // //                     <IconButton color="secondary">
// // // // //                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
// // // // //                     </IconButton>
// // // // //                   </button>
// // // // //                 </div>

// // // // //                 {/* Links */}
// // // // //                 <TabGroup className="mt-2">
// // // // //                   <div className="border-b border-gray-200">
// // // // //                     <TabList className="-mb-px flex space-x-8 px-4">
// // // // //                       {navigation.categories.map((category) => (
// // // // //                         <Tab
// // // // //                           key={category.name}
// // // // //                           className={({ selected }) =>
// // // // //                             classNames(
// // // // //                               selected
// // // // //                                 ? "border-indigo-600 text-indigo-600"
// // // // //                                 : "border-transparent text-gray-900",
// // // // //                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
// // // // //                             )
// // // // //                           }
// // // // //                         >
// // // // //                           {category.name}
// // // // //                         </Tab>
// // // // //                       ))}
// // // // //                     </TabList>
// // // // //                   </div>
// // // // //                   <TabPanels as={Fragment}>
// // // // //                     {navigation.categories.map((category) => (
// // // // //                       <TabPanel
// // // // //                         key={category.name}
// // // // //                         className="space-y-10 px-4 pb-8 pt-10"
// // // // //                       >
// // // // //                         <div className="grid grid-cols-2 gap-x-4">
// // // // //                           {category.featured.map((item) => (
// // // // //                             <div
// // // // //                               key={item.name}
// // // // //                               className="group relative text-sm"
// // // // //                             >
// // // // //                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // //                                 <img
// // // // //                                   src={item.imageSrc}
// // // // //                                   alt={item.imageAlt}
// // // // //                                   className="object-cover object-center"
// // // // //                                 />
// // // // //                               </div>
// // // // //                               <a
// // // // //                                 href={item.href}
// // // // //                                 className="mt-6 block font-medium text-gray-900"
// // // // //                               >
// // // // //                                 <span
// // // // //                                   className="absolute inset-0 z-10"
// // // // //                                   aria-hidden="true"
// // // // //                                 />
// // // // //                                 {item.name}
// // // // //                               </a>
// // // // //                               <p aria-hidden="true" className="mt-1">
// // // // //                                 Shop now
// // // // //                               </p>
// // // // //                             </div>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                         {category.sections.map((section) => (
// // // // //                           <div key={section.name}>
// // // // //                             <p
// // // // //                               id={`${category.id}-${section.id}-heading-mobile`}
// // // // //                               className="font-medium text-gray-900"
// // // // //                             >
// // // // //                               {section.name}
// // // // //                             </p>
// // // // //                             <ul
// // // // //                               role="list"
// // // // //                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
// // // // //                               className="mt-6 flex flex-col space-y-6"
// // // // //                             >
// // // // //                               {section.items.map((item) => (
// // // // //                                 <li key={item.name} className="flow-root">
// // // // //                                   <a
// // // // //                                     href={item.href}
// // // // //                                     className="-m-2 block p-2 text-gray-500"
// // // // //                                   >
// // // // //                                     {item.name}
// // // // //                                   </a>
// // // // //                                 </li>
// // // // //                               ))}
// // // // //                             </ul>
// // // // //                           </div>
// // // // //                         ))}
// // // // //                       </TabPanel>
// // // // //                     ))}
// // // // //                   </TabPanels>
// // // // //                 </TabGroup>

// // // // //                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// // // // //                   <div className="flow-root">
// // // // //                     <Link
// // // // //                       to={"/signIn"}
// // // // //                       className="-m-2 block p-2 font-medium text-gray-900"
// // // // //                     >
// // // // //                       Sign in
// // // // //                     </Link>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </DialogPanel>
// // // // //             </TransitionChild>
// // // // //           </div>
// // // // //         </Dialog>
// // // // //       </Transition>

// // // // //       <header className="relative bg-white">
// // // // //         <nav
// // // // //           aria-label="Top"
// // // // //           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
// // // // //         >
// // // // //           <div className="border-b border-gray-200">
// // // // //             <div className="flex h-16 items-center">
// // // // //               <button
// // // // //                 type="button"
// // // // //                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
// // // // //                 onClick={() => setOpen(true)}
// // // // //               >
// // // // //                 <span className="absolute -inset-0.5"></span>
// // // // //                     <span className="sr-only">Open menu</span>
// // // // //                     <IconButton color="secondary">
// // // // //                       <HorizontalSplitOutlinedIcon />
// // // // //                     </IconButton>
// // // // //                   </button>

// // // // //                   {/* Logo */}
// // // // //                   <div className="ml-4 flex lg:ml-0">
// // // // //                     <Link to={"/"}>
// // // // //                       <span className="sr-only">Your Company</span>
// // // // //                       <img className="h-8 w-auto" src={logo} alt="logo" />
// // // // //                     </Link>
// // // // //                   </div>

// // // // //                   {/* Flyout menus */}
// // // // //                   <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
// // // // //                     <div className="flex h-full space-x-8">
// // // // //                       {navigation.categories.map((category) => (
// // // // //                         <Popover key={category.name} className="flex">
// // // // //                           {({ open, close }) => (
// // // // //                             <>
// // // // //                               <PopoverButton
// // // // //                                 className={classNames(
// // // // //                                   open
// // // // //                                     ? "border-indigo-600 text-indigo-600"
// // // // //                                     : "border-transparent text-gray-700 hover:text-gray-800",
// // // // //                                   "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
// // // // //                                 )}
// // // // //                               >
// // // // //                                 {category.name}
// // // // //                               </PopoverButton>

// // // // //                               <Transition
// // // // //                                 as={Fragment}
// // // // //                                 enter="transition ease-out duration-200"
// // // // //                                 enterFrom="opacity-0"
// // // // //                                 enterTo="opacity-100"
// // // // //                                 leave="transition ease-in duration-150"
// // // // //                                 leaveFrom="opacity-100"
// // // // //                                 leaveTo="opacity-0"
// // // // //                               >
// // // // //                                 <PopoverPanel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500">
// // // // //                                   {/* Mega menu */}
// // // // //                                   <div
// // // // //                                     className="absolute inset-0 top-1/2 bg-white shadow"
// // // // //                                     aria-hidden="true"
// // // // //                                   />

// // // // //                                   <div className="relative bg-white">
// // // // //                                     <div className="mx-auto max-w-7xl px-8">
// // // // //                                       <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
// // // // //                                         <div className="col-start-2 grid grid-cols-2 gap-x-8">
// // // // //                                           {category.featured.map((item) => (
// // // // //                                             <div
// // // // //                                               key={item.name}
// // // // //                                               className="group relative text-base sm:text-sm"
// // // // //                                             >
// // // // //                                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
// // // // //                                                 <img
// // // // //                                                   src={item.imageSrc}
// // // // //                                                   alt={item.imageAlt}
// // // // //                                                   className="object-cover object-center"
// // // // //                                                 />
// // // // //                                               </div>
// // // // //                                               <Link
// // // // //                                                 to={item.href}
// // // // //                                                 className="mt-6 block font-medium text-gray-900"
// // // // //                                                 onClick={() => close()}
// // // // //                                               >
// // // // //                                                 <span
// // // // //                                                   className="absolute inset-0 z-10"
// // // // //                                                   aria-hidden="true"
// // // // //                                                 />
// // // // //                                                 {item.name}
// // // // //                                               </Link>
// // // // //                                               <p
// // // // //                                                 aria-hidden="true"
// // // // //                                                 className="mt-1"
// // // // //                                               >
// // // // //                                                 Shop now
// // // // //                                               </p>
// // // // //                                             </div>
// // // // //                                           ))}
// // // // //                                         </div>
// // // // //                                         <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
// // // // //                                           {category.sections.map((section) => (
// // // // //                                             <div key={section.name}>
// // // // //                                               <p
// // // // //                                                 id={`${section.name}-heading`}
// // // // //                                                 className="font-medium text-gray-900"
// // // // //                                               >
// // // // //                                                 {section.name}
// // // // //                                               </p>
// // // // //                                               <ul
// // // // //                                                 role="list"
// // // // //                                                 aria-labelledby={`${section.name}-heading`}
// // // // //                                                 className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
// // // // //                                               >
// // // // //                                                 {section.items.map((item) => (
// // // // //                                                   <li
// // // // //                                                     key={item.name}
// // // // //                                                     className="flex"
// // // // //                                                   >
// // // // //                                                     <Link
// // // // //                                                       to={item.href}
// // // // //                                                       className="hover:text-gray-800"
// // // // //                                                       onClick={() =>
// // // // //                                                         handleCategoryClick(
// // // // //                                                           category,
// // // // //                                                           section,
// // // // //                                                           item,
// // // // //                                                           close
// // // // //                                                         )
// // // // //                                                       }
// // // // //                                                     >
// // // // //                                                       {item.name}
// // // // //                                                     </Link>
// // // // //                                                   </li>
// // // // //                                                 ))}
// // // // //                                               </ul>
// // // // //                                             </div>
// // // // //                                           ))}
// // // // //                                         </div>
// // // // //                                       </div>
// // // // //                                     </div>
// // // // //                                   </div>
// // // // //                                 </PopoverPanel>
// // // // //                               </Transition>
// // // // //                             </>
// // // // //                           )}
// // // // //                         </Popover>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </PopoverGroup>

// // // // //                   {/* Avatar and Search/Cart */}
// // // // //                   <div className="ml-auto flex items-center">
// // // // //                     {/* Avatar and User Menu */}
// // // // //                     <div className="flex items-center flex-1 justify-center lg:justify-start">
// // // // //                       {isAuthenticated ? (
// // // // //                         <div className="relative flex items-center">
// // // // //                           <Avatar
// // // // //                             alt={user?.name}
// // // // //                             src={user?.avatarUrl}
// // // // //                             onClick={handleAvatarClick}
// // // // //                             className="cursor-pointer"
// // // // //                           >
// // // // //                             {user?.name ? user.name.charAt(0) : ""}
// // // // //                           </Avatar>
// // // // //                           <Menu
// // // // //                             anchorEl={anchorElAvatar}
// // // // //                             open={openAvatarMenu}
// // // // //                             onClose={handleCloseAvatar}
// // // // //                             anchorOrigin={{
// // // // //                               vertical: "bottom",
// // // // //                               horizontal: "right",
// // // // //                             }}
// // // // //                             transformOrigin={{
// // // // //                               vertical: "top",
// // // // //                               horizontal: "right",
// // // // //                             }}
// // // // //                             getContentAnchorEl={null}
// // // // //                           >
// // // // //                             <MenuItem onClick={handleCloseAvatar}>Profile</MenuItem>
// // // // //                             <MenuItem onClick={handleCloseAvatar}>Orders</MenuItem>
// // // // //                             <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // // // //                           </Menu>
// // // // //                         </div>
// // // // //                       ) : (
// // // // //                         <Link
// // // // //                           to="/signIn"
// // // // //                           className="text-sm font-medium text-gray-700 hover:text-gray-800"
// // // // //                         >
// // // // //                           Sign in
// // // // //                         </Link>
// // // // //                       )}
// // // // //                     </div>

// // // // //                     {/* Search */}
// // // // //                     <div className="flex lg:ml-6">
// // // // //                       <a
// // // // //                         href="#"
// // // // //                         className="p-2 text-gray-400 hover:text-gray-500"
// // // // //                       >
// // // // //                         <span className="sr-only">Search</span>
// // // // //                         <IconButton color="secondary">
// // // // //                           <SearchIcon />
// // // // //                         </IconButton>
// // // // //                       </a>
// // // // //                     </div>

// // // // //                     {/* Cart */}
// // // // //                     <div className="ml-4 flow-root lg:ml-6 relative">
// // // // //                       <Link
// // // // //                         to={"/cart"}
// // // // //                         className="group -m-2 flex items-center p-2 relative"
// // // // //                       >
// // // // //                         <IconButton color="secondary">
// // // // //                           <ShoppingBagIcon
// // // // //                             className="h-6 w-6 flex-shrink-0"
// // // // //                             aria-hidden="true"
// // // // //                           />
// // // // //                         </IconButton>
// // // // //                         <span className="sr-only">
// // // // //                           items in cart, view bag
// // // // //                         </span>
// // // // //                         <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
// // // // //                           {cartCount > 0 && (
// // // // //                             <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
// // // // //                               {cartCount}
// // // // //                             </span>
// // // // //                           )}
// // // // //                         </span>
// // // // //                       </Link>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </nav>
// // // // //           </header>
// // // // //         </div>
// // // // //       );
// // // // //     }

// // // // import React, { Fragment, useState } from "react";
// // // // import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { logout } from "../../Redux/User/authSlice";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import {
// // // //   Dialog,
// // // //   DialogPanel,
// // // //   Popover,
// // // //   PopoverButton,
// // // //   PopoverGroup,
// // // //   Tab,
// // // //   TabGroup,
// // // //   TabList,
// // // //   TabPanel,
// // // //   TabPanels,
// // // //   Transition,
// // // //   TransitionChild,
// // // // } from "@headlessui/react";

// // // // // Import your logo and other necessary assets
// // // // import { logo } from "../../Assets/Assets";
// // // // import SearchIcon from "@mui/icons-material/Search";
// // // // import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// // // // import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
// // // // import CloseIcon from "@mui/icons-material/Close";

// // // // import { categories1 } from "../../Admin/Components/Category";

// // // // const navigation = {
// // // //   categories: categories1.map((mainCategory) => ({
// // // //     id: mainCategory,
// // // //     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
// // // //     href: `/products/${mainCategory.toLowerCase()}`, // Direct link to product page
// // // //   })),
// // // // };

// // // // function classNames(...classes) {
// // // //   return classes.filter(Boolean).join(" ");
// // // // }

// // // // export default function Navbar() {
// // // //   const [open, setOpen] = useState(false);
// // // //   const [anchorEl, setAnchorEl] = useState(null);
// // // //   const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
// // // //   const [anchorElAvatar, setAnchorElAvatar] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   const dispatch = useDispatch();
// // // //   const { user, isAuthenticated } = useSelector((state) => state.auth);
// // // //   const cartCount = useSelector((state) => state.cart.cartCount);

// // // //   const handleCategoryClick = (category, close) => {
// // // //     // Example: Navigate to the selected category's product page
// // // //     navigate(category.href);
// // // //     close(); // Close the popover or menu
// // // //   };

// // // //   const handleLogout = () => {
// // // //     dispatch(logout());
// // // //     handleCloseAvatar();
// // // //   };

// // // //   const handleAvatarClick = (event) => {
// // // //     setAnchorElAvatar(event.currentTarget);
// // // //     setOpenAvatarMenu(true);
// // // //   };

// // // //   const handleCloseAvatar = () => {
// // // //     setAnchorElAvatar(null);
// // // //     setOpenAvatarMenu(false);
// // // //   };

// // // //   const handleClose = () => {
// // // //     setAnchorEl(null);
// // // //     setOpen(false);
// // // //   };

// // // //   return (
// // // //     <div className="bg-white pb-10">
// // // //       {/* Mobile menu */}
// // // //       <Transition show={open}>
// // // //         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
// // // //           <TransitionChild
// // // //             enter="transition-opacity ease-linear duration-300"
// // // //             enterFrom="opacity-0"
// // // //             enterTo="opacity-100"
// // // //             leave="transition-opacity ease-linear duration-300"
// // // //             leaveFrom="opacity-100"
// // // //             leaveTo="opacity-0"
// // // //           >
// // // //             <div className="fixed inset-0 bg-black bg-opacity-25" />
// // // //           </TransitionChild>

// // // //           <div className="fixed inset-0 z-50 flex">
// // // //             <TransitionChild
// // // //               enter="transition ease-in-out duration-300 transform"
// // // //               enterFrom="-translate-x-full"
// // // //               enterTo="translate-x-0"
// // // //               leave="transition ease-in-out duration-300 transform"
// // // //               leaveFrom="translate-x-0"
// // // //               leaveTo="-translate-x-full"
// // // //             >
// // // //               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
// // // //                 <div className="flex px-4 pb-2 pt-5">
// // // //                   <button
// // // //                     type="button"
// // // //                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// // // //                     onClick={() => setOpen(false)}
// // // //                   >
// // // //                     <span className="absolute -inset-0.5" />
// // // //                     <span className="sr-only">Close menu</span>
// // // //                     <IconButton color="secondary">
// // // //                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
// // // //                     </IconButton>
// // // //                   </button>
// // // //                 </div>

// // // //                 {/* Links */}
// // // //                 <TabGroup className="mt-2">
// // // //                   <div className="border-b border-gray-200">
// // // //                     <TabList className="-mb-px flex space-x-8 px-4">
// // // //                       {navigation.categories.map((category) => (
// // // //                         <Tab
// // // //                           key={category.name}
// // // //                           className={({ selected }) =>
// // // //                             classNames(
// // // //                               selected
// // // //                                 ? "border-indigo-600 text-indigo-600"
// // // //                                 : "border-transparent text-gray-900",
// // // //                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
// // // //                             )
// // // //                           }
// // // //                         >
// // // //                           {category.name}
// // // //                         </Tab>
// // // //                       ))}
// // // //                     </TabList>
// // // //                   </div>
// // // //                   <TabPanels as={Fragment}>
// // // //                     {navigation.categories.map((category) => (
// // // //                       <TabPanel
// // // //                         key={category.name}
// // // //                         className="space-y-10 px-4 pb-8 pt-10"
// // // //                       >
// // // //                         {/* No featured images to display */}
// // // //                       </TabPanel>
// // // //                     ))}
// // // //                   </TabPanels>
// // // //                 </TabGroup>

// // // //                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// // // //                   <div className="flow-root">
// // // //                     <Link
// // // //                       to={"/signIn"}
// // // //                       className="-m-2 block p-2 font-medium text-gray-900"
// // // //                     >
// // // //                       Sign in
// // // //                     </Link>
// // // //                   </div>
// // // //                 </div>
// // // //               </DialogPanel>
// // // //             </TransitionChild>
// // // //           </div>
// // // //         </Dialog>
// // // //       </Transition>

// // // //       <header className="relative bg-white">
// // // //         <nav
// // // //           aria-label="Top"
// // // //           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
// // // //         >
// // // //           <div className="border-b border-gray-200">
// // // //             <div className="flex h-16 items-center">
// // // //               <button
// // // //                 type="button"
// // // //                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
// // // //                 onClick={() => setOpen(true)}
// // // //               >
// // // //                 <span className="absolute -inset-0.5"></span>
// // // //                 <span className="sr-only">Open menu</span>
// // // //                 <IconButton color="secondary">
// // // //                   <HorizontalSplitOutlinedIcon />
// // // //                 </IconButton>
// // // //               </button>

// // // //               {/* Logo */}
// // // //               <div className="ml-4 flex lg:ml-0">
// // // //                 <Link to={"/"}>
// // // //                   <span className="sr-only">Your Company</span>
// // // //                   <img className="h-8 w-auto" src={logo} alt="logo" />
// // // //                 </Link>
// // // //               </div>

// // // //               {/* Flyout menus */}
// // // //               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
// // // //                 <div className="flex h-full space-x-8">
// // // //                   {navigation.categories.map((category) => (
// // // //                     <Popover key={category.name} className="flex">
// // // //                       {({ open, close }) => (
// // // //                         <>
// // // //                           <PopoverButton
// // // //                             className={classNames(
// // // //                               open
// // // //                                 ? "border-indigo-600 text-indigo-600"
// // // //                                 : "border-transparent text-gray-700 hover:text-gray-800",
// // // //                               "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
// // // //                             )}
// // // //                             onClick={() => handleCategoryClick(category, close)}
// // // //                           >
// // // //                             {category.name}
// // // //                           </PopoverButton>

// // // //                           {/* No mega menu */}
// // // //                         </>
// // // //                       )}
// // // //                     </Popover>
// // // //                   ))}
// // // //                 </div>
// // // //               </PopoverGroup>

// // // //               {/* Avatar and Search/Cart */}
// // // //               <div className="ml-auto flex items-center">
// // // //                 {/* Avatar and User Menu */}
// // // //                 <div className="flex items-center flex-1 justify-center lg:justify-start">
// // // //                   {isAuthenticated ? (
// // // //                     <div className="relative flex items-center">
// // // //                       <Avatar
// // // //                         alt={user?.name}
// // // //                         src={user?.avatarUrl}
// // // //                         onClick={handleAvatarClick}
// // // //                         className="cursor-pointer"
// // // //                       >
// // // //                         {user?.name ? user.name.charAt(0) : ""}
// // // //                       </Avatar>
// // // //                       <Menu
// // // //                         anchorEl={anchorElAvatar}
// // // //                         open={openAvatarMenu}
// // // //                         onClose={handleCloseAvatar}
// // // //                         anchorOrigin={{
// // // //                           vertical: "bottom",
// // // //                           horizontal: "right",
// // // //                         }}
// // // //                         transformOrigin={{
// // // //                           vertical: "top",
// // // //                           horizontal: "right",
// // // //                         }}
// // // //                         getContentAnchorEl={null}
// // // //                       >
// // // //                         <MenuItem onClick={handleCloseAvatar}>Profile</MenuItem>
// // // //                         <MenuItem onClick={handleCloseAvatar}>Orders</MenuItem>
// // // //                         <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // // //                       </Menu>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <Link
// // // //                       to="/signIn"
// // // //                       className="text-sm font-medium text-gray-700 hover:text-gray-800"
// // // //                     >
// // // //                       Sign in
// // // //                     </Link>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Search */}
// // // //                 <div className="flex lg:ml-6">
// // // //                   <a
// // // //                     href="#"
// // // //                     className="p-2 text-gray-400 hover:text-gray-500"
// // // //                   >
// // // //                     <span className="sr-only">Search</span>
// // // //                     <IconButton color="secondary">
// // // //                       <SearchIcon />
// // // //                     </IconButton>
// // // //                   </a>
// // // //                 </div>

// // // //                 {/* Cart */}
// // // //                 <div className="ml-4 flow-root lg:ml-6 relative">
// // // //                   <Link
// // // //                     to={"/cart"}
// // // //                     className="group -m-2 flex items-center p-2 relative"
// // // //                   >
// // // //                     <IconButton color="secondary">
// // // //                       <ShoppingBagIcon
// // // //                         className="h-6 w-6 flex-shrink-0"
// // // //                         aria-hidden="true"
// // // //                       />
// // // //                     </IconButton>
// // // //                     <span className="sr-only">
// // // //                       items in cart, view bag
// // // //                     </span>
// // // //                     <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
// // // //                       {cartCount > 0 && (
// // // //                         <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
// // // //                           {cartCount}
// // // //                         </span>
// // // //                       )}
// // // //                     </span>
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </nav>
// // // //       </header>
// // // //     </div>
// // // //   );
// // // // }

// // // // Navbar.js
// // // import React, { Fragment, useState } from "react";
// // // import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { logout } from '../../Redux/User/authSlice';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
// // // import { logo } from '../../Assets/Assets';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// // // import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import { categories1 } from '../../Admin/Components/Category';

// // // const navigation = {
// // //   categories: categories1.map(mainCategory => ({
// // //     id: mainCategory,
// // //     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
// // //     href: `/products/${mainCategory.toLowerCase()}`,
// // //   })),
// // // };

// // // function classNames(...classes) {
// // //   return classes.filter(Boolean).join(' ');
// // // }

// // // const Navbar = () => {
// // //   const [open, setOpen] = useState(false);
// // //   const [anchorEl, setAnchorEl] = useState(null);
// // //   const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
// // //   const [anchorElAvatar, setAnchorElAvatar] = useState(null);
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();
// // //   const { user, isAuthenticated } = useSelector(state => state.auth);
// // //   const cartCount = useSelector(state => state.cart.cartCount);

// // //   const handleCategoryClick = (category, close) => {
// // //     navigate(category.href);
// // //     close();
// // //   };

// // //   const handleCategoryClicks = (category) => {
// // //     navigate(category.href);
// // //   };

// // //   const handleLogout = () => {
// // //     dispatch(logout());
// // //     handleCloseAvatar();
// // //   };

// // //   const handleAvatarClick = event => {
// // //     setAnchorElAvatar(event.currentTarget);
// // //     setOpenAvatarMenu(true);
// // //   };

// // //   const handleCloseAvatar = () => {
// // //     setAnchorElAvatar(null);
// // //     setOpenAvatarMenu(false);
// // //   };

// // //   const handleClose = () => {
// // //     setAnchorEl(null);
// // //     setOpen(false);
// // //   };

// // //   const navigateToProfile = () => {
// // //     navigate('/profile');
// // //     handleCloseAvatar();
// // //   };

// // //   const navigateToOrders = () => {
// // //     navigate('/success');
// // //     handleCloseAvatar();
// // //   };

// // //   return (
// // //     <div className="bg-white pb-10">
// // //       {/* Mobile menu */}
// // //       <Transition show={open}>
// // //         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
// // //           <TransitionChild
// // //             enter="transition-opacity ease-linear duration-300"
// // //             enterFrom="opacity-0"
// // //             enterTo="opacity-100"
// // //             leave="transition-opacity ease-linear duration-300"
// // //             leaveFrom="opacity-100"
// // //             leaveTo="opacity-0"
// // //           >
// // //             <div className="fixed inset-0 bg-black bg-opacity-25" />
// // //           </TransitionChild>

// // //           <div className="fixed inset-0 z-50 flex">
// // //             <TransitionChild
// // //               enter="transition ease-in-out duration-300 transform"
// // //               enterFrom="-translate-x-full"
// // //               enterTo="translate-x-0"
// // //               leave="transition ease-in-out duration-300 transform"
// // //               leaveFrom="translate-x-0"
// // //               leaveTo="-translate-x-full"
// // //             >
// // //               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
// // //                 <div className="flex px-4 pb-2 pt-5">
// // //                   <button
// // //                     type="button"
// // //                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// // //                     onClick={() => setOpen(false)}
// // //                   >
// // //                     <span className="absolute -inset-0.5" />
// // //                     <span className="sr-only">Close menu</span>
// // //                     <IconButton color="secondary">
// // //                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
// // //                     </IconButton>
// // //                   </button>
// // //                 </div>

// // //                 {/* Links */}
// // //                 <TabGroup className="mt-2">
// // //                   <div className="border-b border-gray-200">
// // //                     <TabList className="-mb-px flex space-x-8 px-4">
// // //                       {navigation.categories.map((category) => (
// // //                         <Tab
// // //                           key={category.name}
// // //                           className={({ selected }) =>
// // //                             classNames(
// // //                               selected
// // //                                 ? 'border-indigo-600 text-indigo-600'
// // //                                 : 'border-transparent text-gray-900',
// // //                               'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
// // //                             )
// // //                           }
// // //                           onClick={() => handleCategoryClicks(category)}
// // //                         >
// // //                           {category.name}
// // //                         </Tab>
// // //                       ))}
// // //                     </TabList>
// // //                   </div>
// // //                   <TabPanels as={Fragment}>
// // //                     {navigation.categories.map((category) => (
// // //                       <TabPanel
// // //                         key={category.name}
// // //                         className="space-y-10 px-4 pb-8 pt-10"
// // //                       >
// // //                         {/* No featured images to display */}
// // //                       </TabPanel>
// // //                     ))}
// // //                   </TabPanels>
// // //                 </TabGroup>

// // //                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// // //                   <div className="flow-root">
// // //                     <Link
// // //                       to="/signIn"
// // //                       className="-m-2 block p-2 font-medium text-gray-900"
// // //                     >
// // //                       Sign in
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               </DialogPanel>
// // //             </TransitionChild>
// // //           </div>
// // //         </Dialog>
// // //       </Transition>

// // //       <header className="relative bg-white">
// // //         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // //           <div className="border-b border-gray-200">
// // //             <div className="flex h-16 items-center">
// // //               <button
// // //                 type="button"
// // //                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
// // //                 onClick={() => setOpen(true)}
// // //               >
// // //                 <span className="absolute -inset-0.5"></span>
// // //                 <span className="sr-only">Open menu</span>
// // //                 <IconButton color="secondary">
// // //                   <HorizontalSplitOutlinedIcon />
// // //                 </IconButton>
// // //               </button>

// // //               {/* Logo */}
// // //               <div className="ml-4 flex lg:ml-0">
// // //                 <Link to="/">
// // //                   <span className="sr-only">Your Company</span>
// // //                   <img className="h-8 w-auto" src={logo} alt="logo" />
// // //                 </Link>
// // //               </div>

// // //               {/* Flyout menus */}
// // //               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
// // //                 <div className="flex h-full space-x-8">
// // //                   {navigation.categories.map((category) => (
// // //                     <Popover key={category.name} className="flex">
// // //                       {({ open, close }) => (
// // //                         <>
// // //                           <PopoverButton
// // //                             className={classNames(
// // //                               open
// // //                                 ? 'border-indigo-600 text-indigo-600'
// // //                                 : 'border-transparent text-gray-700 hover:text-gray-800',
// // //                               'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
// // //                             )}
// // //                             onClick={() => handleCategoryClick(category, close)}
// // //                           >
// // //                             {category.name}
// // //                           </PopoverButton>

// // //                           {/* No mega menu */}
// // //                         </>
// // //                       )}
// // //                     </Popover>
// // //                   ))}
// // //                 </div>
// // //               </PopoverGroup>

// // //               {/* Avatar and Search/Cart */}
// // //               <div className="ml-auto flex items-center">
// // //                 {/* Avatar and User Menu */}
// // //                 <div className="flex items-center flex-1 justify-center lg:justify-start">
// // //                   {isAuthenticated ? (
// // //                     <div className="relative flex items-center">
// // //                       <Avatar
// // //                         alt={user?.name}
// // //                         src={user?.avatarUrl}
// // //                         onClick={handleAvatarClick}
// // //                         className="cursor-pointer"
// // //                       >
// // //                         {user?.name ? user.name.charAt(0) : ''}
// // //                       </Avatar>
// // //                       <Menu
// // //                         anchorEl={anchorElAvatar}
// // //                         open={openAvatarMenu}
// // //                         onClose={handleCloseAvatar}
// // //                         anchorOrigin={{
// // //                           vertical: 'bottom',
// // //                           horizontal: 'right',
// // //                         }}
// // //                         transformOrigin={{
// // //                           vertical: 'top',
// // //                           horizontal: 'right',
// // //                         }}
// // //                         getContentAnchorEl={null}
// // //                       >
// // //                         <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
// // //                         <MenuItem onClick={navigateToOrders}>Orders</MenuItem>
// // //                         <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // //                       </Menu>
// // //                     </div>
// // //                   ) : (
// // //                     <Link to="/signIn" className="text-sm font-medium text-gray-700 hover:text-gray-800">
// // //                       Sign in
// // //                     </Link>
// // //                   )}
// // //                 </div>

// // //                 {/* Search */}
// // //                 <div className="flex lg:ml-6">
// // //                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
// // //                     <span className="sr-only">Search</span>
// // //                     <IconButton color="secondary">
// // //                       <SearchIcon />
// // //                     </IconButton>
// // //                   </a>
// // //                 </div>

// // //                 {/* Cart */}
// // //                 <div className="ml-4 flow-root lg:ml-6 relative">
// // //                   <Link to="/cart" className="group -m-2 flex items-center p-2 relative">
// // //                     <IconButton color="secondary">
// // //                       <ShoppingBagIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
// // //                     </IconButton>
// // //                     <span className="sr-only">items in cart, view bag</span>
// // //                     <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
// // //                       {cartCount > 0 && (
// // //                         <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
// // //                           {cartCount}
// // //                         </span>
// // //                       )}
// // //                     </span>
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </nav>
// // //       </header>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;






// // Navbar.js
// import React, { Fragment, useState } from "react";
// import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../Redux/User/authSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
// import { logo } from '../../Assets/Assets';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import { categories1 } from '../../Admin/Components/Category';

// const navigation = {
//   categories: categories1.map(mainCategory => ({
//     id: mainCategory,
//     name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
//     href: `/products/${mainCategory.toLowerCase()}`,
//   })),
// };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
//   const [anchorElAvatar, setAnchorElAvatar] = useState(null);
//   const [searchOpen, setSearchOpen] = useState(false); // State for search input visibility
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user, isAuthenticated } = useSelector(state => state.auth);
//   const cartCount = useSelector(state => state.cart.cartCount);

//   const handleCategoryClick = (category, close) => {
//     navigate(category.href);
//     close();
//   };

//   const handleCategoryClicks = (category) => {
//     navigate(category.href);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     handleCloseAvatar();
//   };

//   const handleAvatarClick = event => {
//     setAnchorElAvatar(event.currentTarget);
//     setOpenAvatarMenu(true);
//   };

//   const handleCloseAvatar = () => {
//     setAnchorElAvatar(null);
//     setOpenAvatarMenu(false);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setOpen(false);
//   };

//   const navigateToProfile = () => {
//     navigate('/profile');
//     handleCloseAvatar();
//   };

//   const navigateToOrders = () => {
//     navigate('/success');
//     handleCloseAvatar();
//   };

//   const toggleSearch = () => {
//     setSearchOpen(!searchOpen); // Toggle search input visibility
//   };

//   return (
//     <div className="bg-white pb-10">
//       {/* Mobile menu */}
//       <Transition show={open}>
//         <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
//           <TransitionChild
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </TransitionChild>

//           <div className="fixed inset-0 z-50 flex">
//             <TransitionChild
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex px-4 pb-2 pt-5">
//                   <button
//                     type="button"
//                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Close menu</span>
//                     <IconButton color="secondary">
//                       <CloseIcon className="h-6 w-6" aria-hidden="true" />
//                     </IconButton>
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <TabGroup className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <TabList className="-mb-px flex space-x-8 px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected
//                                 ? 'border-indigo-600 text-indigo-600'
//                                 : 'border-transparent text-gray-900',
//                               'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
//                             )
//                           }
//                           onClick={() => handleCategoryClicks(category)}
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </TabList>
//                   </div>
//                   <TabPanels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <TabPanel
//                         key={category.name}
//                         className="space-y-10 px-4 pb-8 pt-10"
//                       >
//                         {/* No featured images to display */}
//                       </TabPanel>
//                     ))}
//                   </TabPanels>
//                 </TabGroup>

//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   <div className="flow-root">
//                     <Link
//                       to="/signIn"
//                       className="-m-2 block p-2 font-medium text-gray-900"
//                     >
//                       Sign in
//                     </Link>
//                   </div>
//                 </div>
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </Dialog>
//       </Transition>

//       <header className="relative bg-white">
//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="absolute -inset-0.5"></span>
//                 <span className="sr-only">Open menu</span>
//                 <IconButton color="secondary">
//                   <HorizontalSplitOutlinedIcon />
//                 </IconButton>
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to="/">
//                   <span className="sr-only">Your Company</span>
//                   <img className="h-8 w-auto" src={logo} alt="logo" />
//                 </Link>
//               </div>

//               {/* Flyout menus */}
//               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open, close }) => (
//                         <>
//                           <PopoverButton
//                             className={classNames(
//                               open
//                                 ? 'border-indigo-600 text-indigo-600'
//                                 : 'border-transparent text-gray-700 hover:text-gray-800',
//                               'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
//                             )}
//                             onClick={() => handleCategoryClick(category, close)}
//                           >
//                             {category.name}
//                           </PopoverButton>

//                           {/* No mega menu */}
//                         </>
//                       )}
//                     </Popover>
//                   ))}
//                 </div>
//               </PopoverGroup>

//               {/* Avatar and Search/Cart */}
//               <div className="ml-auto flex items-center">
//                 {/* Avatar and User Menu */}
//                 <div className="flex items-center flex-1 justify-center lg:justify-start">
//                   {isAuthenticated ? (
//                     <div className="relative flex items-center">
//                       <Avatar
//                         alt={user?.name}
//                         src={user?.avatarUrl}
//                         onClick={handleAvatarClick}
//                         className="cursor-pointer"
//                       >
//                         {user?.name ? user.name.charAt(0) : ''}
//                       </Avatar>
//                       <Menu
//                         anchorEl={anchorElAvatar}
//                         open={openAvatarMenu}
//                         onClose={handleCloseAvatar}
//                         anchorOrigin={{
//                           vertical: 'bottom',
//                           horizontal: 'right',
//                         }}
//                         transformOrigin={{
//                           vertical: 'top',
//                           horizontal: 'right',
//                         }}
//                         getContentAnchorEl={null}
//                       >
//                         <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
//                         <MenuItem onClick={navigateToOrders}>Orders</MenuItem>
//                         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                       </Menu>
//                     </div>
//                   ) : (
//                     <Link to="/signIn" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                       Sign in
//                     </Link>
//                   )}
//                 </div>

//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   {searchOpen ? (
//                     <div className="relative">
//                       <input
//                         type="text"
//                         placeholder="Search"
//                         className="block w-32 sm:w-40 px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-500"
//                         onClick={toggleSearch}
//                       >
//                         <span className="sr-only">Close search</span>
//                         <IconButton color="secondary">
//                           <CloseIcon />
//                         </IconButton>
//                       </button>
//                     </div>
//                   ) : (
//                     <a href="#" className="p-2 text-gray-400 hover:text-gray-500" onClick={toggleSearch}>
//                       <span className="sr-only">Search</span>
//                       <IconButton color="secondary">
//                         <SearchIcon />
//                       </IconButton>
//                     </a>
//                   )}
//                 </div>

//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6 relative">
//                   <Link to="/cart" className="group -m-2 flex items-center p-2 relative">
//                     <IconButton color="secondary">
//                       <ShoppingBagIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
//                     </IconButton>
//                     <span className="sr-only">items in cart, view bag</span>
//                     <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 relative">
//                       {cartCount > 0 && (
//                         <span className="absolute -top-5 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                           {cartCount}
//                         </span>
//                       )}
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;



import React, { Fragment, useState, useEffect } from "react";
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/User/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, DialogPanel, Popover,PopoverGroup, PopoverButton, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import { logo } from '../../Assets/Assets';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { categories1 } from '../../Admin/Components/Category';

const navigation = {
  categories: categories1.map(mainCategory => ({
    id: mainCategory,
    name: mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1),
    href: `/products/${mainCategory.toLowerCase()}`,
  })),
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
  const [anchorElAvatar, setAnchorElAvatar] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false); // State for search input visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(state => state.auth);
  // const cartCount = useSelector(state => state.cart.cartCount);
  const cartItems = useSelector(state => state.cart.cartItems); 
  const [products, setProducts] = useState([]); 

  
  
  // Calculate cart count based on cartItems array
   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://192.168.2.61:8080/api/p');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryClick = (category, close) => {
    navigate(category.href);
    close();
  };

  const handleCategoryClicks = (category) => {
    navigate(category.href);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseAvatar();
  };

  const handleAvatarClick = event => {
    setAnchorElAvatar(event.currentTarget);
    setOpenAvatarMenu(true);
  };

  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
    setOpenAvatarMenu(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const navigateToProfile = () => {
    navigate('/profile');
    handleCloseAvatar();
  };

  const navigateToOrders = () => {
    navigate('/success');
    handleCloseAvatar();
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen); // Toggle search input visibility
    setSearchTerm(''); // Clear search term when toggling
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term on input change
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`); // Navigate to product detail page
    setSearchOpen(false); // Close search input after navigating
    setSearchTerm(''); // Clear search term after navigation
  };

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    
  );

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-50 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-50 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <IconButton color="secondary">
                      <CloseIcon className="h-6 w-6" aria-hidden="true" />
                    </IconButton>
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                          onClick={() => handleCategoryClicks(category)}
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {/* No featured images to display */}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to="/signIn"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <IconButton color="secondary">
                  <HorizontalSplitOutlinedIcon />
                </IconButton>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src={logo} alt="logo" />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <PopoverButton
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
                            onClick={() => handleCategoryClick(category, close)}
                          >
                            {category.name}
                          </PopoverButton>

                          {/* No mega menu */}
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              {/* Avatar and Search/Cart */}
              <div className="ml-auto flex items-center">
                {/* Avatar and User Menu */}
                <div className="flex items-center flex-1 justify-center lg:justify-start">
                  {isAuthenticated ? (
                    <div className="relative flex items-center">
                      <Avatar
                        alt={user?.name}
                        src={user?.avatarUrl}
                        onClick={handleAvatarClick}
                        className="cursor-pointer"
                      >
                        {user?.name ? user.name.charAt(0) : ''}
                      </Avatar>
                      <Menu
                        anchorEl={anchorElAvatar}
                        open={openAvatarMenu}
                        onClose={handleCloseAvatar}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        elevation={1}
                        getContentAnchorEl={null}
                      >
                        <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
                        <MenuItem onClick={navigateToOrders}>Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Link to="/signIn" className="font-medium text-gray-900 hover:text-gray-800">
                      Sign in
                    </Link>
                  )}
                </div>

                {/* Search */}
                <div className="ml-6 flex lg:ml-0">
                  {searchOpen ? (
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="block w-32 sm:w-40 px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-500"
                        onClick={toggleSearch}
                      >
                        <span className="sr-only">Close search</span>
                        <IconButton color="secondary">
                          <CloseIcon />
                        </IconButton>
                      </button>
                      {/* Display search results */}
                      <div className="mt-1 bg-white shadow-md absolute w-full max-h-60 overflow-y-auto z-10 border border-gray-200 rounded-md">
                        {filteredProducts.map(product => (
                          <Link
                            key={product._id}
                            to={`/product/${product._id}`}
                            onClick={() => handleProductClick(product)}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          >
                            {product.product_name}
                          </Link>
                        ))}
                        {filteredProducts.length === 0 && (
                          <p className="px-4 py-2 text-sm text-gray-500">No products found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500" onClick={toggleSearch}>
                      <span className="sr-only">Search</span>
                      <IconButton color="secondary">
                        <SearchIcon />
                      </IconButton>
                    </a>
                  )}
                </div>

                {/* Cart */}
                <Link to="/cart" className="ml-6">
                  <span className="sr-only">View Cart</span>
                  <IconButton color="secondary">
                    <ShoppingBagIcon />
                  </IconButton>
                  <span className="absolute top-3 right-6 inline-block bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
