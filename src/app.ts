import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import express, { json } from "express";
import { handle_errors } from "./middlewares/handleErrors";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use(handle_errors.execute);
