import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import resumeRouter from "./routes/resumeRoutes.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/resume",resumeRouter)
connectDB();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
