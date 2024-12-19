import mongoose, { Document, Schema, Model } from "mongoose";

interface ITour extends Document {
  user: mongoose.Types.ObjectId;
  tourname: string;
  description: string;
  tourImage: string[];
  country: string[];
  duration: number;
  startDate: Date;
  approximatePrice: number;
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const tourSchema: Schema<ITour> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tourname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 2200,
    },
    tourImage: [
      {
        type: String,
        required: true,
      },
    ],
    country: [
      {
        type: String,
        required: true,
      },
    ],
    duration: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    approximatePrice: {
      type: Number,
      required: true,
    },
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

const Tour: Model<ITour> = mongoose.model<ITour>("Tour", tourSchema);

export { Tour, ITour };
