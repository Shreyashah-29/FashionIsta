const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/Products.controller');
const upload = require("../Config/Multer.js")

router.post('/add', upload.single('product_img'), ProductController.addProduct);
router.get('/list', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/products/:id', upload.single('product_img'), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/', ProductController.product);
router.get('/search', ProductController.searchProducts);





module.exports = router; 



// router.get('/list', async (req, res) => {
//     try {
//       const filters = {
//         color: req.query.color ? req.query.color.split(',') : [],
//         size: req.query.size ? req.query.size.split(',') : [],
//         discount: req.query.discount ? req.query.discount.split(',') : [],
//       };
//       const products = await ProductService.getAllProducts(filters);
//       res.json(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });