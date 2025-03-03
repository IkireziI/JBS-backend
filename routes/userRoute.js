import express from 'express';
import { SignIn, SignUp, getUsers, updateUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/', getUsers);
userRoute.post('/signin', SignIn);
userRoute.post('/signup', SignUp);
userRoute.put('/:id', updateUser);

export default userRoute;
