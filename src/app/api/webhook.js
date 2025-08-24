// pages/api/webhook.js
export default function handler(req, res) {
  if (req.method === "GET") {
    // Meta Verification Step
    const VERIFY_TOKEN = "zarea_secret_token"; // set your own token
    
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token) {
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("✅ Webhook verified!");
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403);
      }
    }
  } else if (req.method === "POST") {
    // Incoming messages/events from Meta
    console.log("📩 Webhook event received:", req.body);

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
