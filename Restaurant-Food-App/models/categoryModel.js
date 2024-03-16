const mongoose = require("mongoose");

// schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Feditable-photoshop-food-logo-design-graphicsfamily--580823683203858464%2F&psig=AOvVaw2hyim1p_8NVLcDQ3yRaOcs&ust=1710432651771000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiUvKfQ8YQDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Category", categorySchema);
