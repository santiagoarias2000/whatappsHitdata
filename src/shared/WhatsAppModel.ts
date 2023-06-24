//nombre del chat: 

//apartado para bluebot donde diga soy blue bot y soy un hit aparece el moraco


//un por que no para cuando contesten mal
//te responderemos..... 


class WhatsappModels {
  public MessageText(textResponse: string | any, number: any) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "text",
      text: {
        preview_url: true,
        body: textResponse,
      },

    });
    return data;
  }
  //Buenas tardes, buenos dias, hola
  public MessageImageHola(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        type: "button",
        header: {
          type: "image",
          image: {
            link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/mente%20del%20consumidor_logo_hitadata.jpg"
          },
        },
        body: {
          //Hola bienvenido a Hit Data, soy bluebot tu asistente virtual, te inivito a conocer nuestros servicios, o si te quieres contactar con nuestro equipo puedes escrbir en cualquier momento TEAM (sirve para conocer nuestro horario de atencion)
          text: "Hola bienvenido a Hit Data, soy BotBlue tu asistente virtual, te inivito a conocer nuestros servicios, o si te quieres contactar con nuestro equipo puedes escrbir en cualquier momento ''TEAM''. 😎" + number,
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "001",
                title: "Nuestros Servicios",
              },
            },
            {
              type: "reply",
              reply: {
                id: "002",
                title: "Portafolio",
              }, 
            },
                        {
              type: "reply",
              reply: {
                id: "003",
                title: "Agendar Asesoría",
              }
            },
          ],
        },
      },

    });
    return data;
  }
  //Buenas noches, buenas tardes, Muchas gracias
  public MessageImageDespedida(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "image",
      image: {
        link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/emociones_hitdata(1).jpg",
        //Hasta luego numerodetelefono te hablo tu asistente virtual BlueBot
        caption: 'Hasta Luego ' + `${number}` + ' desde HitData ✌️✌️ ',
      },
    });
    return data;
  }
  public MessageLocation(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "location",
      location: {
        latitude: "5.5441980877891694",
        longitude: "-73.35154394963322",
        name: "Hit data Agencia de marketing y publicidad 📍",
        address: "Centro Comercial Boulevard, Cl. 32 # 3-76, Tunja, Boyacá",
      },
    });
    return data;
  }
  public MessageContactoText(number: any) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "contacts",
      "contacts": [
        {

          "name": {
            "formatted_name": "HIT DATA",
            "first_name": "HIT DATA",
          },
          "org": {
            "company": "3127399230",
            "title": "HIT DATA"
          },

          "phones": [
            {
              "phone": "3127399230",
              "wa_id": "573127399230",
              "type": "WORK"
            }
          ],
          "urls": [
            {
              "url": "https://www.hitdatasoluciones.com",
              "type": "Nuestro Web Site"
            }
          ]
        }
      ]

    });
    return data;
  }


//mira como se cambia para que sea una lista completa, listado en 1, 2, 3, 4
  public MessageList(number: number) {
    const data = JSON.stringify({
      "messaging_product": "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        type: "list",
        header: {
          type: "text",
          text: "Hit Data",
        },
        body: {
          text: "¿En cual de nuestros productos te encuentras interesado?",
        },
        footer: {
          text: "Agencia de Marketing y Publicidad",
        },
        action: {
          button: "Nuestros Servicios",
          sections: [
            {
              title: "Nuestros Servicios",
              rows: [
                {
                  id: "main-plan-1",
                  title: "Gestión Redes sociales🤳",
                  description: "Gestión Redes sociales🤳",
                },
                {
                  id: "main-plan-2",
                  title: "Desarrollo de sitio👨‍💻",
                  description: "Desarrollo de sitio👨‍💻",
                },
                {
                  id: "main-plan-3",
                  title: "Desarrollo de software 💻",
                  description: "Desarrollo de software 💻",
                },
                {
                  id: "main-plan-4",
                  title: "Diseño gráfico 🖌️",
                  description: "Diseño gráfico 🖌️",
                },
                {
                  id: "main-plan-5",
                  title: "Producción audiovisual 📷",
                  description: "Producción audiovisual 📷",
                },
                {
                  id: "main-plan-6",
                  title: "Asesoría personalizada 🫱🏻‍🫲🏼",
                  description: "Asesoría personalizada 🫱🏻‍🫲🏼",
                },

              ],
            },
            {
              title: "Centro de Atención",
              rows: [
                {
                  id: "main-agencia",
                  title: "Contacto 📱",
                  description: "Este es nuestro número de contacto",
                },
                {
                  id: "main-contacto",
                  title: "Sitio Web 💻",
                  description: "https://www.hitdatasoluciones.com",
                },
                {
                  id: "main-location",
                  title: "HitData 📍",
                  description: "Estamos ubicados en el Boulevard... ",
                },
              ],
            },
          ],
        },
      },
    });
    return data;
  }

  public MessagePlan1(number: number) {

    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        type: "button",
        header: {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
          }
        },
        body: {
          text: "Si tu negocio aún no está en el mercado digital y deseas dar el primer paso nosotros te ayudamos, creamos en internet una huella digital que te permitirá ingresar con fuerza a este nuevo mundo de oportunidades, de igual forma, si ya estás en internet y necesitas optimizarlo para obtener resultados, crearemos los contenidos necesarios y te asesaremos para cumplir tus objetivos comerciales.",
        },
        footer: {
          "text": `Gestión de redes sociales`
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "001",
                title: "Plan Básico",
              }
            },
            {
              type: "reply",
              reply: {
                id: "002",
                title: "Plan Hit Data",
              }
            },
            {
              type: "reply",
              reply: {
                id: "003",
                title: "Agendar Asesoría",
              }
            },
          ],
        }
      }

    });
    return data;
  }
  public MessagePlan2(number: number) {

    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        type: "button",
        header: {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
          }
        },
        body: {
          text: "Creamos sitios web que generan robustez y permiten tener la presencia de una empresa o negocio en internet de forma estructurada.",
        },
        footer: {
          "text": `Desarrollo de sitio web`
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "001",
                title: "Sitio informativo",
              }
            },
            {
              type: "reply",
              reply: {
                id: "002",
                title: "Sitio con e-commerce",
              }
            },
            {
              type: "reply",
              reply: {
                id: "003",
                title: "Agendar Asesoría",
              }
            },
          ],
        }
      }

    });
    return data;
  }
  public MessagePlan3(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        "type": "button",
        "header": {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true",
          }

        },
        "body": {
          "text": "Desarrollo de software."
        },
        "footer": {
          "text": `Desarrollo de software.`
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
  public MessagePlan4(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        "type": "button",
        "header": {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
          }
        },
        "body": {
          "text": "Te gustaria ver otro plan?"
        },
        "footer": {
          "text": `Diseño gráfico.`
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
  public MessagePlan5(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "interactive",
      "interactive": {
        "type": "button",
        "header": {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
          }
        },
        "body": {
          "text": "Te gustaria ver otro plan?"
        },
        "footer": {
          "text": `Producción audiovisual.`
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
  public MessagePlan6(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      "type": "interactive",
      "interactive": {
        "type": "button",
        "header": {
          "type": "image",
          "image": {
            "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
          }
        },
        "body": {
          "text": "Te gustaria ver otro plan?"
        },
        "footer": {
          "text": `Estos son nuestros planes ${number}`
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
  public MessageSubPlan(number: number) {
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
}

const whatsappModels = new WhatsappModels();
export default whatsappModels;
