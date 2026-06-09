export default function Contato() {
  return (
    <div className="container mx-auto py-16">

      <h1 className="text-4xl font-bold mb-6">
        Contato
      </h1>

      <form className="space-y-4">

        <input
          placeholder="Nome"
          className="border p-3 w-full"
        />

        <input
          placeholder="Email"
          className="border p-3 w-full"
        />

        <textarea
          placeholder="Mensagem"
          className="border p-3 w-full"
        />

        <button
          className="bg-green-700 text-white px-6 py-3 rounded"
        >
          Enviar
        </button>

      </form>

    </div>
  );
}