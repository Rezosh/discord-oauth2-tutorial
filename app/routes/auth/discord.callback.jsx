import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  // Get the code from the query string
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  // If we don't have a code, authorization failed
  if (!code) {
    return json({
      status: 400,
      error: "An error occured while authorizing. Please try again.",
    });
  }

  // Exchange the code for an access token
  const response = await fetch("https://discord.com/api/v10/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    }).toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const credentials = await response.json();

  return json(credentials);
};
