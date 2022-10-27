export const getUserDetails = async (accessToken) => {
  const response = await fetch("https://discord.com/api/v10/users/@me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await response.json();
  return json;
};
