import { addResume, deleteResume, downloadResume, getResumeByUserId, getResumeDataByResumeId, updateResume } from "../controllers/resumeController.js"
import express from "express"
import { isAuthenticated } from "../middlewares/authMiddleware.js"

const resumeRouter = express.Router()

resumeRouter.post("/add-resume",isAuthenticated,addResume)
resumeRouter.put("/update/:id",updateResume)
resumeRouter.delete("/delete-resume/:id",deleteResume)
resumeRouter.get("/getResumeByUserId",isAuthenticated,getResumeByUserId)
resumeRouter.get("/getResumeDataByResumeId/:id",isAuthenticated,getResumeDataByResumeId)
resumeRouter.post("/generate-pdf",isAuthenticated,downloadResume)

export default resumeRouter