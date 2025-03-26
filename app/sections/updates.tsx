import Section from "@/components/section";
import { getAllBlogPosts } from "@/lib/blog-utils";
import React from "react";

export default async function Updates() {
  const posts = await getAllBlogPosts();
  return (
    <Section id="about">
      <div className="flex flex-col items-center py-16">
        <h3>Latest Updates</h3>
        <div className="flex flex-row items-center">
          {posts.slice(0, 3).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="underline text-accent"
            >
              {post.title}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
