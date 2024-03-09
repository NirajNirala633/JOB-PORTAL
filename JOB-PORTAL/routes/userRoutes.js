import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { updateUserConroller } from '../controllers/userController.js';

// router object
const router = express.Router()

// routes
// GET USERS || GET

// UPDATE USER || PUT
router.put('/update-user', userAuth, updateUserConroller)

export default router;