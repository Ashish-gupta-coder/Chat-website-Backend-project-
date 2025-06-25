import express from "express";
import { login, logOut, signUp } from "../controllers/auth.controllers.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/login", login);
authRoute.post("/logout", logOut);

export default authRoute;
