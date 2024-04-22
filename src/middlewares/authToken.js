import jwt from "jsonwebtoken";
import config from "../config.js";
import users from "../models/user.js";

export const authToken = async (req, res, next) => {
  // const token= req.headers("x-access-token")
  //   console.log(req.headers["x-access-token"]);
  try {
    const token = req.headers["x-access-token"];
    const verifyToken = jwt.verify(token, config.secrect);
    req.userId = verifyToken.id;
    if (!verifyToken) {
      return res.status(401).json("token not found");
    }
    const userVerify = await users.findById(verifyToken.id);
    if (!userVerify) {
      return res.status(401).json("user not found");
    }
    //    console.log(userVerify);
    //    console.log(verifyToken);
    console.log("token verificado");
    next();
   
  } catch (error) {
    return res.status(401).json("unathorized");
  }
};
