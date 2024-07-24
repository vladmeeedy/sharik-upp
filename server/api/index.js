import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/sendOrder", (req, res) => {
  const { buyerInfo, cartItems } = req.body;

  console.log("Received order:", req.body);

  const message = `
    Новый заказ:
    Имя: ${buyerInfo.firstName} ${buyerInfo.lastName}
    Телефон: ${buyerInfo.telephone}
    Email: ${buyerInfo.email}
    Город: ${buyerInfo.city}
    Адрес: ${buyerInfo.address}
    Дата доставки: ${buyerInfo.deliveryDate}
    
    Товары:
    ${cartItems
      .map((item) => `- ${item.title}, количество: ${item.count}`)
      .join("\n")}
  `;

  console.log("Telegram message:", message);

  const telegramMessage = encodeURIComponent(message);

  fetch(
    `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${telegramMessage}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Сообщение в Telegram отправлено:", data);
        res.status(200).send("Уведомление успешно отправлено");
      } else {
        console.error("Ошибка отправки сообщения в Telegram:", data);
        res.status(500).send("Ошибка отправки уведомления в Telegram");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке запроса в Telegram API:", error);
      res.status(500).send("Ошибка отправки уведомления в Telegram");
    });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
module.exports = app;
