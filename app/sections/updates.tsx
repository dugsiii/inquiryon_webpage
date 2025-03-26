import Section from "@/components/section";
import { getAllBlogPosts } from "@/lib/blog-utils";
import React from "react";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Updates() {
  const posts = await getAllBlogPosts();
  return (
    <Section id="about">
      <div className="flex flex-col items-center py-16 gap-12 w-full">
        <h3>Latest Blog Posts</h3>
        <div className="flex flex-row flex-1 gap-16">
          {posts.slice(0, 3).map((post) => (
            <a key={post.slug} className="flex flex-col justify-center">
              <a
                className="h-40 w-64 bg-gray-300"
                href={`/blog/${post.slug}`}
              />
              <div className="flex flex-col px-4 py-2">
                <a
                  className="text-lg font-sans-header font-semibold"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </a>
                <p>{formatDate(post.date)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
