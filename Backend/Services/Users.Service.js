// // userService.js
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const User = require("../Model/User.Model.js");
// const RefreshToken = require("../Model/RefreshToken.Model.js")

// // Function to hash password
// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// // Function to generate access token
// const generateAccessToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY, {
//     expiresIn: "15m",
//   });
// };

// // Function to generate refresh token
// const generateRefreshToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_KEY);
// };

// // Function to create new user in the database
// exports.signUp = async (userData) => {
//   try {
//     const { name, email, password, profile } = userData;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return { error: "User already exists with this email   : ", email };
//     }

//     const hashedPassword = await hashPassword(password);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       profile,
//     });
//     console.log(newUser);
//     await newUser.save();
//     return newUser;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Function to authenticate user and generate access token
// exports.signIn = async (email, password) => {
//   try {
//     const user = await User.findOne({ email });
//     if (!user) throw new Error("Invalid email or password");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error("Invalid email or password");

//     const accessToken = generateAccessToken(user._id);
//     const refreshToken = generateRefreshToken(user._id);

//     // Save refresh token to database
//     const newRefreshToken = new RefreshToken({ token: refreshToken });
//     await newRefreshToken.save();

//     return { user, accessToken, refreshToken };
//   } catch (error) {
//     throw error;
//   }
// };

// exports.getUserById = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     // .populate("address");
//     if (!user) throw new Error("User not found");
//     return user;
//   } catch (error) {
//     throw error;
//   }
// }

// exports.getUserByEmail = async (email) => {
//   try {
//     const user = await User.findOne({ email });
//     if (!user) throw new Error({message : "User not found"});
//     return user;
//   } catch (error) {
//     throw error;
//   }
// }

// exports.getUsers = async () => {
//   try {
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     throw error;
//   }
// }

// exports.getUserByToken = async (token) => {
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     const userId = decoded.userId;

//     const user = await getUserById(userId);
//     if (!user) throw new Error("User not found");
//     console.log(user);
//     return user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // Function to verify refresh token and generate new access token
// exports.refreshToken = async (refreshToken) => {
//   try {
//     const existingToken = await refreshToken.findOne({ token: refreshToken });
//     if (!existingToken) throw new Error("Invalid refresh token");

//     const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
//     const userId = decoded.userId;

//     const accessToken = generateAccessToken(userId);

//     return accessToken;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const users = require("../Model/User.Model");

// const UserService = {
//   signUp: async (user) => {
//     try {
//       const existingUser = await users.findOne({ email: user.email });
//       if (existingUser) {
//         return { error: "User already exists with this email" };
//       }
//       const newData = new users({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//         // role: user.role,
//       });
//       const saveData = await newData.save();
//       console.log(saveData);
//       return saveData;
//     } catch (error) {
//       return { error: "Internal Server Error" };
//     }
//   },

//   signIn: async (user) => {
//     try {
//       const existingUser = await users.findOne({ email: user.email, password: user.password });
//       // return (existingUser.email, existingUser.password);
//       return existingUser;
//     } catch (error) {
//       return { error: "Internal Server Error" };
//     }
//   },
// };

// module.exports = UserService;

const User = require("../Model/User.Model");
const bcrypt = require("bcryptjs");
const VerificationToken = require("../Model/VerificationToken.Model");
const sendMail = require("../Config/Mailer");

const UserService = {
  signUp: async ({ name, email, password }) => {
    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return { error: "User already exists with this email" };
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Generate verification token
      const verificationToken =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      // Create new user
      user = new User({
        name,
        email,
        password: hashedPassword,
        verificationToken: verificationToken,
      });

      // Save user to database
      user = await user.save();

      // Save verification token to database
      const newVerificationToken = new VerificationToken({
        userId: user._id,
        verificationToken: verificationToken,
      });
      await newVerificationToken.save();

      // Send verification email with link
      const verificationUrl = `http://192.168.2.61:8080/api/users/verify/${user._id}/${verificationToken}`;
      await sendMail(user.email, "Verify your email address", verificationUrl);

      // For testing purposes, log the URL
      console.log("Verification URL:", verificationUrl);

      // Return the user object without sensitive information
      return {
        user: { ...user._doc, password: undefined },
        verificationToken: newVerificationToken,
      };
    } catch (error) {
      console.error("UserService.signUp error:", error);
      throw new Error("Internal Server Error");
    }
  },

  signIn: async ({ email, password }) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return { error: "User not found" };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { error: "Invalid password" };
      }

      // Return the user object without sensitive information
      return { user: { ...user._doc, password: undefined } };
    } catch (error) {
      console.error("UserService.signIn error:", error);
      throw new Error("Internal Server Error");
    }
  },


  getUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error("Could not find user");
    }
  },

  updateUserById: async (userId, updatedFields) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    } catch (error) {
      throw new Error("Could not update user");
    }
  },



getAllUser : async () => {
  try {
    const fetchedUsers = await User.find().lean().exec();
    return fetchedUsers;
  } catch (error) {
    console.error(error);
    throw error; 
  }
},

};

module.exports = UserService;
