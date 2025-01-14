import { Post, IPost } from "./../models/postModel";
import fileService from "../config/fileService";

class PostService {
  async createPost(
    userId: string,
    description: string,
    file: string[],
    location: string,
    type: string
  ): Promise<IPost> {
    try {
      const postImage = await fileService.savePostImage(file.join(","));
      if (!postImage) {
        throw new Error("Error updating post image");
      }
      const newPost = await Post.create({
        userId,
        type,
        postImage,
        description,
        location,
      });

      return newPost;
    } catch (error) {
      console.error("Error creating Post", error);
      throw error;
    }
  }
  async findAllPosts() {
    const posts = await Post.find();
    return posts;
  }
  async findPostById(id: string) {
    const findedPost = await Post.findById(id);
    return findedPost;
  }
  async findPostByIdAndPopulate(id: string) {
    const findedPost = await Post.findById(id).populate("comments");
    return findedPost;
  }
}

export default new PostService();
