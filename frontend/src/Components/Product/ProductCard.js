// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

// const cardStyle = {
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
// };

// const mediaStyle = {
//   paddingTop: "133.25%", // 16:9 aspect ratio for CardMedia
// };

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <Grid container spacing={2} justifyContent="center">
//       <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
//         <Card style={cardStyle} onClick={() => handleCardClick(product._id)}>
//           {product.product_img ? (
//             <CardMedia
//               style={mediaStyle}
//               image={`http://192.168.2.61:8080/uploads/${product.product_img}`}
//               title={product.product_name}
//             />
//           ) : (
//             <CardMedia style={mediaStyle}>
//               <Typography variant="body2" color="textSecondary">
//                 No Image Available
//               </Typography>
//             </CardMedia>
//           )}
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {product.product_name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {product.product_brand}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               ${product.product_price}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default ProductCard;







import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
      <Card
        className="cursor-pointer"
        onClick={() => handleCardClick(product._id)}
      >
        {product.product_img ? (
          <CardMedia
            component="img"
            alt={product.product_name}
            height="250"
            image={`http://192.168.2.61:8080/uploads/${product.product_img}`}
          />
        ) : (
          <CardMedia
            component="img"
            alt="No Image Available"
            height="250"
            src="/no-image-available.jpg" // Replace with your own no-image placeholder
          />
        )}
        <CardContent className="p-4">
          <Typography variant="h6" component="div" className="mb-2">
            {product.product_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mb-1">
            {product.product_brand}
          </Typography>
          <Typography variant="body1" className="text-blue-600 font-bold">
            ${product.product_price.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
