type LeadPayload = {
  context: string;
  name: string;
  phone: string;
};

type TelegramResponse = {
  ok: boolean;
  description?: string;
};

export async function sendTelegramLead({ context, name, phone }: LeadPayload) {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    const message =
      "Telegram bot token yoki chat ID topilmadi. NEXT_PUBLIC_TELEGRAM_BOT_TOKEN va NEXT_PUBLIC_TELEGRAM_CHAT_ID ni sozlang.";

    if (process.env.NODE_ENV === "development") {
      console.warn(message, { context, name, phone });
      return { ok: true };
    }

    console.warn(message);
    throw new Error("Telegram sozlamalari topilmadi.");
  }

  const text = `Yangi so'rov:
${context}

Ism: ${name}
Telefon: ${phone}`;

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  const data = (await response.json().catch(() => null)) as TelegramResponse | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.description || "Telegram so'rovini yuborib bo'lmadi.");
  }

  return data;
}
