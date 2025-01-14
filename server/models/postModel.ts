import mongoose, { Document, Schema, Model } from "mongoose";

export enum PostType {
  Tip = "tip",
  Hotel = "hotel",
  Restaurant = "restaurant",
  Destination = "destination",
}

interface IPost extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  type: PostType;
  location: string;
  postImage: string[];
  description: string;
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema: Schema<IPost> = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["tip", "hotel", "restaurant", "destination"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 2200,
    },
    postImage: [
      {
        type: String,
        required: true,
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    savedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post: Model<IPost> = mongoose.model<IPost>("Post", postSchema);

export { Post, IPost };
