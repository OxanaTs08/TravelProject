import mongoose, { Document, Schema, Model } from "mongoose";

interface IRestaurant extends Document {
  user: mongoose.Types.ObjectId;
  address: string;
  restaurantImage: string[];
  description: string;
  images: string[];
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const restaurantSchema: Schema<IRestaurant> = new Schema(
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
    restaurantImage: [
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

const Restaurant: Model<IRestaurant> = mongoose.model<IRestaurant>(
  "Restaurant",
  restaurantSchema
);

export { Restaurant, IRestaurant };
