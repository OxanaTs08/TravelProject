import dotenv from "dotenv";
import { Response, Request, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/userModel";
import authService from "../DBServices/authService";
import userService from "../DBServices/userService";
import ApiError from "../errors/apiErrors";
dotenv.config({ path: ".env" });

class AuthController {
  async registerAuthUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { username, email, password }: IUser = req.body;
    try {
      const existUser = await authService.findOneUserByEmail(email);
      if (existUser)
        return res.json({ message: "Email is already registered" });
      const hashedPassword = await bcrypt.hash(password, 10);
      await authService.createUser(username, email, hashedPassword);
      return res.json({ message: "User succesfully created" });
    } catch (error: any) {
      next(ApiError.internal("Internal server Error"));
      res.status(500).json(error.message);
    }
  }
  async loginAuthUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { email, password }: Partial<IUser> = req.body;
    try {
      if (!email || !password) {
        res.json({ message: "Email and password are requiered" });
        return;
      }
      const authUser = await authService.findOneUserByEmail(email);
      if (!authUser) return res.status(400).json({ message: "Wrong email" });
      const user = await userService.findUserByUsername(authUser.username);
      if (!user) {
        return res.status(404).json({ message: "Wrong data" });
      }

      const isValidPassword = await bcrypt.compare(password, authUser.password);

      if (!isValidPassword) {
        return res.status(400).json({ message: "Wrong password" });
      }
      const token = jwt.sign(
        { userId: user._id, email, username: user.username },
        process.env.SECRET_KEY as string,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "Login successful",
        status: 200,
        token,
        user: { id: user._id, email: authUser.email, username: user.username },
      });
    } catch (error: any) {
      next(ApiError.internal("Internal server Error"));
      res.status(500).json(error.message);
    }
  }
}

export default new AuthController();
