const DISCORD_AUTH_URL =
  "https://discord.com/api/oauth2/authorize?client_id=1035228752692641802&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify";

export default function Index() {
  return (
    <div className='flex items-center justify-center h-full bg-gray-900'>
      <a
        href={DISCORD_AUTH_URL}
        className='bg-indigo-600 rounded-md px-4 py-2 text-white text-xl hover:cursor-pointer'>
        Login
      </a>
    </div>
  );
}
