class SubPlanModels{
    public MessageSubPlan(number: number) {
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
                "body": {
                    "text": "Este es un subPlan del Plan1"
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
const subPlanModels = new SubPlanModels();
export default subPlanModels;