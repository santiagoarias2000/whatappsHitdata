"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappModels {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            text: {
                preview_url: true,
                body: textResponse,
            },
            type: "text",
        });
        return data;
    }
    MessageContacto(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "contacts",
            "contacts": [
                {
                    "addresses": [
                        {
                            "street": "<ADDRESS_STREET>",
                            "city": "<ADDRESS_CITY>",
                            "state": "<ADDRESS_STATE>",
                            "zip": "<ADDRESS_ZIP>",
                            "country": "<ADDRESS_COUNTRY>",
                            "country_code": "<ADDRESS_COUNTRY_CODE>",
                            "type": "<HOME|WORK>"
                        }
                    ],
                    "emails": [
                        {
                            "email": "hitdatasoluciones@gmail.com",
                            "type": "hit"
                        }
                    ],
                    "phones": [
                        {
                            "phone": "3114546376",
                            "wa_id": "<CONTACT_WA_ID>",
                            "type": "hit"
                        }
                    ],
                    "urls": [
                        {
                            "url": "https://www.hitdatasoluciones.com",
                            "type": "hit"
                        }
                    ]
                }
            ]
        });
        return data;
    }
    //Buenas tardes, buenos dias, hola
    MessageImageHola(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            interactive: {
                type: "button",
                header: {
                    type: "image",
                    image: {
                        link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/mente%20del%20consumidor_logo_hitadata.jpg"
                    },
                },
                body: {
                    text: "Bienvenidos al siguiente nivel 😎" + number,
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Contactanos",
                            },
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "Nuestros Servicios",
                            },
                        },
                    ],
                },
            },
        });
        return data;
    }
    //Buenas noches, buenas tardes, Muchas gracias
    MessageImageDespedida(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "image",
            image: {
                link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/emociones_hitdata(1).jpg",
                caption: 'Hasta Luego ' + `${number}` + ' desde HitData ✌️✌️ ',
            },
        });
        return data;
    }
    MessageList(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            interactive: {
                type: "list",
                header: {
                    type: "text",
                    text: "Hit Data",
                },
                body: {
                    text: "Estos son nuestros servicios",
                },
                footer: {
                    text: "Agencia de Marketing y Publicidad",
                },
                action: {
                    button: "Ver opciones",
                    sections: [
                        {
                            title: "Nuestros Servicios",
                            rows: [
                                {
                                    id: "main-plan-1",
                                    title: "Plan 1 🧑‍💻",
                                    description: "15 Publicaciones mensuales",
                                },
                                {
                                    id: "main-plan-2",
                                    title: "Plan 2 💡",
                                    description: "20 Publicaciones mensuales",
                                },
                                {
                                    id: "main-plan-3",
                                    title: "Plan 3 📹",
                                    description: "12 Publicaciones mensuales",
                                },
                                {
                                    id: "main-plan-4",
                                    title: "Plan 4 🖌️",
                                    description: "7 Piezas gráficas",
                                },
                                {
                                    id: "main-plan-5",
                                    title: "Plan 5 📷",
                                    description: "12 Publicaciones mensuales",
                                },
                            ],
                        },
                        {
                            title: "Centro de atencion ",
                            rows: [
                                {
                                    id: "main-agencia",
                                    title: "Contacto 📱",
                                    description: "Puedes visitar nuestra agencia.",
                                },
                                {
                                    id: "main-contacto",
                                    title: "Conócenos 💻",
                                    description: "Visita nuestra página web",
                                },
                                {
                                    id: "main-location",
                                    title: "HitData 📍",
                                    description: "Estamos ubicados en el Boulevard",
                                },
                            ],
                        },
                    ],
                },
            },
        });
        return data;
    }
    MessagePlan1(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/PLAN_1_HIT%20DATA.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan2(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/PLAN_1_HIT%20DATA.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan3(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/PLAN_3_HIT%20DATA.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan4(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/PLAN_4_HIT%20DATA.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan5(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageLocation(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "location",
            location: {
                latitude: "5.5441980877891694",
                longitude: "-73.35154394963322",
                name: "Hit data Agencia de marketing y publicidad",
                address: "Centro Comercial Boulevard, Cl. 32 # 3-76, Tunja, Boyacá",
            },
        });
        return data;
    }
}
const whatsappModels = new WhatsappModels();
exports.default = whatsappModels;
