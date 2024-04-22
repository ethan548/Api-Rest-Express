import users from "../models/user.js";
import rols from "../models/role.js";
import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";
export const singIn = async (req, res) => {
  // res.send('login')
  try {
    const { email, password } = req.body;
    const userFound = await users.findOne({ email });
    if (!userFound) {
      res.status(400).json("Email not found").populate("roles");
    }
    const isVerified = await users.comparePassword(
      password,
      userFound.password
    );

    if (!isVerified) {
      res.status(400).json("Password not found");
    }
    const token = jsonwebtoken.sign({ id: userFound._id }, config.secrect, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (error) {
    console.log("error autenticacion" + error);
  }
};
export const singUp = async (req, res) => {
  // console.log(req.body);
  try {
    const { username, email, password, roles } = req.body;

    const newUser = new users({
      username,
      email,
      password: await users.encryptPassword(password),
    });
    // Verificar si el rol no existe, y asginar user por defecto
    if (roles) {
      const arrayRoles = await rols.find({ name: { $in: roles } }, "_id");
      newUser.roles = arrayRoles;
    } else {
      // undefined es falsy entonces es false
      const userRole = await rols.findOne({ name: "user" }, "_id");
      newUser.roles = [userRole._id];
    }
    //Guardando a los usuarios
    const saveUsers = await newUser.save();
    // console.log(saveUsers);
    // Configuracion JsonWebToken
    const token = jsonwebtoken.sign({ id: newUser._id }, config.secrect, {
      expiresIn: "1d",
    });
    //console.log(token);

    res.json({ token });
  } catch (error) {console.log(error);}
};
