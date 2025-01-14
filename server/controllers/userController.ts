import userService from "../DBServices/userService";
import ApiError from "../errors/apiErrors";
import { Request, Response, NextFunction } from "express";
import { User, IUser } from "../models/userModel";
import { CustomRequest } from "../middleWares/authMiddleWare";

class UserController {
  async getUserById(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const userId = req.params.id;
    try {
      if (!userId) {
        next(ApiError.badRequest("data not entered in params"));
        return;
      }
      const findedUser = await userService.findUserById(userId);
      if (!findedUser) {
        res.json({ message: " User not found" });
        return;
      }
      return res.json(findedUser);
    } catch (error: any) {
      next(ApiError.internal(error));
    }
  }
  async getAllUsers(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const findedUsers = await userService.findAllUsers();
      if (!findedUsers) {
        res.status(404).json({ message: " Users not found" });
        next(ApiError.badRequest("Users not found "));
      }
      return res.json(findedUsers);
    } catch (error: any) {
      next(ApiError.internal(error));
    }
  }
  async getAllUserDataByUserId(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const userId = req.params.id;
    try {
      const userData = await userService.findUserByIdAndPopulate(userId);

      if (!userData) {
        res.status(404).json({ message: "Error on get userData" });
        next(ApiError.badRequest("UserId is not correct"));
      }
      return res.json(userData);
    } catch (error: any) {
      next(ApiError.internal(error));
    }
  }
  async updateUserProfileImage(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const userId = req.user?.id;
    const profileImage = req.body;
    try {
      if (!userId || !profileImage) {
        res.status(404).json({ message: "UserID or image not entered" });
        next(ApiError.badRequest("Wrong  request data"));
        return;
      }
      const userData = await userService.updateProfileImage(
        userId,
        profileImage
      );

      if (!userData) {
        res.status(404).json({ message: "Error on get userData" });
        next(ApiError.badRequest("UserId is not correct"));
      }
      return res.json(userData);
    } catch (error: any) {
      next(ApiError.internal(error));
      res.status(500).json({ message: "Internal server Error" });
    }
  }
  async updateUserPosts() {}
  async searchUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const limit = 5;
      const search = req.query.name;

      const users = await User.find({
        fullName: { $regex: search, $options: "i" },
      })
        .select("_id fullName profileImage")
        .limit(limit);
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
      next(ApiError.internal(error));
    }
  }
}
export default new UserController();
