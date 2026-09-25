import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const twilioClient =
  process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null;

app.use(express.json());
app.use(express.static(__dirname));

function buildTelegramText(order) {
  const items = order.items
    .map(
      (item) =>
        `- ${item.name} x ${item.quantity} = ${item.price * item.quantity} ብር`,
    )
    .join("\n");

  return [
    "New Order",
    `Order #: ${order.number}`,
    `Customer: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Address: ${order.customer.address}`,
    `Payment: ${order.customer.paymentMethod}`,
    "",
    "Items:",
    items,
    "",
    `Total: ${order.total} ብር`,
    `Discount: ${order.discount ? "10%" : "None"}`,
    `Payable: ${order.payable} ብር`,
  ].join("\n");
}

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/notify-order", async (req, res) => {
  try {
    const order = req.body;

    if (!order || !order.customer || !order.items) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid order payload" });
    }

    const telegramText = buildTelegramText(order);
    const telegramChatId = process.env.TELEGRAM_CHAT_ID || "@miki7589";
    const smsTo = process.env.SMS_TO || "+251957862470";

    const notificationTasks = [];

    if (process.env.TELEGRAM_BOT_TOKEN && telegramChatId) {
      notificationTasks.push(
        fetch(
          `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: telegramText,
            }),
          },
        ),
      );
    }

    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
      const shortSms = `New order #${order.number}: ${order.customer.name} • ${order.items
        .map((item) => item.name)
        .join(", ")} • Total: ${order.payable} birr.`;

      notificationTasks.push(
        twilioClient.messages.create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: smsTo,
          body: shortSms,
        }),
      );
    }

    if (notificationTasks.length === 0) {
      return res.status(200).json({
        success: true,
        message:
          "No notification providers configured. Add Telegram/Twilio credentials.",
      });
    }

    await Promise.allSettled(notificationTasks);

    return res
      .status(200)
      .json({ success: true, message: "Order notifications sent" });
  } catch (error) {
    console.error("Notification error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
