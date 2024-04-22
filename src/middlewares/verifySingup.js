import User from "../models/user.js";
import rols from "../models/role.js";
export const checkRolesExisted = async (req, res, next) => {
  try {
    // console.log(req.body.roles);
    const allRoles = await rols.find({},{name:1,_id:0}); //,{sort:{name:-1}} para ordenar
    const nameRoles = allRoles.map((role) => role.name);
    // console.log(nameRoles);
    for (const iterator of req.body.roles) {
      if (!nameRoles.includes(iterator)) {
        return res.status(400).json(`Role ${iterator} does not exist`);
      }
    }
    console.log("Roles exist");
  //   console.log(Object.values(allRoles));
    next();
  } catch (error) {
    console.log(error); 
  }
}

export const checkUserAndEmail = async (req, res, next) => {
  try {
    // console.log("entraste hdp");
    const {username, email} = req.body;
    const check = await User.find({$or: [{username: username}, {email: email}]});
    // console.log(check);
    // console.log(check==0 ? "is empty": "is not empty");
    if(check.length > 0 ){
      return res.status(400).json("The user or email already exists");
    }
    console.log("username and email verified");
    next();
  } catch (error) {
    console.log(error);
  }
}