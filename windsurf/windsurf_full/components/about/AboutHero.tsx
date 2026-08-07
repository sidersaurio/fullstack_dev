import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-3xl shadow-xl flex items-center justify-center text-white font-medium text-lg">
                            Profile Photo
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About me</h1>
                        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                            <p>
                                I am a dedicated software engineer with a passion for building robust and scalable web applications.
                            </p>
                            <p>
                                My journey began with a curiosity for how things work, leading me to master clean code and modern architectures.
                            </p>
                            <p>
                                When I'm not coding, I enjoy sharing knowledge with the community and exploring new tech trends.
                            </p>
                        </div>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-gray-700 dark:hover:bg-gray-200"
                            >
                                Contactar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
