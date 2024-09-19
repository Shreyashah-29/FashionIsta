// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { Button } from "@mui/material";

// const HomeSectionCarousel = ({ SectionName }) => {
//   const responsive = {
//     0: { items: 2 },
//     568: { items: 3 },
//     1024: { items: 5 },
//   };

//   const [products, setProducts] = useState([]);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://192.168.2.61:8080/api/p/list?product_category1=${SectionName.toLowerCase()}`
//         );

//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [SectionName]);

//   const slidePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.slidePrev();
//     }
//   };

//   const slideNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.slideNext();
//     }
//   };

//   // Filter products to match SectionName
//   const filteredProducts = products.filter(
//     (product) =>
//       product.product_category1.toLowerCase() === SectionName.toLowerCase()
//   );

//   const items = filteredProducts.map((product, index) => (
//     <HomeSectionCard key={index} product={product} />
//   ));

//   return (
//     <div className="relative px-4 lg:px-8">
//       <h2 className="text-2xl font-extrabold py-5">{SectionName}</h2>
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           autoPlay // Enable autoplay
//           autoPlayInterval={3000} // Autoplay interval in milliseconds (optional)
//           infinite // Enable infinite loop
//           mouseTracking // Enable mouse drag tracking (optional)
//           ref={carouselRef} // Assign the ref to control the carousel
//         />

//         {/* Previous Button */}
//         <Button
//           className="z-80"
//           variant="content"
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "-1rem",
//             transform: "translateY(-50%)",
//           }}
//           color="black"
//           aria-label="prev"
//           onClick={slidePrev}
//         >
//           <ArrowBackIosNewIcon />
//         </Button>

//         {/* Next Button */}
//         <Button
//           className="z-80"
//           variant="content"
//           sx={{
//             position: "absolute",
//             top: "50%",
//             right: "-1rem",
//             transform: "translateY(-50%)",
//           }}
//           color="black"
//           aria-label="next"
//           onClick={slideNext}
//         >
//           <ArrowForwardIosIcon />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ SectionName }) => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.2.61:8080/api/p/?product_category1=${SectionName.toLowerCase()}`
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [SectionName]);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  // Filter products to match SectionName
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.product_category1.toLowerCase() === SectionName.toLowerCase()
      )
    : [];

  const items = filteredProducts.map((product, index) => (
    <HomeSectionCard key={index} product={product} />
  ));

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold py-5">{SectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          autoPlay // Enable autoplay
          autoPlayInterval={3000} // Autoplay interval in milliseconds (optional)
          infinite // Enable infinite loop
          mouseTracking // Enable mouse drag tracking (optional)
          ref={carouselRef} // Assign the ref to control the carousel
        />

        {/* Previous Button */}
        <Button
          className="z-80"
          variant="content"
          sx={{
            position: "absolute",
            top: "50%",
            left: "-1rem",
            transform: "translateY(-50%)",
          }}
          color="black"
          aria-label="prev"
          onClick={slidePrev}
        >
          <ArrowBackIosNewIcon />
        </Button>

        {/* Next Button */}
        <Button
          className="z-80"
          variant="content"
          sx={{
            position: "absolute",
            top: "50%",
            right: "-1rem",
            transform: "translateY(-50%)",
          }}
          color="black"
          aria-label="next"
          onClick={slideNext}
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
