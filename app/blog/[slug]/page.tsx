import Updates from "@/app/sections/updates";
import markdownToHtml, { getPostBySlug } from "@/lib/blog-utils";
import React from "react";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col mx-auto items-center py-24 p-6 gap-8">
      <div className="flex flex-col items-center pb-12">
        <h4>{post.frontmatter.title}</h4>
        <p>{post.frontmatter.date}</p>
      </div>
      <div
        className="prose max-w-2xl w-full"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Updates />
    </div>
  );
}
