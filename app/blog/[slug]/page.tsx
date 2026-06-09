import { supabase } from "../../../lib/supabase";

export default async function Post({
  params,
}: {
  params: { slug: string };
}) {

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) {
    return <h1>Post não encontrado</h1>;
  }

  return (
    <article className="container mx-auto py-10">

      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-8"
      />

      <h1 className="text-5xl font-bold mb-5">
        {post.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {post.excerpt}
      </p>

      <div>
        {post.content}
      </div>

    </article>
  );
}