import { Router, Request, Response } from "express";
import { CommentService } from "../services/comment.service";
import err from "../helpers/error.helper";

const router = Router();

router.post("/:postId", async (req: Request, res: Response) => {
  try {
    const content: string = req.body.content;
    const user: string = req.app.locals.userId;
    const postId: string = req.params.postId;

    const comment = await CommentService.create(postId, user, content);

    if (comment) {
      return res.status(200).json({ success: true, value: { comment } });
    }

    return res.status(err.status).json(err.payload);
  } catch (error: any) {
    return res.status(err.status).json(err.custom(error.message));
  }
});

router.delete("/:id", (req: Request, res: Response) => {});

export default router;
