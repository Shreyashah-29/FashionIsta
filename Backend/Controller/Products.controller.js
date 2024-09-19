const ProductService = require("../Services/Products.Service");

const ProductController = {
  addProduct: async (req, res) => {
    try {
      const productData = req.body;
      const product_img = req.file;
      const newProduct = await ProductService.addProduct(
        productData,
        product_img
      );
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add product" });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const filters = req.query; // Assuming filters are passed as query parameters
      const products = await ProductService.getAllProducts(filters);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // getAllProducts : async (req, res) => {
  //   try {
  //     const { category, color, size, minPrice, maxPrice, discount, sort, page, stock } = req.query;

  //     // Ensure that 'category' is defined and handle accordingly
  //     if (!category) {
  //       return res.status(400).json({ error: "Category parameter is required" });
  //     }

  //     // Call a service method to fetch products based on the provided parameters
  //     const products = await ProductService.getAllProducts({
  //       category,
  //       color,
  //       size,
  //       minPrice,
  //       maxPrice,
  //       discount,
  //       sort,
  //       page,
  //       stock,
  //     });

  //     return res.status(200).json(products);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     return res.status(500).json({ error: "Internal Server Error" });
  //   }
  // },

  getProductById: async (req, res) => {
    const productId = req.params.id;

    try {
      const product = await ProductService.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Server error" });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const productData = req.body;
      if (req.file) {
        productData.product_img = req.file.filename;
      }
      const updatedProduct = await ProductService.updateProduct(
        id,
        productData
      );
      if (updatedProduct) {
        return res.status(200).json(updatedProduct);
      }
      res.status(404).json({ error: "Product not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update product" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.deleteProduct(id);
      if (deletedProduct) {
        return res.status(200).json(deletedProduct);
      }
      res.status(404).json({ error: "Product not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete product" });
    }
  },

  product: async (req, res) => {
    try {
      const blogs = await ProductService.products();
      res.status(200).json(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  },

  searchProducts: async (req, res) => {
    try {
      const { query } = req.query;
      const products = await ProductService.searchProducts(query);
      res.status(200).json(products);
    } catch (error) {
      console.error('Error searching products:', error);
      res.status(500).json({ message: 'Error searching products' });
    }
  },
  
};

module.exports = ProductController;
