import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function BlogSection() {
    const posts = await getAllPosts();
    const featuredPost = posts[0];
    const recentPosts = posts.slice(1, 4);

    if (!featuredPost) return null;

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Latest from the Blog</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Featured Post - Left Column */}
                    <div className="flex flex-col gap-6">
                        <div className="w-full aspect-video bg-gray-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-gray-400">
                            Featured Image
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-sm text-gray-500">{featuredPost.date}</span>
                            <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{featuredPost.excerpt}</p>
                            <div>
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="font-medium hover:underline underline-offset-4 decoration-2 decoration-indigo-500"
                                >
                                    Leer
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Recent Posts List - Right Column */}
                    <div className="flex flex-col gap-8">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="flex gap-4 items-start group">
                                {/* Thumbnail */}
                                <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-xs text-gray-400">
                                    Thumb
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold group-hover:text-indigo-500 transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-indigo-500 mt-1"
                                    >
                                        Leer
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
