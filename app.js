import express from "express";
import { handleHome, handleLogin } from "./controller/homeController";

const app = express();

app.get("/", handleHome);
app.get("/login", handleLogin);

export default app;
