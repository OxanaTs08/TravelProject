import { User } from "./../models/userModel";
import fileService from "../config/fileService";

class UserService {
  async createUser(username: string, fullName: string, profileImage: string) {
    const newUserProfile = await User.create({
      username,
      fullName,
      profileImage,
    });
    return newUserProfile;
  }
  async findAllUsers() {
    const users = await User.find();
    return users;
  }
  async findUserByUsername(username: string) {
    const user = await User.findOne({ username });
    return user;
  }
  async findUserById(id: string) {
    const findedUser = await User.findById(id);
    return findedUser;
  }
  async findUserByIdAndPopulate(id: string) {
    const findedUser = await User.findById(id).populate("tips");
    return findedUser;
  }
  async updateProfileImage(id: string, file: string) {
    const updatedImage = await fileService.saveAvatar(file);
    if (!updatedImage) {
      throw new Error("Error updating profile image");
    }
    return await User.findByIdAndUpdate(
      id,
      { $set: { profileImage: updatedImage } },
      { new: true }
    );
  }
  async updateUserTips(userId: any, tipId: any) {
    const newTip = await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { tips: tipId } }
    );
    return newTip;
  }
}

export default new UserService();
