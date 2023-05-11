import express from "express";
import cors from "cors";
import morgan from "morgan";
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  public startSetting(): void {
    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "1000mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activateRoute(): void {
    this.app.use("/api/public");
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("El puerto en que trabaja es: ", this.app.get("PORT"));
    });
  }
}
export default Server;
