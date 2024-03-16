const restaurentModel = require("../models/restaurentModel");

// CREATE RESTAURANTS
const createRestaurentController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please Provide title and address",
      });
    }
    const newRestaurent = new restaurentModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    await newRestaurent.save();

    res.status(201).send({
      success: true,
      message: "New Restaurent Created Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In create Restaurant API",
      error,
    });
  }
};

// GET ALL RESTAURENTS
const getAllRestaurentController = async (req, res) => {
  try {
    const restaurents = await restaurentModel.find({});
    if (!restaurents) {
      return res.status(404).send({
        success: false,
        message: "No Restaurents Availiable",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: restaurents.length,
      restaurents,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get ALL Restaurant API",
      error,
    });
  }
};

// GET RESTAURENT BY ID
const getRestaurentByIdController = async(req, res) => {
    try {
        const restaurentId = req.params.id;
        if (!restaurentId) {
            return res.status(404).send({
                success: false,
                message: "Please Provide Retaurent ID"
            });
        }
        // find restaurent
        const  restaurent = await restaurentModel.findById(restaurentId);
        if (!restaurent) {
            return res.status(404).send({
                success: false,
                message: 'No Restaurent Found'
            });
        }
        res.status(200).send({
            success: true,
            restaurent,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Get Restaurents by id API",
            error
        })
    }
};


//DELETE RESTAURENT
const deleteRestaurentController = async(req, res) => {
    try {
        const restaurentId = req.params.id;
        if (!restaurentId) {
            return res.status(404).send({
                success: false,
                message: "No Restaurent Found OR Provide Restaurent ID",
            });
        }
        await restaurentModel.findByIdAndDelete(restaurentId);
        res.status(200).send({
            success: true,
            message: "Restaurent Deleted Succesfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in DELETE API",
            error
        })
    }
};

module.exports = {
  createRestaurentController,
  getAllRestaurentController,
  getRestaurentByIdController,
  deleteRestaurentController,
};
