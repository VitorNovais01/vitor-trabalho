export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">
            Sobre a Bioenergy
          </h2>

          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
            A Bioenergy é uma empresa comprometida com o desenvolvimento
            de soluções energéticas sustentáveis, promovendo inovação,
            eficiência e responsabilidade ambiental para um futuro melhor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Missão
            </h3>

            <p className="text-gray-800 leading-relaxed">
              Desenvolver soluções sustentáveis que gerem valor para
              clientes, parceiros e sociedade, contribuindo para a
              preservação do meio ambiente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Visão
            </h3>

            <p className="text-gray-800 leading-relaxed">
              Ser referência nacional em inovação e sustentabilidade,
              impulsionando a transição para fontes de energia mais limpas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Valores
            </h3>

            <ul className="text-gray-800 space-y-2">
              <li>• Sustentabilidade</li>
              <li>• Ética</li>
              <li>• Inovação</li>
              <li>• Excelência</li>
              <li>• Responsabilidade Ambiental</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
