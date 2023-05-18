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
const WhatsAppService_1 = __importDefault(require("../services/WhatsAppService"));
const WhatsAppModel_1 = __importDefault(require("./WhatsAppModel"));
class ProcessMessage {
    ProcessMessage(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            if (textUser.includes("hola") || textUser.includes("buenos")) {
                //Saludar
                var model = WhatsAppModel_1.default.MessageImageHola(number);
                models.push(model);
            }
            else if (textUser.includes("gracias")) {
                var model = WhatsAppModel_1.default.MessageText("Con gusto :)", number);
                models.push(model);
            }
            else if (textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("me voy") || textUser.includes("no")) {
                var model = WhatsAppModel_1.default.MessageImageDespedida(number);
                models.push(model);
            }
            else if (textUser.includes("conócenos")) {
                var model = WhatsAppModel_1.default.MessageText("Visita nuestra página: https://www.hitdatasoluciones.com", number);
                models.push(model);
            }
            else if (textUser.includes("hitdata")) {
                var model = WhatsAppModel_1.default.MessageLocation(number);
                models.push(model);
            }
            else if (textUser.includes("contacto")) {
                var model = WhatsAppModel_1.default.MessageText("*Centro de contacto:* \n3127399230", number);
                models.push(model);
            }
            else if (textUser.includes("servicios") || textUser.includes("si")) {
                var model2 = WhatsAppModel_1.default.MessageList(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 1")) {
                var model2 = WhatsAppModel_1.default.MessagePlan1(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 2")) {
                var model2 = WhatsAppModel_1.default.MessagePlan2(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 3")) {
                var model2 = WhatsAppModel_1.default.MessagePlan3(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 4")) {
                var model2 = WhatsAppModel_1.default.MessagePlan4(number);
                models.push(model2);
            }
            else if (textUser.includes("plan 5")) {
                var model2 = WhatsAppModel_1.default.MessagePlan5(number);
                models.push(model2);
            }
            else {
                var model = WhatsAppModel_1.default.MessageText("No te entiendo", number);
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
