// API Documentation
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from 'swagger-jsdoc';

// packages imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from 'morgan';

// security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

import colors from "colors";
import { connect } from "mongoose";


// files imports
import connectDB from "./config/db.js";


// routes import
import testRoutes from './routes/testRoute.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from "./middlewares/errorMiddleware.js";
import jobsRoutes from './routes/jobsRoute.js';
import userRoutes from './routes/userRoutes.js';



// Dot ENV Config
dotenv.configDotenv()

// mongodb connection
connectDB();

// Swagger API Config
// Swagger API Options
const options = {
    definition: {
        openapi: "3.0.0",
    info:{
        title:'Job Portal Application',
        description:'Node Expressjs Job Portal Application'
    },
    servers: [
        {
            url: "http://localhost:8080"
        }
    ]
    },
    apis:['./routes/*.js'],
};

const spec = swaggerDoc(options)


// rest object
const app = express();

// middlewares
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoutes);

// homeroute root
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(spec));


// Validation Midleware
app.use(errorMiddleware);



// port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Node Server is running in ${process.env.DEV_MODE} Mode on port no ${PORT}`.bgBlue.white)
})