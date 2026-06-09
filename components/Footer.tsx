import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bioenergy
            </h3>

            <p className="text-gray-300">
              Soluções sustentáveis para um futuro melhor.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Navegação
            </h4>

            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/projetos">Projetos</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contato
            </h4>

            <p>📧 contato@bioenergy.com.br</p>
            <p>📞 (19) 99999-9999</p>
            <p>📍 Campinas - SP</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Redes Sociais
            </h4>

            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>YouTube</p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Bioenergy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
