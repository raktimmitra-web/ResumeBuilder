import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../utils/tokens.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are necessary" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isMatchedPassword = await bcrypt.compare(password, user.password);
  if (!isMatchedPassword) {
    return res.status(400).json({ message: "Password Invalid" });
  }
  const accessToken = createAccessToken(user._id);
  const refreshToken = createRefreshToken(user._id);  //creating access and refresh token from userId
  res.cookie("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });  //sending refresh token as cookie
  return res.status(200).json({ message: "User logged In", accessToken, user });
};
export const signup = async (req, res) => {
  const { firstName,lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are necessary" });
  }
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "User already registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  const accessToken = createAccessToken(newUser._id);
  const refreshToken = createAccessToken(newUser._id);
  res.cookie("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res
    .status(201)
    .json({ message: "User Created", accessToken, newUser });
};
export const logout = async (req, res) => {
  res.clearCookie("refreshToken", {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });
  return res.json({ message: "Logged Out Successfully" });
};

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(400).json({ message: "No refresh Token is there" });
    }
    const verified = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);  //verifying the refresh token
    if (!verified) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    const accessToken = createAccessToken(verified.id); //new access token generation
    const user = await User.findById(verified.id)
    return res
      .status(200)
      .json({ message: "New accessToken Generated", accessToken, user });
  } catch (error) {
    return res.status(403).json({message:"Invalid refresh token",error})
  }
};
