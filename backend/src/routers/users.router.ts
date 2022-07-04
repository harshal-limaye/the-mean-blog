import { Router, Request, Response } from "express";
import { UserService } from "../services/user.service";

const router = Router();

router.post("/auth/login", async (req: Request, res: Response) => {
  try {
    const token = await UserService.login(req.body);

    return res.status(200).json({ success: true, value: { token } });
  } catch (error: any) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

router.post("/auth/register", async (req: Request, res: Response) => {
  try {
    const user = await UserService.register({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    if (user) {
      return res.status(200).json({
        success: true,
        value: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    }

    return res
      .status(200)
      .json({
        success: false,
        error: "Something went wrong please contact your administator.",
      });
  } catch (error: any) {
    return res.status(200).json({ success: false, error: error.message });
  }
});

export default router;
