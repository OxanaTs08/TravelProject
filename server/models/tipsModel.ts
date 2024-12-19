import mongoose, { Document, Schema, Model } from "mongoose";

interface ITip extends Document {
  user: mongoose.Types.ObjectId;
  location: string;
  tipImage: string[];
  description: string;
  images: string[];
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const tipSchema: Schema<ITip> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    tipImage: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      maxlength: 2200,
    },
    images: [
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

const Tip: Model<ITip> = mongoose.model<ITip>("Tip", tipSchema);

export { Tip, ITip };
