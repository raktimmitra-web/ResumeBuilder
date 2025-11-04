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
    origin: "https://resumine-resume.netlify.app",
    credentials:true
  })
);

const port = process.env.PORT || 5000;


//handling routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/resume",resumeRouter)

//connecting DB
connectDB();

//starting server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
