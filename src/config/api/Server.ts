import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import WhatsAppRoutes from "../../routes/WhatsAppRoutes";
class Server {
  public app: express.Application;

  constructor() {
    dotenv.config({path: "variables.env"});

    this.app = express();
    this.startSetting();
    this.activateRoute();
  }

  public startSetting(): void {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "1000mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activateRoute(): void {
    this.app.use("/whatsapp", WhatsAppRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("El puerto en que trabaja es: ", this.app.get("PORT"));
    });
  }
}
export default Server;
