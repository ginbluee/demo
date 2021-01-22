import express from 'express';
import {registerController, loginController} from '../controllers/user.controller';

const userRoute = new express.Router();

userRoute.post('/register', registerController);
userRoute.post('/login', loginController);

export default userRoute;