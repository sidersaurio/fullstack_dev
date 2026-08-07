import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllPosts } from "@/lib/api";

export default async function Blog() {
    const posts = await getAllPosts();
    const heroPost = posts[0];
    const gridPosts = posts.slice(1, 7);

    if (!heroPost) return null;

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
            <Header />
            <main className="flex-1 flex flex-col">
                <BlogHero post={heroPost} />
                <BlogGrid posts={gridPosts} />
            </main>
            <Footer />
        </div>
    );
}
