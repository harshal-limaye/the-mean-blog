import express, { Express, Request, Response } from "express";
import userRouter from "./routers/users.router";
import categoryRouter from "./routers/category.router";
import { verifyToken } from "./helpers/jwt.helper";

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
  }
}

export default new Server();
