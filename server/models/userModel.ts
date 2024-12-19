import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profileImage: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
  avatarUrl?: string;
  post: mongoose.Types.ObjectId[];
  tours: mongoose.Types.ObjectId[];
  favourite: mongoose.Types.ObjectId[];
  yourLikes: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  role: string;
}

const userSchema: Schema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [6, "Password must contain at least 6 characters"],
    },
    profileImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dv5zkbm91/image/upload/v1734379134/avatar_dmpmq6.jpg",
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tip" }],
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
    favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Favourite" }],
    yourLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    avatarUrl: { type: String, default: null },
    description: { type: String, default: null },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    role: {
      type: String,
      default: "USER",
    },
  },
  { timestamps: true }
);
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export { User, IUser };
