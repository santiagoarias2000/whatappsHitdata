import { Router } from "express";
import controllerWhatsApp from "../controller/ControllerWhatsApp";

class WhatsAppRoutes {
    public apiRouterWhatsApp: Router;

    constructor(){
        this.apiRouterWhatsApp = Router();
        this.loadRoutes();

    }

    public loadRoutes(): void {
        this.apiRouterWhatsApp.get("/",controllerWhatsApp.Verificar);
        this.apiRouterWhatsApp.post("/",controllerWhatsApp.Recived);
    }
}
const routes = new WhatsAppRoutes();
export default routes.apiRouterWhatsApp;