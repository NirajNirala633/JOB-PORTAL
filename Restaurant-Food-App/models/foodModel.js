const mongoose = require("mongoose");

// schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title is required"],
    },
    description: {
      type: String,
      required: [true, "Food Description is required"],
    },
    price: {
      type: String,
      required: [true, "Food Price is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Feditable-photoshop-food-logo-design-graphicsfamily--580823683203858464%2F&psig=AOvVaw2hyim1p_8NVLcDQ3yRaOcs&ust=1710432651771000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiUvKfQ8YQDFQAAAAAdAAAAABAE",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },

    code: {
      type: String,
    },
    isAvailiable: {
      type: Boolean,
      default: true,
    },
    restaurent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurent",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
  },
  { timestamps: true }
);

// exports
module.exports = mongoose.model("Food", foodSchema);
