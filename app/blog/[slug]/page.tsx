import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { data: post, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      console.error(error);
      notFound();
    }

    if (!post) {
      notFound();
    }

    return (
      <article className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p>{post.content}</p>
      </article>
    );
  } catch (err) {
    console.error(err);
    notFound();
  }
}
