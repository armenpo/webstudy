import express from "express";
import homeRouter from "./router/homeRouter";
import routes from "./routes";

const app = express();

app.use(routes.home, homeRouter);

export default app;
