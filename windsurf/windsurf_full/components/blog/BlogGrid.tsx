import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col gap-4 group">
                            {/* Square Thumbnail */}
                            <div className="w-full aspect-square bg-gray-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-gray-400">
                                Thumb
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl md:text-2xl font-bold group-hover:text-indigo-500 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex text-sm font-medium hover:underline underline-offset-4 decoration-2 decoration-indigo-500"
                                    >
                                        Leer
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
