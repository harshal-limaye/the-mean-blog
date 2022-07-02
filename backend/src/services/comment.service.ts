import { Comment } from "../models/comment";
import { Post } from "../models/post";

export class CommentService {
  static async create(postId: string, userId: string, content: string) {
    try {
      if (!postId) throw Error("Please provide a post id");

      const post = await Post.findById(postId);

      if (!post) throw Error("Post not found!");

      const comment = await Comment.create({
        content,
        user: userId,
      });

      const updatedPosts = await Post.updateOne(
        { _id: postId },
        { $addToSet: { comments: comment._id } }
      ).exec();

      return updatedPosts;
    } catch (error: any) {
      throw Error(error);
    }
  }
}
