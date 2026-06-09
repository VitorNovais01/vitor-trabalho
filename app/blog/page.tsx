import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function Blog() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*");

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-red-500">Erro ao carregar os posts.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-10">Blog Bioenergy</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts?.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="shadow rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
