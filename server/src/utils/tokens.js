import jwt from "jsonwebtoken";

export const createAccessToken = (userId) => {
    return jwt.sign({id:userId},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"1d"
    })
};
export const createRefreshToken = (userId) => {
    return jwt.sign({id:userId},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"15d"
    })
};