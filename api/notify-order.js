import twilio from "twilio";
import { validateOrder } from "../utils/validation.js";

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

async function sendTelegram(order) {
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: buildTelegramText(order),
      }),
    },
  );
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) {
    throw new Error("Telegram notification failed");
  }
}

/** Validate an order and send notifications without exposing credentials. */
export default async function notifyOrderHandler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const order = validateOrder(req.body);
  if (!order) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid order payload" });
  }

  try {
    const notificationTasks = [];
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      notificationTasks.push(sendTelegram(order));
    }

    if (
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_PHONE_NUMBER &&
      process.env.SMS_TO
    ) {
      const twilioClient = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,
      );
      notificationTasks.push(
        twilioClient.messages.create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.SMS_TO,
          body: `New order #${order.number}: ${order.customer.name} • ${order.items
            .map((item) => item.name)
            .join(", ")} • Total: ${order.payable} birr.`,
        }),
      );
    }

    if (!notificationTasks.length) {
      return res.status(503).json({
        success: false,
        message: "No notification providers are configured",
      });
    }

    const results = await Promise.allSettled(notificationTasks);
    if (results.every((result) => result.status === "rejected")) {
      console.error("Order notification delivery failed");
      return res.status(502).json({
        success: false,
        message: "Order notification delivery failed",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Order notification sent" });
  } catch (error) {
    console.error("Order notification handler failed:", error);
    return res.status(502).json({
      success: false,
      message: "Order notification delivery failed",
    });
  }
}
