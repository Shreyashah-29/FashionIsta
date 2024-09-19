const express = require("express");
// const upload = require("../Config/Multer.js");
const ProductController = require("../Controller/Product.Controller.js");
const auth = require("../Config/Auth.js").auth;
const router = express.Router();
const Product = require("../Model/Products.modal.js")


router.post("/addProducts",auth, ProductController.AddMultipleProducts);
router.post("/",auth, ProductController.CreateProduct);
router.delete("/:id", auth, ProductController.DeleteProduct);
router.put("/:id", auth, ProductController.UpdateProduct);
router.get("/", auth, ProductController.GetAllProduct);
router.get("/:id", auth, ProductController.GetProduct);


// router.get('/:category1/:category2/:category3', async (req, res) => {
//     const { category1, category2, category3 } = req.params;
//     try {
//       const products = await Product.find({ 
//         product_category1: category1, 
//         product_category2: category2, 
//         product_category3: category3 
//       });
//       res.json(products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });

//   router.get('/', async (req, res) => {
//     const { category } = req.query;
//     try {
//       // Find products matching any of the three category fields
//       const products = await Product.find({
//         $or: [
//           { product_category1: category },
//           { product_category2: category },
//           { product_category3: category }
//         ]
//       });
//       res.json(products);
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });


// router.get('/products', async (req, res) => {
//     const { category } = req.query;
  
//     try {
//       const products = await Product.find({ product_category1 : category });
//       res.json(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

module.exports = router;
