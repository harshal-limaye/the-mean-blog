import { Document, model, Model, Schema, Types } from "mongoose";

export interface IComment extends Document {
  content: string;
  user: Types.ObjectId;
  date?: Date
}

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const autoPopulate: any = function (this: any, next: any) {
  this.populate("user");
  next();
};

CommentSchema.pre("findOne", autoPopulate);

export const Comment = model("Comment", CommentSchema);
