export default function Index() {
  return (
    <div className='flex items-center justify-center h-full bg-gray-900'>
      <a
        href={process.env.DISCORD_AUTH_URL}
        className='bg-indigo-600 rounded-md px-4 py-2 text-white text-xl hover:cursor-pointer'>
        Login
      </a>
    </div>
  );
}
