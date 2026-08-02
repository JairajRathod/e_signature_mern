import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Parse JSON
app.use(express.json());

// Parse URL Encoded
app.use(express.urlencoded({ extended: true }));

export default app;
