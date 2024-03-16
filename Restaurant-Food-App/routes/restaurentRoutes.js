const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurentController,
  getAllRestaurentController,
  getRestaurentByIdController,
  deleteRestaurentController,
} = require("../controllers/restaurantController");

const router = express.Router();

// routes
// CREATE RESTAURENT || POST
router.post("/create", authMiddleware, createRestaurentController);

// GET ALL RESTAURANTS || GET
router.get("/getAll", getAllRestaurentController);

// GET RESTAURENT BY ID
router.get("/get/:id", getRestaurentByIdController);

// GET RESTAURENT
router.delete("/delete/:id", authMiddleware, deleteRestaurentController);

module.exports = router;
