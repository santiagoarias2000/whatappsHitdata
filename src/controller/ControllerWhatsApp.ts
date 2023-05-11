import { Response, Request } from "express";
import DaosWhatsApp from "../daos/DaosWhatsApp";

class ControllerWhatsApp extends DaosWhatsApp{

    public Verificar (req: Request, res: Response) : void {
        ControllerWhatsApp.VerificarToken(req,res);
    }
    public Recived (req: Request, res: Response){
        ControllerWhatsApp.RecivedMessage(req,res);
    }


}
const controllerWhatsApp = new ControllerWhatsApp();
export default controllerWhatsApp;