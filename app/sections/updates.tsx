import Section from "@/components/section";
import { getAllBlogPosts } from "@/lib/blog-utils";
import Link from "next/link";
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
        <div className="grid gap-4 sm:gap-8 lg:gap-16 grid-cols-1 justify-center sm:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <div key={post.slug} className="flex flex-col items-center group">
              <a
                className="h-48 w-[312px] bg-gray-300 block"
                href={`/blog/${post.slug}`}
              />
              <div className="flex flex-col px-2 py-2 items-center hover:text-hover group">
                <Link
                  className="text-2xl font-sans-header"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
                <p className="text-sm">{formatDate(post.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
