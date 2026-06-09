import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Energia Sustentável
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Transformando o futuro através da
              <span className="text-green-200">
                {" "}Bioenergia
              </span>
            </h1>

            <p className="mt-6 text-lg text-green-100">
              Soluções inovadoras em energia renovável,
              sustentabilidade e responsabilidade ambiental.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Conheça nossos projetos
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/logo-bioenergy.png"
              alt="Logo Bioenergy"
              width={550}
              height={550}
              priority
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
