import mongoose from "mongoose";
import { User } from "../module/user.models.js";

// in this is want to use query search to search all the user with their name
const allUsers = async (req, res) => {
  // if there was a query of same user then show user
  const keyword = req.query.search
    ? {
        $or: [{ username: { $regex: req.query.search, $options: "i" } }],
      }
    : {};

  // only found those user which are login only
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
};

export { allUsers };
