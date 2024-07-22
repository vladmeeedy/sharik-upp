import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

const TELEGRAM_API_TOKEN = "7438927464:AAEtXYOVk80bXFme_dKfApdqD93EOdpQkNo";
const TELEGRAM_CHAT_ID = "675843760";

export const config = {
  api: {
    bodyParser: false,
  },
};

const corsMiddleware = cors({
  origin: "https://sharik-upp-git-main-volodymyrs-projects-d68f6c3e.vercel.app",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
});
const bodyParserMiddleware = bodyParser.json();

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async (req, res) => {
  await runMiddleware(req, res, corsMiddleware);
  await runMiddleware(req, res, bodyParserMiddleware);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { buyerInfo, cartItems } = req.body;

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

  const telegramMessage = encodeURIComponent(message);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${telegramMessage}`
    );
    const data = await response.json();

    if (data.ok) {
      res.status(200).send("Уведомление успешно отправлено");
    } else {
      res.status(500).send("Ошибка отправки уведомления в Telegram");
    }
  } catch (error) {
    res.status(500).send("Ошибка отправки уведомления в Telegram");
  }
};
