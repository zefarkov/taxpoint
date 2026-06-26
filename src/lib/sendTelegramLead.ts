type LeadPayload = {
  context: string;
  name: string;
  phone: string;
};

type LeadResponse = {
  ok: boolean;
  error?: string;
};

export async function sendTelegramLead({ context, name, phone }: LeadPayload) {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

  if (!endpoint) {
    const message = "NEXT_PUBLIC_LEAD_ENDPOINT sozlanmagan.";

    if (process.env.NODE_ENV === "development") {
      console.warn(message, { context, name, phone });
      return { ok: true };
    }

    throw new Error(message);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      context,
      name,
      phone
    })
  });

  const data = (await response.json().catch(() => null)) as LeadResponse | null;

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || "Lead so'rovini yuborib bo'lmadi.");
  }

  return data;
}
