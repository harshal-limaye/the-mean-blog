import { Router, Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import err from "../helpers/error.helper";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAll();
    return res.status(200).json({ success: true, value: categories });
  } catch (error: any) {
    return res.status(err.status).json(err.payload);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.getById(req.params.id);
    if (category) {
      return res.status(200).json({ success: true, value: { category } });
    }

    return res.status(200).json({
      success: false,
      error: "Something went wrong please contact your administator.",
    });
  } catch (error: any) {
    return res.status(200).json({ success: false, error: error.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.create(req.body);

    if (category) {
      return res.status(200).json({ success: true, value: { category } });
    }

    return res.status(200).json({
      success: false,
      error: "Something went wrong please contact your administator.",
    });
  } catch (error: any) {
    return res.status(200).json({ success: false, error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.update(req.body, req.params.id);

    if (category) {
      return res.status(200).json({ success: true, value: { category } });
    }

    return res.status(200).json({
      success: false,
      error: "Something went wrong please contact your administator.",
    });
  } catch (error: any) {
    return res.status(200).json({ success: false, error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.delete(req.params.id);
    if (category) {
      return res.status(200).json({ success: true, value: { category } });
    }

    return res.status(200).json({
      success: false,
      error: "Something went wrong please contact your administator.",
    });
  } catch (error: any) {
    return res.status(200).json({ success: false, error: error.message });
  }
});

export default router;
