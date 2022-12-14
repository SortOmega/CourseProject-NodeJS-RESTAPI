import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: { type: String, _id: false },
  name: { type: String, require: true, minLength: 2, maxLength: 20 },
  surname: { type: String, require: true, minLength: 4, maxLength: 50 },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
