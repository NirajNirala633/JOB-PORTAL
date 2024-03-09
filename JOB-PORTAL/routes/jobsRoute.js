import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJobController,
  deleteJobController,
  getAllJobsController,
  jobStatsController,
  updateJobController,
} from "../controllers/jobsController.js";


const router = express.Router();

// routes

/**
 * @swagger
 * components:
 *  schemas:
 *    Jobs:
 *      type: object
 *      required:
 *        - company
 *        - position
 *        - workLocation
 *      properties:
 *        company:
 *          type: string
 *          description: Name of the company
 *        position:
 *          type: string
 *          description: User Position
 *        workLocation:
 *          type: string
 *          description: User Location
 *      example:
 *        comapany: Intel
 *        position: Backend Developer
 *        workLocation: Mumbai
 */

// CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);

//GET JOBS || GET
router.get("/get-job", userAuth, getAllJobsController);

// UPDATE JOBS || PATCH
router.patch("/update-job/:id", userAuth, updateJobController);

// DELETE JOBS || DELETE
router.delete("/delete-job/:id", userAuth, deleteJobController);

// JOBS STATS FILTER || GET
router.get("/job-stats", userAuth, jobStatsController);

export default router;
