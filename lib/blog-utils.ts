import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const contentDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPostFormat = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  imageUrl?: string; // Added field for image URL
};

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return {
    frontmatter: data,
    content: content,
    slug: realSlug,
  };
}

export async function getAllBlogPosts(): Promise<BlogPostFormat[]> {
  const filenames = fs.readdirSync(contentDirectory);

  const posts = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(contentDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        summary: data.summary || null,
        imageUrl: data.imageUrl || null,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
