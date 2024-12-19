import { Schema, model, Document, Types } from "mongoose";

export interface IFavourite extends Document {
  user: Types.ObjectId;
  item: Types.ObjectId;
  itemType: "hotel" | "restaurant" | "tip" | "destination";
  addedAt: Date;
}

const favoriteSchema = new Schema<IFavourite>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  item: { type: Schema.Types.ObjectId, required: true },
  itemType: {
    type: String,
    enum: ["hotel", "restaurant", "destination", "tip"],
    required: true,
  },
  addedAt: { type: Date, default: Date.now },
});

export const Favorite = model<IFavourite>("Favorite", favoriteSchema);
