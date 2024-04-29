import express from "express";
import * as authController from '../controller/auth.js';
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";

const authRouter = express.Router();

const validateAuth = [
    body('username').trim().isLength({min: 8, max: 15}).withMessage('최소 8글자 최대 15자를 입력하세요'), validate];

// http://localhost:8080/auth/:username
authRouter.get('/:username', authController.getUser);

// http://localhost:8080/auth/login
authRouter.post('/login', authController.login);

// http://localhost:8080/auth/regist
authRouter.post('/regist', validateAuth, authController.regist);

export default authRouter;