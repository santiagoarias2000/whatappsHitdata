import info from "../repository/Info";
import saludo from "../repository/Saludo";
import servicio from "../repository/Servicio";
import whatsAppService from "../services/WhatsAppService";
import whatsAppModel from "./WhatsAppModel";
class ProcessMessage {
  public async ProcessMessage(textUser: any, number: any) {
    textUser = textUser.toLowerCase();
    var models = [];
    
    //#region sin chat gpt
    if (saludo.Bienvenida(textUser)) {
      var model = whatsAppModel.MessageImageHola(number);
      models.push(model);
    } else if (saludo.Despedida(textUser)) {
      var model = whatsAppModel.MessageImageDespedida(number);
      models.push(model);
    } else if (saludo.Gracias(textUser)) {
      var model = whatsAppModel.MessageText("Con Gusto desde HitData ✌️", number);
      var model2 = whatsAppModel.MessageText("No olvides visita nuestra página 💻: https://www.hitdatasoluciones.com", number);
      models.push(model);
      models.push(model2);
    } else if (info.Ubicacion(textUser)) {
      var model = whatsAppModel.MessageLocation(number);
      models.push(model);
    } else if (info.Contacto(textUser)) {
      var model = whatsAppModel.MessageContactoText( number );
      models.push(model);
    } else if (info.Agendar(textUser)) {
      var model2 = whatsAppModel.MessageText("Agenda tu cita 📆: https://calendar.app.google/8nfxcDz6z7qRPpdw8", number);
      models.push(model2);
    } else if (servicio.Servicios(textUser)) {
      var model2 = whatsAppModel.MessageList(number);
      models.push(model2);
    } else if (servicio.Planes(textUser)){
      const plan = servicio.ListDePlanes(textUser,number);
      models.push(plan);
    } else if (servicio.SubPlanes(textUser)){
      const plan = servicio.SubPlan(textUser,number);
      models.push(plan);
    } else {
      var model = whatsAppModel.MessageText(
        "Perdona no te entendimos 🤔",
        number);
      models.push(model);
    }
    models.forEach((model) => {
      whatsAppService.SendMessageWhatsApp(model);
    });


  }

}
const processMessage = new ProcessMessage();
export default processMessage;
