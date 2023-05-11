import { Response, Request } from "express";
import processMessage from "../shared/ProcessMessage";

import fs = require("fs");

const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

function GetTextUser(message: any) {
    var text = "";
    var typeMessage = message["type"];
    if (typeMessage == "text") {
        text = (message["text"])["body"];
    } else if (typeMessage == "interactive") {
        var interactiveObject = (message["interactive"]);
        var typeInteractive = interactiveObject["type"];
        myConsole.log(interactiveObject)

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];

        } else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];

        } else {
            myConsole.log("Sin Mensaje");
        }

    } else {
        myConsole.log("Sin Mensaje");
    }
    return text;
}
class DaosWhatsApp{

    protected static async VerificarToken(req: Request, res: Response): Promise<any> {
        try {
            var accessToken = "RGFDDS324DGD12DSFDG344";
            var token = req.query["hub.verify_token"];
            var challenge = req.query["hub.challenge"];

            if (challenge != null && token != null && token == accessToken) {
                res.status(200).send(challenge);

            } else {
                res.status(400).send();
            }

        } catch (e) {
            res.status(400).send();
        }

    }

    protected static async RecivedMessage(req: Request, res: Response): Promise<any>  {
        try {

            var entry = (req.body["entry"])[0];
            var changes = (entry["changes"])[0];
            var value = changes["value"];
            var messageObject = value["messages"];

            if (typeof messageObject != "undefined") {
                var message = messageObject[0];
                var number = message["from"];

                var text = GetTextUser(message);

                
                if (text != "") {
                    myConsole.log(text);
                    myConsole.log(number);
                    await processMessage.ProcessMessage(text,number);

                }
            }

            res.send("EVENT_RECIVED");

        } catch (e) {
            myConsole.log(e);
            res.send("EVENT_RECIVED");
        }
    }

}
export default DaosWhatsApp;