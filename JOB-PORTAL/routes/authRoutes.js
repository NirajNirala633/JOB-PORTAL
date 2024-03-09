import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

// ip limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max:100, //Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, //Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, //Disable the `X-RateLimit-*` headers
})

// router object
const router = express.Router();

// routes

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - lastName
 *        - email
 *        - password
 *        - location
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of user collection
 *        name:
 *          type: string
 *          description: User Name
 *        lastName:
 *          type: string
 *          description: User Last Name
 *        email:
 *          type: string
 *          description: User Email Address
 *        password:
 *          type: string
 *          description: User Password should be greater than 6 characters
 *        location:
 *          type: string
 *          description: User Location City or Country
 *      example:
 *        id: HJVJHFHDDDT
 *        name: John
 *        lastName: Doe
 *        email: johndoe@gmail.com
 *        password: test@123
 *        location: Mumbai
 */


/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: authentication apis
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: register new user
 *     tags: [Auth]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schemas:
 *                $ref: '#/components/schemas/User'
 *     500:
 *       description: internal server error
 */


// REGISTER || POST
router.post("/register",limiter, registerController);


/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: login page
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: login succesfull
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *    500:
 *      description: something went wrong
 */


// LOGIN || POST
router.post("/login",limiter, loginController);

export default router;
