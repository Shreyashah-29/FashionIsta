const Product = require("../Model/Products.modal");

const ProductService = {

  addProduct: async (productData, file) => {
    try {
      const newProduct = new Product({
        product_name: productData.product_name,
        product_brand: productData.product_brand,
        product_description:productData.product_description,
        product_price: productData.product_price,
        product_size: productData.product_size, // expects an array of sizes
        product_color: productData.product_color, // expects an array of colors
        product_discount_price: productData.product_discount_price,
        product_discount_percent: productData.product_discount_percent,
        product_category1: productData.product_category1,
        product_category2: productData.product_category2,
        product_category3: productData.product_category3,
        product_img: file.filename,
      });

      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getAllProducts: async (filters) => {
    try {
      let query = {};
  
      // Apply category filter if present
      if (filters.category) {
        query.product_category3 = filters.category;
      }
  
      // Apply subcategory filter if present
      if (filters.subcategory) {
        query.product_category2 = filters.subcategory;
      }
  
      // Apply color filter if present
      if (filters.color && filters.color.length > 0) {
        query.product_color = { $in: filters.color.map(color => color.toLowerCase()) };
      }
  
      // Apply size filter if present (case insensitive)
      if (filters.size && filters.size.length > 0) {
        query.product_size = { $in: filters.size.map(size => new RegExp(size, 'i')) };
      }
  
      const products = await Product.find(query).lean().exec();
  
      return products;
    } catch (error) {
      throw new Error(`Error while fetching products: ${error.message}`);
    }
  },
  




  // getAllProducts: async ({ category, color, size }) => {
  //   try {
  //     // Prepare the filters object
  //     const filters = {};

  //     // Apply category filter if category is provided
  //     if (category) {
  //       filters.product_category3 = category; // Assuming product_category3 is the correct field
  //     }

  //     // Apply color filter if color array is provided and not empty
  //     if (color && color.length) {
  //       filters.product_color = { $in: color };
  //     }

  //     // Apply size filter if size array is provided and not empty
  //     if (size && size.length) {
  //       filters.product_size = { $in: size };
  //     }

  //     // Fetch products based on the constructed filters
  //     const products = await Product.find(filters).lean().exec(); // Using lean() for better performance if you don't need Mongoose documents

  //     return products;
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     throw new Error('Error fetching products: ' + error.message);
  //   }
  // },




  getProductById: async (productId) => {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      console.error('Error fetching product by id:', error);
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
        new: true,
      });
      return updatedProduct;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return deletedProduct;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  products: async () => {
    try {
      const fetchedAllProducts = await Product.find().lean().exec();
      return fetchedAllProducts;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  },
  
  searchProducts: async (query) => {
    try {
      const products = await Product.find({
        product_name: { $regex: query, $options: 'i' } // Case-insensitive search for product_name
      }).exec();
      return products;
    } catch (error) {
      console.error('Error searching products:', error);
      throw new Error('Error searching products');
    }
  },

  // const { query } = req.query;
// 


}; 

module.exports = ProductService;