import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  image: {
    type: String,
    minlenght: 1,
    maxlenght: 200,
    required: true,
  },
  name: {
    type: String,
    minlenght: 3,
    maxlenght: 50,
    required: true,
  },
  lastName: {
    type: String,
    minlenght: 3,
    maxlenght: 50,
    required: true,
  },
  email: {
    type: String,
    minlenght: 12,
    maxlenght: 50,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    minlenght: 7,
    maxlenght: 17,
    required: true,
  },
  password: {
    type: String,
    minlenght: 8,
    required: true,
  },
  classes: [String],
  contractedPlan: [String],
  roll: {
    type: String,
    minlenght: 7,
    maxlenght: 20,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
