import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // 유일한 값
  },
  username: {
    type: String,
    required: true,
    unique: true, // 유일한 값
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
