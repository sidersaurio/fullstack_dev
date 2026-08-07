import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/blog/BlogGrid";
import { getPostBySlug, getAllPosts } from "@/lib/api";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return (
            <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold">Post not found</h1>
                    <Link href="/blog" className="mt-4 text-indigo-500 hover:underline">
                        Back to Blog
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    // Related posts: exclude current, take 6. We need to fetch all posts for this.
    // getPostBySlug already fetches all, so we might want to optimize this later or just fetch all here.
    const allPosts = await getAllPosts();
    const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 6);

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
            <Header />
            <main className="flex-1 flex flex-col">
                {/* Full Width Hero Image */}
                <div className="w-full h-[400px] md:h-[500px] bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-gray-400 text-3xl">
                    Full Width Hero Image
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-4 max-w-4xl -mt-20 relative bg-background rounded-t-3xl p-8 md:p-12 shadow-sm">
                    {/* Header: Title & Meta */}
                    <div className="flex flex-col gap-6 mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{post.title}</h1>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>By Author Name</span>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        <p className="lead text-xl md:text-2xl mb-8 font-medium text-foreground">{post.excerpt}</p>
                        {/* Dummy long content to simulate reading experience */}
                        <div className="space-y-6">
                            <p>{post.content}</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="w-full h-64 bg-gray-100 dark:bg-zinc-800/50 rounded-xl my-8 flex items-center justify-center text-sm text-gray-400">
                                Content Image Placeholder
                            </div>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3>Subheading</h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Posts Section */}
                <div className="container mx-auto px-4 py-16 border-t border-gray-100 dark:border-gray-800">
                    <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
                    <BlogGrid posts={relatedPosts} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
