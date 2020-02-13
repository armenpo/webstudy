import express from "express";
import { handleHome, handleLogin } from "../controller/homeController";

const homeRouter = express.Router();

homeRouter.get("/", handleHome);
homeRouter.get("/login", handleLogin);

export default homeRouter;
