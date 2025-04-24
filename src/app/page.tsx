export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo ao ChatDev</h1>
          <p className="text-gray-600 mb-6">
            Um chat moderno, leve e seguro. Conecte-se com seus amigos em tempo real!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/login"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Entrar
            </a>
            <a
              href="/signup"
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition"
            >
              Criar conta
            </a>
          </div>
        </div>
      </main>
  );
}
