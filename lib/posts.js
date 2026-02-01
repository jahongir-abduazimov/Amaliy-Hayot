import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Recursively find all markdown files in posts directory and subdirectories
 */
function getAllMarkdownFiles(dir = postsDirectory, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively search in subdirectories
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Get all posts sorted by date
 */
export function getAllPosts() {
  const markdownFiles = getAllMarkdownFiles();
  const allPostsData = markdownFiles.map((filePath) => {
    const fileName = path.basename(filePath);
    const slug = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    // Handle missing dates - posts without dates go to the end
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;

    // Convert dates to Date objects for proper comparison (descending order - newest first)
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

/**
 * Get post data by slug
 */
export function getPostBySlug(slug) {
  const markdownFiles = getAllMarkdownFiles();

  // Find the file with matching slug
  for (const filePath of markdownFiles) {
    const fileName = path.basename(filePath);
    const fileSlug = fileName.replace(/\.md$/, "");

    if (fileSlug === slug) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      };
    }
  }

  return null;
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs() {
  const markdownFiles = getAllMarkdownFiles();
  return markdownFiles.map((filePath) => {
    const fileName = path.basename(filePath);
    return fileName.replace(/\.md$/, "");
  });
}

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown) {
  const result = await remark().use(gfm).use(html).process(markdown);
  let htmlContent = result.toString();

  // Add IDs to headings for table of contents
  htmlContent = htmlContent.replace(
    /<h([1-6])>(.*?)<\/h[1-6]>/g,
    (match, level, content) => {
      // Extract text from heading (remove any HTML tags)
      const text = content.replace(/<[^>]*>/g, "").trim();
      // Create a slug from the text
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with single
        .trim();
      return `<h${level} id="${slug}">${content}</h${level}>`;
    },
  );

  return htmlContent;
}

/**
 * Calculate reading time in minutes
 */
export function getReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Get related posts by category (excluding current post)
 */
export function getRelatedPosts(currentSlug, category, limit = 3) {
  if (!category) return [];

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, limit);

  return relatedPosts;
}
