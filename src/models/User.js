import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
    type: String,
    default: "https://i.pravatar.cc/150?img=3"
    },
    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }]
  },
  
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
