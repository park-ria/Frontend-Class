import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
  // salsRound는 몇번 해싱할꺼냐 => 5
});

const User = mongoose.model("User", userSchema);

export default User;
