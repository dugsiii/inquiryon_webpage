import markdownToHtml, { getPostBySlug } from "@/lib/blog-utils";
import React from "react";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col mx-auto max-w-2xl py-24 gap-8 prose">
      <div className="flex flex-col items-center">
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.date}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
