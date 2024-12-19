import mongoose, { Document, Schema, Model } from "mongoose";

interface IComment extends Document {
  user: mongoose.Types.ObjectId;
  text: string;
  post: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const tipSchema: Schema<IComment> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment: Model<IComment> = mongoose.model<IComment>("Comment", tipSchema);

export { Comment, IComment };
