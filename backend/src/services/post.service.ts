import { IPost, Post } from "../models/post";
import err from "../helpers/error.helper";

export class PostService {
  static async getAll(): Promise<IPost[]> {
    try {
      return Post.find({});
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async getById(id: string): Promise<IPost> {
    try {
      const post = await Post.findOne({ _id: id });
      if (post) {
        return post;
      } else {
        throw Error("Post not found!");
      }
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async create(data: IPost): Promise<IPost> {
    try {
      const post = await Post.create(data);

      if (post) {
        return post;
      }

      throw Error(err.message);
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async update(data: IPost, id: string): Promise<IPost> {
    try {
      const post = await Post.findByIdAndUpdate(id, data, { new: true });
      if (post) {
        return post;
      } else {
        throw Error(err.message);
      }
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async delete(id: string): Promise<any> {
    try {
      return await Post.deleteOne({ _id: id });
    } catch (error: any) {
      throw Error(error);
    }
  }
}
