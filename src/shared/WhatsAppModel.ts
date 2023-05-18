class WhatsappModels {
  public MessageText(textResponse: any, number: any) {
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
  //Buenas tardes, buenos dias, hola
  public MessageImageHola(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "image",
      image: {
        link: "https://hitdatasoluciones.com/images/isotipo.png",
        caption: "Hola desde HitData",
      },
    });
    return data;
  }
  //Buenas noches, buenas tardes, Muchas gracias
  public MessageImageDespedida(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "interactive",
      interactive: {
        type: "button",
        header: {
          type: "image",
          image: {
            link: "https://hitdatasoluciones.com/images/isotipo.png"
            
          },
        },
        body: {
          text:"Gracias por contactarnos",
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "001",
                title: "Salir",
              },
            },
            {
              type: "reply",
              reply: {
                id: "002",
                title: "Preguntar",
              },
            },
          ],
        },
      },
    });
    return data;
  }

  public MessageList(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "Nuestros Servicios son",
        },
        body: {
          text: "Agencia de Marketing y Publicidad",
        },
        footer: {
          text: "Selecciona una de las opciones para poder atenderte",
        },
        action: {
          button: "Ver opciones",
          sections: [
            {
              title: "Compra y vende productos",
              rows: [
                {
                  id: "main-comprar-header",
                  title: "Comprar",
                  description: "Compra los mejores productos para tu hogar",
                },
                {
                  id: "main-comprar",
                  title: "Vender",
                  description: "Vende tus productos",
                },
              ],
            },
            {
              title: "Centro de atencion",
              rows: [
                {
                  id: "main-agencia",
                  title: "Agencia",
                  description: "Puedes visitar nuestra agencia.",
                },
                {
                  id: "main-contacto",
                  title: "Centro de contacto",
                  description: "Te atenderá uno de nuestro agentes",
                },
              ],
            },
          ],
        },
      },
    });
    return data;
  }

  public MessageButtons(number: number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      to: `whatsapp:${number}`,
      type: "interactive",
      interactive: {
        type: "button",
        body: {
          text: "¿Selecciona uno de los productos?",
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "option-laptop",
                title: "Laptop",
              },
            },
            {
              type: "reply",
              reply: {
                id: "option-computadora",
                title: "Computadora",
              },
            },
          ],
        },
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
        latitude: "5.559455106648253 ",
        longitude: "-73.34499717963602",
        name: "Viva tunja",
        address: "Av Universitaria, Tunja, Boyacá",
      },
    });
    return data;
  }
}

const whatsappModels = new WhatsappModels();
export default whatsappModels;
