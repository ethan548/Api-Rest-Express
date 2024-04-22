import rols from "../models/role.js";
export const createRoles = async () => {
  try {
    if (await rols.estimatedDocumentCount().size() == 0) {
      const newsAdmin = new rols({
        name: "admin"
      });
      const newUser = new rols({
        name: "user"
      });
      const newModerador = new rols({
        name: "moderador"
      });
      await newsAdmin.save();
      await newModerador.save();
      await newUser.save();
      console.log("roles default created successfully!");
      console.log(await rols.find());
    }
  } catch (error) {
    console.log("new error" + error);
  }
};
