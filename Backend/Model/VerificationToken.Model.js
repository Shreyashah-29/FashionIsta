const mongoose = require("mongoose");

const verificationTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  verificationToken: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    // Add an expiration time if needed
    // expires: '1h' // Example: token expires after 1 hour
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const VerificationToken = mongoose.model("VerificationToken", verificationTokenSchema);
module.exports = VerificationToken;
