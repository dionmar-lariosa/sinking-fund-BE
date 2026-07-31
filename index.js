import express from "express";
import { configDotenv } from "dotenv";
import helmet from "helmet";
import ErrorMiddleware from "./middleware/error.middleware.js";
import memberRoutes from "./routes/member.route.js";

configDotenv({
  path: `.env.${process.env.NODE_ENV ?? "local"}`,
  debug: process.env.IS_DEBUG
});

const app = express();
const port = Number(process.env.PORT) || 3000;

// Security headers
app.use(helmet());

// Parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/members", memberRoutes);

// Error Handler
app.use(ErrorMiddleware.page404);
app.use(ErrorMiddleware.appError);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
