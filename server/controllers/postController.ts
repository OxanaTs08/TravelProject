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
      const findedPosts = await postService.findAllPosts();
      if (!findedPosts) {
        res.status(404).json({ message: " Posts not found" });
        next(ApiError.badRequest("Posts not found "));
      }
      return res.json(findedPosts);
    } catch (error: any) {
      next(ApiError.internal(error));
    }
  }
}
export default new PostController();
