import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 5000;

const TELEGRAM_API_TOKEN = "7438927464:AAEtXYOVk80bXFme_dKfApdqD93EOdpQkNo";
const TELEGRAM_CHAT_ID = "675843760";

app.use(cors());
app.use(bodyParser.json());

app.post("/api/sendOrder", (req, res) => {
  const { buyerInfo, cartItems } = req.body;

  // Отладочные выводы
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

  // Отладочные выводы для сообщения
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
