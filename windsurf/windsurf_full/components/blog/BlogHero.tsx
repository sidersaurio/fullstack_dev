import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default function BlogHero({ post }: { post: BlogPost }) {
    return (
        <section className="w-full py-12 md:py-20 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="w-full aspect-video bg-gray-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-gray-400 text-lg">
                        Hero Image
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="pt-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-gray-700 dark:hover:bg-gray-200"
                            >
                                Leer más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
