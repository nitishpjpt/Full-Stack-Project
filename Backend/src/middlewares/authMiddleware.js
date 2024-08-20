import { User } from "../module/user.models.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

const verifyJwt = async (req, res, next) => {
  try {
    // check if user has a token or not
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized Request");
    }

    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN);

    const user = await User.findById(decodeToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "invalid access token", error);
  }
};

export default verifyJwt;
