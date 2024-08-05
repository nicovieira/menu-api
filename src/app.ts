import helmet from "helmet";
import cors from "cors";
import express, { json } from "express";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
