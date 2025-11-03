import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;   //storing auth header from the coming request
    if (!authHeader?.startsWith("Bearer")) {
      return res.status(401).json({ message: "User unauthorized" });
    }
    const token = authHeader.split(" ")[1]; //splitting the authheader for the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token expired" });
  }
};
