import { Router, Request, Response } from "express";
import err from "../helpers/error.helper";
import { OptionService } from "../services/option.service";

const router = Router();

router.get("/:key", async (req: Request, res: Response) => {
  try {
    const option = await OptionService.get(req.params.key);

    if (option) {
        return res.status(200).send({ success: true, value: option });
    }
  } catch (error: any) {
    res.status(err.status).json(err.custom(error));
  }
});

router.post("/:key", async (req: Request, res: Response) => {
  try {
    const option = await OptionService.set(req.params.key, req.body.value);

    res.status(200).send({ success: true, value: option });
  } catch (error) {
    res.status(err.status).json(err.custom(error));
  }
});

export default router;
