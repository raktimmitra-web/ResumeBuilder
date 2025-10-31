import { login, logout, refreshAccessToken, signup } from "../controllers/authController.js"
import express from "express"

const userRouter= express.Router()

userRouter.post("/signup",signup)
userRouter.post("/login", login)
userRouter.get("/refresh",refreshAccessToken)
userRouter.get("/logout",logout)
export default userRouter