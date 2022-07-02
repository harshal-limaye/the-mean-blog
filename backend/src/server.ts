import express, { Express, Request, Response } from "express";

import { verifyToken } from "./helpers/jwt.helper";

import categoryRouter from "./routers/category.router";
import postRouter from "./routers/post.router";
import userRouter from "./routers/users.router";
import optionRouter from "./routers/option.router";
import commentRouter from "./routers/comment.router";

class Server {
  private _app: Express;
  private _endpoint: string = "/api/v1/";

  get instance(): Express {
    return this._app;
  }

  constructor() {
    this._app = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares(): void {
    this.instance.use(express.json());
    this.instance.use(express.urlencoded());
    this.instance.use(verifyToken);
  }

  initRoutes(): void {
    this.instance.get(`${this._endpoint}`, (req: Request, res: Response) =>
      res.status(200).json({ success: true, value: { message: "Hello World" } })
    );

    this.instance.use(`${this._endpoint}users`, userRouter);
    this.instance.use(`${this._endpoint}categories`, categoryRouter);
    this.instance.use(`${this._endpoint}posts`, postRouter);
    this.instance.use(`${this._endpoint}options`, optionRouter);
    this.instance.use(`${this._endpoint}comments`, commentRouter);
  }
}

export default new Server();
