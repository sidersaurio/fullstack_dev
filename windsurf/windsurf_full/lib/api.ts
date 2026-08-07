import { BlogPost } from "@/types/blog";

const API_URL = "http://localhost:3001";

export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        // Next.js extends fetch with caching capabilities. 
        // We can use 'no-store' or 'force-cache' depending on needs.
        // For now, let's treat it as dynamic data.
        const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug);
}
