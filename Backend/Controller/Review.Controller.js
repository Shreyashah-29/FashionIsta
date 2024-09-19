const ReviewService = require("../Services/Review.Service");

const CreateReview = async (req, res) => {
  // const user = req.user; // Assuming user is authenticated and available in request
  const { productId, review } = req.body;

  try {
    // Call CreateReview function from ReviewService
  const createdReview = await ReviewService.CreateReview({ productId, review });
    return res.status(201).json(createdReview); // Return the created review object
  } catch (error) {
    console.error('Error creating review:', error);
    return res.status(500).json({ error: error.message });
  }
};

const GetAllReview = async (req, res) => {
  const productId = req.params.productId;

  try {
    // Call GetAllReview function from ReviewService
    const allReviews = await ReviewService.GetAllReview(productId);
    return res.status(200).json(allReviews); // Return all reviews for the product
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  CreateReview,
  GetAllReview
};
