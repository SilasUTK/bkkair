const LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push";

export async function sendLineNotification(message: string): Promise<void> {
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const adminUserId = process.env.LINE_ADMIN_USER_ID;

  if (!channelAccessToken || !adminUserId) {
    console.warn("LINE notification skipped: LINE_CHANNEL_ACCESS_TOKEN or LINE_ADMIN_USER_ID is not configured.");
    return;
  }

  try {
    const response = await fetch(LINE_PUSH_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${channelAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: adminUserId,
        messages: [
          {
            type: "text",
            text: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      const responseText = await response.text().catch(() => "");
      console.error(`LINE notification failed: ${response.status} ${responseText}`);
    }
  } catch (error: any) {
    console.error("LINE notification error:", error.message);
  }
}
