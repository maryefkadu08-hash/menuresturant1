import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import notifyOrderHandler from "./api/notify-order.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "32kb" }));
app.all("/api/notify-order", notifyOrderHandler);
app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
