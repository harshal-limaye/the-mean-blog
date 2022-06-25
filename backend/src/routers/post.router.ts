import { Router, Request, Response } from "express";
import { PostService } from "../services/post.service";
import err from "../helpers/error.helper";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostService.getById(req.params.id);
    if (post) {
      return res.status(200).json({ success: true, value: { post } });
    }

    return res.status(err.status).json(err.payload);
  } catch (error: any) {
    return res.status(err.status).json(err.custom(error.message));
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const userId = req.app.locals.userId;
    const post = await PostService.create({ ...req.body, author: userId });

    if (post) {
      return res.status(200).json({ success: true, value: { post } });
    }

    return res.status(err.status).json(err.payload);

    return res.status(200);
  } catch (error: any) {
    throw Error(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostService.update(req.body, req.params.id);

    if (post) {
      return res.status(200).json({ success: true, value: { post } });
    }

    return res.status(err.status).json(err.payload);
  } catch (error: any) {
    throw Error(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const post = await PostService.delete(req.params.id);
    if (post) {
      return res.status(200).json({ success: true, value: { post } });
    }

    return res.status(err.status).json(err.payload);
  } catch (error: any) {
    throw Error(error);
  }
});

export default router;
