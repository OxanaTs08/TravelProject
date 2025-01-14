import postService from "../DBServices/postService";
import userService from "../DBServices/userService";
import ApiError from "../errors/apiErrors";
import { Request, Response, NextFunction } from "express";
import { Post, IPost } from "../models/postModel";
import { CustomRequest } from "../middleWares/authMiddleWare";

class PostController {
  async createPost(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { userId, type, description, location, postImage }: Partial<IPost> =
      req.body;
    try {
      if (!userId) {
        res.status(400).json({ message: "Error" });
        return;
      }
      if (!type || !description || !location || !postImage) {
        res.status(400).json({ message: "Error" });
        return;
      }

      const newPost = await postService.createPost(
        userId.toString(),
        type,
        postImage,
        description,
        location
      );
      if (!newPost) {
        res.status(400).json({ message: "Error" });
        return;
      }

      await userService.updateUserPosts(
        newPost.userId.toString(),
        newPost?._id.toString()
      );
      return res.json(newPost);
    } catch (error: any) {
      next(ApiError.internal(error.message));
      res.status(500).json(error.message);
    }
  }
  async getPostById(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const postId = req.params.id;
    try {
      if (!postId) {
        next(ApiError.badRequest("data not entered in params"));
        return;
      }
      const findedPost = await postService.findPostById(postId);
      if (!findedPost) {
        res.json({ message: " User not found" });
        return;
      }
      return res.json(findedPost);
    } catch (error: any) {
      next(ApiError.internal(error));
    }
  }
  async getAllPosts(
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
}
export default new PostController();
