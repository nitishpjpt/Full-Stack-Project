// chatname
// isGroupchat
// users
// latestMessage
// groupAdmin
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  
    // in the latest you should add latest msg to top of the db in msg model
    latestMessage: {
      type: mongoose.Schema.ObjectId,
      ref: "Message",
    },
    groudAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
