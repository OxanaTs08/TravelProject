import mongoose, { Document, Schema, Model } from "mongoose";

interface IDestination extends Document {
  user: mongoose.Types.ObjectId;
  location: string;
  description: string;
  destinationImage: string[];
  likes: mongoose.Types.ObjectId[];
  savedBy: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const destinationSchema: Schema<IDestination> = new Schema(
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
    description: {
      type: String,
      maxlength: 2200,
    },
    destinationImage: [
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

const Destination: Model<IDestination> = mongoose.model<IDestination>(
  "Destination",
  destinationSchema
);

export { Destination, IDestination };
