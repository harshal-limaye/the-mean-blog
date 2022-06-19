import express, { Express, Request, Response } from "express";

class Server {
  private _app: Express;

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
  }

  initRoutes(): void {
    this.instance.get("/", (req: Request, res: Response) => {
      res.json({ message: "Welcome to The Mean Blog!" });
    });
  }
}

export default new Server();
