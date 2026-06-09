import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-950 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Bioenergy
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
