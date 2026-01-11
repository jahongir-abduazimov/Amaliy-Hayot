import { getAllPosts } from '@/lib/posts';

export async function GET() {
  try {
    const posts = getAllPosts();
    
    // Return only the data needed for search (no content)
    const postsForSearch = posts.map(post => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      category: post.category,
      date: post.date,
      image: post.image,
    }));

    return Response.json(postsForSearch);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}