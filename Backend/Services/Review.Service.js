const Review = require("../Model/Review.Model");
const productService = require("../Services/Products.Service");

const CreateReview = async (data) => {
  try {
    const { productId, review } = data;

    // Step 1: Fetch the product by productId
    const product = await productService.getProductById(productId);
    console.log(product);
    // Step 2: Check if product exists
    if (!product) {
      throw new Error("Product not found");
    }

    // Step 3: Create a new review object
    const newReview = new Review({
      // user: user._id,
      product: product._id,
      review: review,
      createdAt: new Date(),
    });

    // Step 4: Save the review
    const savedReview = await newReview.save();

    // Optionally, update the product in some way
    // Example: await productService.updateProduct(productId, { $addToSet: { reviews: savedReview._id } });

    return savedReview;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};

const GetAllReview = async (productId) => {
  try {
    // Fetch all reviews for a specific product
    const reviews = await Review.find({ product: productId }).populate("user");
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

module.exports = { CreateReview, GetAllReview };
