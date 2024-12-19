import { AuthModel } from "../models/authModel";

class AuthService {
  async createUser(username: string, email: string, password: string) {
    const newUser = await AuthModel.create({ username, email, password });
    return newUser;
  }
  async findOneUserById(email: string) {
    const user = await AuthModel.findById(email);
    return user;
  }

  async findOneUserByEmail(email: string) {
    const user = await AuthModel.findOne({ email });
    return user;
  }
  async findOneUserByUsername(username: string) {
    const user = await AuthModel.findOne({ username });
  }
}

export default new AuthService();
