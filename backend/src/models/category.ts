import { Schema, model, Model, Types } from "mongoose";

export interface ICategory {
  name?: string;
  description?: string;
  posts: Types.ObjectId[];
}

const CategorySchema: Schema<ICategory> = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      default: [],
    },
  ],
});

export const Category: Model<ICategory> = model("Category", CategorySchema);
