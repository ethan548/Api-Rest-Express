import users from "../models/user.js";

export const authAdmin = async (req, res, next) => {
  try {
    console.log(req.userId);
    const userVerify = await users.findById(req.userId).populate("roles");
    console.log(userVerify.roles);
    if (!userVerify) {
      return res.status(401).json("user not found");
    }
    if (userVerify.roles[0].name != "admin") {
      return res.status(401).json("requiered admin role");
    }
    console.log("Admin verificado");

    next();
    // console.log(userVerify.roles[0].name);
    // console.log(userVerify.roles[0].name);

    // console.log(userVerify.roles[0].name);
    // console.log(userVerify.roles[0].name);
  } catch (error) {}
};
