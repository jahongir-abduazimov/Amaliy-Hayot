import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Get all posts sorted by date
 */
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
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
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  let htmlContent = result.toString();
  
  // Add IDs to headings for table of contents
  htmlContent = htmlContent.replace(/<h([1-6])>(.*?)<\/h[1-6]>/g, (match, level, content) => {
    // Extract text from heading (remove any HTML tags)
    const text = content.replace(/<[^>]*>/g, '').trim();
    // Create a slug from the text
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
    return `<h${level} id="${slug}">${content}</h${level}>`;
  });
  
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
