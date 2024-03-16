const categoryModel = require("../models/categoryModel");

// CREATE CATEGORY
const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    // validation
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Please provide category title or image",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "category created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Category API",
      error,
    });
  }
};

// GET ALL CATEGORY CONTROLLER
const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "No Categories Found",
      });
    }
    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get All Category API",
      error,
    });
  }
};

// UPDATE CATEGORY
const updateCategoryController = async (req, res) => {
  try {
    const {id} = req.params;
    const {title, imageUrl} = req.body;
    const updatedCategory = await categoryModel.findByIdAndUpdate(
        id,
        { title, imageUrl },
        { new: true}
    );
    if (!updatedCategory) {
        return res.status(500).send({
            success: false,
            message: "No Category Found",
        });
    }
    res.status(200).send({
        success: true,
        message: "Category Updated Successfully",
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in UPDATE API",
      error,
    });
  }
};


// DELETE cATEGORY
const deleteCategoryController = async(req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(500).send({
                success: false,
                messsage: 'Please provide Category ID',
            })
        }
        const category = await categoryModel.findById(id);
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "No Category Found with this id"
            })
        }
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category Deleted Successfully",
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
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
