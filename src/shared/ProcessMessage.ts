import whatsAppService from "../services/WhatsAppService";
import whatsAppModel from "./WhatsAppModel";
class ProcessMessage {
    public async ProcessMessage(textUser: any, number: any) {
        textUser = textUser.toLowerCase();

        var models: any = [];

        if (textUser.includes("hola")) {
            //Saludar
            var model = whatsAppModel.MessageText("Hola, un gusto saludarte", number);
            models.push(model);
            var modelList = whatsAppModel.MessageList(number);
            models.push(modelList);

        } else if (textUser.includes("gracias")) {

            var model = whatsAppModel.MessageText("Con gusto :)", number);
            models.push(model);

        } else if (textUser.includes("adios") || textUser.includes("adiós")
            || textUser.includes("bye") || textUser.includes("me voy")) {

            var model = whatsAppModel.MessageText("Vuelva pronto", number);
            models.push(model);
        } else if (textUser.includes("vender")) {
            var model = whatsAppModel.MessageText("Registrate en el siguiente formulario: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
            models.push(model);

        } else if (textUser.includes("agencia")) {
            var model = whatsAppModel.MessageLocation(number);
            models.push(model);
        } else if (textUser.includes("contacto")) {
            var model = whatsAppModel.MessageText("*Centro de contacto:* \n3114546376", number);
            models.push(model);


        } else {

            var model = whatsAppModel.MessageText("No te entiendo", number);
            models.push(model);
        }

        models.forEach((model: any) => {
            whatsAppService.SendMessageWhatsApp(model);

        })
    }
}
const processMessage = new ProcessMessage();
export default processMessage;