import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();
app.set("view engine", "pug");

// Cookie data parser
app.use(cookieParser());
// Body form data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security
app.use(helmet());
// Logging
app.use(morgan("combined"));

// Express Router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
