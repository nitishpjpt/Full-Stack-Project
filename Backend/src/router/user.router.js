import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { getAllUser, userLogin, userRegister } from "../controller/user.controller.js";
import {teacherDetails, teacherNotes} from "../controller/teacher.controller.js";
import { allUsers } from "../controller/chat.controller.js";
import verifyJwt from '../middlewares/authMiddleware.js'

const userRouter = Router();

userRouter.route("/Register").post(
  upload.fields([
    {
      name: "avtar",
      maxCount: 1,
    },
  ]),
  userRegister
);
userRouter.route("/student").get(verifyJwt,allUsers);
userRouter.route("/Login").post(userLogin);

userRouter.route("/teachers").post(
  upload.fields([
    {
      name: "fileUrl",
      maxCount: 4,
    },
  ]),
  teacherDetails
);
userRouter.route("/Dashboard").post(getAllUser);
userRouter.route("/Notes").post(teacherNotes);

export default userRouter;
