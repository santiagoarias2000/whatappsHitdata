const https: any = require('https');

class WhatsAppService {
    public SendMessageWhatsApp(data: string | any): void {

        const options = {
            host: "graph.facebook.com",
            path: "/v17.0/103830672715211/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(process.env.PASS_SECRET),
            },
        };
        const req = https.request(options, (res: any) => {
            res.on("data", (d: any) => {
                process.stdout.write(d);
            });
        });
        req.on("error", (error: any) => {
            console.error(error);
        });
        req.write(data);
        req.end();
    }
}
const whatsAppService = new WhatsAppService();
export default whatsAppService;