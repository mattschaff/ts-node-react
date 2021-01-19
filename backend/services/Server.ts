import {Express, Request, Response} from "express";
import express from "express";
import * as path from "path";

export class Server {

  protected app: Express;

  /**
   * Constructs Server
   *
   * @param app
   */
  constructor(app: Express) {
    this.app = app;
    this.initializeRoutes();
  }

  /**
   * Register Express route subscribers
   */
  protected initializeRoutes() {
    console.log('Initializing routes.');
    this.app.use(express.static(path.resolve("./") + "/build/fe"));
    this.app.use(express.static(path.resolve("./") + "/static"));

    this.app.get("*", (req: Request, res: Response): void => {
      res.sendFile(path.resolve("./") + "/build/frontend/index.html");
    });
  }

  /**
   * Start server
   *
   * @param port
   */
  public start(port: number | string): void {
    console.log('Starting server routes by listening to port: ' + port);
    this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
  }

}

