import express from "express";
import { googleLoginController } from "../Controllers/authController.js";

const authRoute = express.Router();
authRoute.get("/googleLogin",googleLoginController);

export default authRoute;
