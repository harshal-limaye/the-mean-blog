import { Schema, model, Model, Document, Types } from "mongoose";

export enum Status {
  Draft = -1,
  Pending = 0,
  Published = 1,
}

export interface IPost extends Document {
  title?: string;
  content?: string;
  publishedAt?: Date;
  author: Types.ObjectId;
  categories: Types.ObjectId[];
  status?: Status;
}

const PostSchema: Schema<IPost> = new Schema<IPost>({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  publishedAt: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: Number,
    default: Status.Draft,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const autoPopulate: any = function(this: any, next: any) {
  this.populate("author");
  this.populate("categories");
  next();
}

PostSchema.pre("findOne", autoPopulate)

export const Post: Model<IPost> = model("Post", PostSchema);
