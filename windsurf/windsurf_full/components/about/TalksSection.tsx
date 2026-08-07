import Link from "next/link";
import { MOCK_TALKS } from "@/lib/aboutData";

export default function TalksSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Talks</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {MOCK_TALKS.map((talk) => (
                        <div key={talk.id} className="flex flex-col sm:flex-row gap-6 items-start bg-white dark:bg-black/20 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            {/* Thumbnail */}
                            <div className="w-full sm:w-32 h-32 shrink-0 bg-gray-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-xs text-gray-400">
                                Talk Thumb
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold text-xl">{talk.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {talk.excerpt}
                                </p>
                                <Link
                                    href={talk.link}
                                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 mt-auto"
                                >
                                    Ver charla
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
