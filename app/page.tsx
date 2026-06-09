import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-800">
                Nossos Projetos
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Desenvolvemos soluções sustentáveis para geração de energia
                renovável e preservação ambiental.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Energia Solar
                </h3>

                <p className="text-gray-600">
                  Sistemas fotovoltaicos para residências, empresas e indústrias.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Biomassa
                </h3>

                <p className="text-gray-600">
                  Transformação de resíduos orgânicos em energia limpa.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Sustentabilidade
                </h3>

                <p className="text-gray-600">
                  Projetos focados na redução dos impactos ambientais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
