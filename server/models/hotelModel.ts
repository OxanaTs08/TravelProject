import mongoose, { Document, Schema, Model } from "mongoose";

interface IHotel extends Document {
  user: mongoose.Types.ObjectId;
  address: string;
  hotelImage: string[];
  description: string;
  images: string[];
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const hotelSchema: Schema<IHotel> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hotelImage: [
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

const Hotel: Model<IHotel> = mongoose.model<IHotel>("Hotel", hotelSchema);

export { Hotel, IHotel };
