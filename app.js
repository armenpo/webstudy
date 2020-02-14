import express from "express";
import homeRouter from "./router/homeRouter";
import routes from "./routes";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { helloMiddleWare } from "./middlewares";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleWare
app.use(helloMiddleWare);
app.use(routes.home, homeRouter);

export default app;
