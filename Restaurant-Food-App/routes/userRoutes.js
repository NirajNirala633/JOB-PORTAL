const express = require("express");
const {
  getUserController,
  updateUserController,
  resetPasswordController,
  updatePasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);

// PASSWORD UPDATE
router.post("/updatePassword", authMiddleware, updatePasswordController);

// DELETE PROFILE ACCOUNT
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;
