import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

// Security
app.use(helmet());
// Pub View Engine
app.set("view engine", "pug");
// Cookie data parser
app.use(cookieParser());
// Body form data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Logging
app.use(morgan("dev"));

app.use(localsMiddleware);

// Express Router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
