import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: () => void) {
  const token = req.body.token || req.headers["x-access-token"];

  const chunks = req.originalUrl.split("/");
  const endpoint = chunks[chunks.length - 1];

  if (endpoint === "login" || endpoint === "register") {
    return next();
  }

  if (!token) {
    return res.status(403).json({
      success: false,
      error: "Authentication token is missing",
    });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.SECRET || "");
    req.app.locals.userId = decoded.userId;
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "Authentication failed.",
    });
  }

  return next();
}
