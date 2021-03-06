import mongoose, { model, Schema, Model, Document } from "mongoose";
// where the schema will be stored

const authSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//connect launchesSchema with the launches collection
const userDatabase = mongoose.model("credential", authSchema);

export default userDatabase;
