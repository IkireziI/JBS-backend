import express from 'express';
import userRouter from './userRoute.js';
import jobRouter from './jobRoute.js';

const allRoutes = express.Router();

// Combine user and job routes
allRoutes.use('/users', userRouter);
allRoutes.use('/jobs', jobRouter);

export default allRoutes;
