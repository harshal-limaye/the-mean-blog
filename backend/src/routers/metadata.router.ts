import { Request, Response, Router } from "express";
import { MetadataService } from "../services/metadata.service";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const columns = await MetadataService.get(req.params.id);

    return res.send({ success: true, value: columns });
  } catch (error: any) {
    throw Error(error);
  }
});

export default router;
