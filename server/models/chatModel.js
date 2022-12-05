import mongoose from "mongoose";

const chatModelSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ChatModel", chatModelSchema);
