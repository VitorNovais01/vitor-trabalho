export default function Projetos() {
  return (
    <section className="container mx-auto py-16">

      <h1 className="text-4xl font-bold">
        Projetos
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="shadow p-6 rounded-lg">
          Energia Solar
        </div>

        <div className="shadow p-6 rounded-lg">
          Biomassa
        </div>

        <div className="shadow p-6 rounded-lg">
          Sustentabilidade
        </div>

      </div>

    </section>
  );
}