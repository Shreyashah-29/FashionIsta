// Users.Controller.js

// Import necessary modules
const express = require("express");
const userController = require("../Controller/Users.Controller");
const router = express.Router();

// Routes for user operations
router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.get("/verify/:userId/:token", userController.verifyMail);
router.get("/:id", userController.getUserProfile);
router.put("/:id", userController.updateUserProfile);
router.get("/", userController.getAllUser);

module.exports = router;

// router.get("/profile", userController.getUserProfile);
// router.get("/", userController.getUsers);
// router.post("/refreshToken", userController.refreshToken);
// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/user.controller');
// const { auth } = require('../middleware/auth.middleware');

// // Public routes
// router.post('/signup', UserController.signUp);
// router.get('/verify/:email/:verificationToken', UserController.verifyEmail);

// // Private route example (requires authentication)
// router.post('/signin', UserController.signIn);
// router.get('/private', auth, (req, res) => {
//   res.json({ message: 'This is a private route', user: req.payload });
// });

// module.exports = router;
