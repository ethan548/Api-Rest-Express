import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const roleSchema = new mongoose.Schema(
  {
    name: String
  },
  {
    versionKey: false
  }
);

export default mongoose.model("Role", roleSchema);
