// // const UserService = require("../Services/User.Service.js");
// // const CartService = require("../Services/Cart.Service.js")
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require("bcryptjs");
// // require('dotenv').config();

// // const UserController = {
// //   signUp: async (req, res) => {
// //     try {
// //       const { name, email, password } = req.body;
// //       const user = await UserService.signUp({ name, email, password });

// //       await CartService.CreateCart(user);
// //       if (user.error) {
// //         return res.status(400).json({ error: "Bad request" });
// //       }
// //       res.status(200).json(user);
// //     } catch (error) {
// //       console.error(error);
// //       return res.status(500).json({ error: "Internal server error" });
// //     }
// //   },

// //   signIn: async (req, res) => {
// //     try {
// //       const { email, password } = req.body;
// //       const user = await UserService.getUserByEmail(email);

// //       if (!user) {
// //         return res.status(404).json({ error: "User not found" });
// //       }

// //       const isPasswordMatch = await bcrypt.compare(password, user.password);

// //       if (!isPasswordMatch) {
// //         return res.status(401).json({ error: "Invalid email or password" });
// //       }

// //       const payload = { id: user._id };
// //       const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
// //         expiresIn: "1h", // Change expiresIn to a longer duration
// //       });
// //       const refreshToken = jwt.sign(payload, process.env.JWT_KEY, {
// //         expiresIn: "10h",
// //       });

// //       // // Save refresh token to database
// //       // const newRefreshToken = new RefreshToken({ token: refreshToken });
// //       // await newRefreshToken.save();

// //       return res.status(200).json({ user, accessToken, refreshToken });
// //     } catch (error) {
// //       console.error(error);
// //       return res.status(500).json({ error: "Internal server error" });
// //     }
// //   },

// //   getUserProfile: async (req, res) => {
// //     try {
// //       const accessToken = req.headers.authorization?.split(" ")[1];

// //       if (!accessToken) {
// //         return res.status(404).send({ error: "Token not founf" })
// //       }
// //       const user = await UserService.getUserByToken(accessToken)
// //       res.status(200).json({ user });
// //     } catch (error) {
// //       return res.status(500).json({ error: "Internal server error" });
// //     }
// //   },

// //   getUsers: async (req, res) => {
// //     try {
// //       const user = await UserService.getUsers();
// //       res.status(200).json({ user });
// //     } catch (error) {
// //       return res.status(500).json({ error: "Internal server error" });
// //     }
// //   },

// //   refreshToken: async (req, res) => {
// //     const refreshToken = req.headers["refresh-token"];

// //     try {
// //       const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
// //       const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_KEY, {
// //         expiresIn: "15s",
// //       });

// //       return res.status(200).json({
// //         message: "Access token refreshed successfully",
// //         accessToken: newAccessToken,
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       return res.status(500).json({ message: "Internal server error" });
// //     }
// //   },
// // };

// // module.exports = UserController;

// const UserService = require('../Services/User.Service');
// const jwt = require('jsonwebtoken');
// const { sendVerificationEmail } = require('../Config/Mailer');

// require('dotenv').config();

// const UserController = {
//   signUp: async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const user = await UserService.signUp({ name, email, password });

//       if (user.error) {
//         return res.status(400).json(user);
//       }

//       res.status(200).json(user);
//     } catch (error) {
//       console.error('UserController.signUp error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   verifyEmail: async (req, res) => {
//     try {
//       const { email, verificationToken } = req.params;
//       const result = await UserService.verifyUser(email, verificationToken);

//       if (result.error) {
//         return res.status(400).json(result);
//       }

//       res.status(200).json({ message: 'Email verified successfully' });
//     } catch (error) {
//       console.error('UserController.verifyEmail error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   signIn: async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await UserService.signIn({ email, password });

//       if (user.error) {
//         return res.status(400).json(user);
//       }

//       const payload = { id: user.id };
//       const accessToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '15s' });
//       const refreshToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1min' });

//       res.status(200).json({ user, accessToken, refreshToken });
//     } catch (error) {
//       console.error('UserController.signIn error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// module.exports = UserController;

// const UserService = require('../Services/User.Service');

// const UserController = {
//   signUp: async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const user = await UserService.signUp({ name, email, password });

//       if (user.error) {
//         return res.status(400).json(user); // Return error response
//       }

//       res.status(200).json(user);
//     } catch (error) {
//       console.error('UserController.signUp error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },

//   signIn: async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await UserService.signIn({ email, password });

//       if (user.error) {
//         return res.status(400).json(user);
//       }

//       res.status(200).json(user);
//     } catch (error) {
//       console.error('UserController.signIn error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// module.exports = UserController;

// controllers/UserController.js

const UserService = require("../Services/Users.Service");
const VerificationToken = require("../Model/VerificationToken.Model");
const User = require("../Model/User.Model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { user, error } = await UserService.signUp({
        name,
        email,
        password,
      });

      if (error) {
        return res.status(400).json({ error });
      }

      res.status(201).json({ message: "User signed up successfully", user });
    } catch (error) {
      console.error("UserController.signUp error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  verifyMail: async (req, res) => {
    try {
      const { userId, token } = req.params;

      // Log to verify params are received correctly
      console.log("Received userId:", userId);
      console.log("Received token:", token);

      if (!userId || !token) {
        throw new Error("Invalid verification parameters");
      }

      // Find verification token
      const verificationToken = await VerificationToken.findOne({
        userId: userId,
        verificationToken: token,
      });

      if (!verificationToken) {
        throw new Error("Invalid or expired verification token");
      }

      // Check if the token is expired (if your token schema includes an expiresAt field)
      if (
        verificationToken.expiresAt &&
        verificationToken.expiresAt < Date.now()
      ) {
        throw new Error("Verification token has expired");
      }

      // Update user to verified (assuming User model has a 'verified' field)
      const user = await User.findByIdAndUpdate(
        userId,
        { verified: true },
        { new: true }              
      );

      if (!user) {
        throw new Error("User not found");
      }

      // Optionally, remove verification token from database after successful verification
      // await verificationToken.remove();

      // Respond with success message and redirect to sign-in page
      res.redirect("http://192.168.2.61:3000/signIn"); // Adjust path as per your frontend routes
    } catch (error) {
      console.error("UserController.verifyMail error:", error);
      res.status(400).json({ error: error.message });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { user, error } = await UserService.signIn({ email, password });

      if (error) {
        return res.status(401).json({ error });
      }

      // Check if user is verified
      if (!user.verified) {
        return res.status(401).json({
          error: "User is not verified. Please verify your email to sign in.",
        });
      }
      if (user) {
        const payload = {
          id: user.id,
        };

        const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
          expiresIn: "15s",
        });
        console.log(accessToken);
        const refreshToken = jwt.sign(payload, process.env.JWT_KEY, {
          expiresIn: "1min",
        });

        res.status(200).json({ user, accessToken, refreshToken });
      } else {
        return sendError(res, "User not found");
      }
    } catch (error) {
      console.error("UserController.signIn error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.headers["refresh-token"];

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
      const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_KEY, {
        expiresIn: "15s",
      });

      return res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken: newAccessToken,
      });
    } catch (error) {
      return sendError(res, "Internal server error");
      // return res.status(500).json({ message: "Internal server error" });
    }
  },


  getUserProfile: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateUserProfile: async (req, res) => {
    const userId = req.params.id;
    const updatedFields = req.body;
    try {
      const updatedUser = await UserService.updateUserById(userId, updatedFields);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },


getAllUser : async (req, res) => {
  try {
    const user = await UserService.getAllUser();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: "Failed to fetch user" });
    return sendError(res, "Failed to fetch user");
  }
},

};

module.exports = UserController;
