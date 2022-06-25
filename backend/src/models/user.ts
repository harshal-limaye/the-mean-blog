import { Schema, model, Document, Model, Types } from "mongoose";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  posts?: Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      default: []
    },
  ],
});

export const User: Model<IUser> = model("User", UserSchema);
