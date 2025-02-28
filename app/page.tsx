import Link from "next/link";

function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-400">
      <div className="p-20 w-full text-center">
        <h1 className="font-black text-5xl">Teste de api</h1>
      </div>
      <div className="p-10 flex gap-12">
        <Link
          className="px-4 py-2 bg-zinc-700 rounded-2xl hover:bg-zinc-500 transition"
          href="/register"
        >
          Registro
        </Link>
        <Link
          className="px-4 py-2 bg-zinc-700 rounded-2xl hover:bg-zinc-500 transition"
          href="/users"
        >
          Usuarios
        </Link>
      </div>
    </div>
  );
}

export default Home;
