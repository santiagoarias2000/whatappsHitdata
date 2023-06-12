"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Info_1 = __importDefault(require("../repository/Info"));
const Saludo_1 = __importDefault(require("../repository/Saludo"));
const Servicio_1 = __importDefault(require("../repository/Servicio"));
const WhatsAppService_1 = __importDefault(require("../services/WhatsAppService"));
const WhatsAppModel_1 = __importDefault(require("./WhatsAppModel"));
class ProcessMessage {
    ProcessMessage(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            //#region sin chat gpt
            if (Saludo_1.default.Bienvenida(textUser)) {
                var model = WhatsAppModel_1.default.MessageImageHola(number);
                models.push(model);
            }
            else if (Saludo_1.default.Despedida(textUser)) {
                var model = WhatsAppModel_1.default.MessageImageDespedida(number);
                models.push(model);
            }
            else if (Saludo_1.default.Gracias(textUser)) {
                var model = WhatsAppModel_1.default.MessageText("Con Gusto desde HitData ✌️", number);
                var model2 = WhatsAppModel_1.default.MessageText("No olvides visita nuestra página 💻: https://www.hitdatasoluciones.com", number);
                models.push(model);
                models.push(model2);
            }
            else if (Info_1.default.Ubicacion(textUser)) {
                var model = WhatsAppModel_1.default.MessageLocation(number);
                models.push(model);
            }
            else if (Info_1.default.Contacto(textUser)) {
                var model = WhatsAppModel_1.default.MessageContactoText(number);
                models.push(model);
            }
            else if (Info_1.default.Agendar(textUser)) {
                var model2 = WhatsAppModel_1.default.MessageText("Agenda tu cita 📆: https://calendar.app.google/8nfxcDz6z7qRPpdw8", number);
                models.push(model2);
            }
            else if (Servicio_1.default.Servicios(textUser)) {
                var model2 = WhatsAppModel_1.default.MessageList(number);
                models.push(model2);
            }
            else if (Servicio_1.default.Planes(textUser)) {
                const plan = Servicio_1.default.ListDePlanes(textUser, number);
                models.push(plan);
            }
            else if (Servicio_1.default.SubPlanes(textUser)) {
                const plan = Servicio_1.default.SubPlan(textUser, number);
                models.push(plan);
            }
            else {
                var model = WhatsAppModel_1.default.MessageText("Perdona no te entendimos 🤔", number);
                models.push(model);
            }
            models.forEach((model) => {
                WhatsAppService_1.default.SendMessageWhatsApp(model);
            });
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
