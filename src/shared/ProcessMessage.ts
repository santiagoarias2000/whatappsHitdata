import whatsAppService from "../services/WhatsAppService";
import whatsAppModel from "./WhatsAppModel";
class ProcessMessage {
  public async ProcessMessage(textUser: any, number: any) {
    textUser = textUser.toLowerCase();

    var models: any = [];

    if (textUser.includes("hola") || textUser.includes("buenos")) {
      //Saludar
      var model = whatsAppModel.MessageImageHola(number);
      models.push(model);
    } else if (textUser.includes("gracias")) {
      var model = whatsAppModel.MessageText("Con gusto :)", number);
      models.push(model);
    } else if (
      textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("me voy") || textUser.includes("no")
    ) {
      var model = whatsAppModel.MessageImageDespedida(number);
      models.push(model);
    } else if (textUser.includes("conócenos")) {
      var model = whatsAppModel.MessageText(
        "Visita nuestra página: https://www.hitdatasoluciones.com",
        number
      );
      models.push(model);
    } else if (textUser.includes("hitdata")) {
      var model = whatsAppModel.MessageLocation(number);
      models.push(model);
    } else if (textUser.includes("contacto") ) {
      var model = whatsAppModel.MessageText(
        "*Centro de contacto:* \n3127399230",
        number
      );
      models.push(model);
    } else if (textUser.includes("servicios") || textUser.includes("si")) {
      var model2 = whatsAppModel.MessageList(number);
      models.push(model2);
    }else if (textUser.includes("plan 1")) {
        var model2 = whatsAppModel.MessagePlan1(number);
        models.push(model2);
    }else if (textUser.includes("plan 2")) {
        var model2 = whatsAppModel.MessagePlan2(number);
        models.push(model2);
    }else if (textUser.includes("plan 3")) {
        var model2 = whatsAppModel.MessagePlan3(number);
        models.push(model2);
    }else if (textUser.includes("plan 4")) {
        var model2 = whatsAppModel.MessagePlan4(number);
        models.push(model2);
    }else if (textUser.includes("plan 5")) {
        var model2 = whatsAppModel.MessagePlan5(number);
        models.push(model2);
    } else {
      var model = whatsAppModel.MessageText("No te entiendo", number);
      models.push(model);
    }

    models.forEach((model: any) => {
      whatsAppService.SendMessageWhatsApp(model);
    });
  }
}
const processMessage = new ProcessMessage();
export default processMessage;
