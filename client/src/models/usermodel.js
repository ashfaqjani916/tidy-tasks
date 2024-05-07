import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: [true, "Username is required"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "Password is required"]
  },
  email:{
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  isVerified:{
    type: Boolean,
    default: false
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  forgotPasswordToken:String,
  forgotPasswordExpires:Date,
  verificationToken:String,
  verificationTokenExpires:Date,
  }
);


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
