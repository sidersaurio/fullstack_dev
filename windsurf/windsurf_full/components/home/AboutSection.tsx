import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white font-medium text-lg">
                        Profile Image Placeholder
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About me</h2>
                        <div className="space-y-4 text-base text-gray-600 dark:text-gray-300">
                            <p>
                                Hello! I am a passionate developer building modern web applications.
                                I love exploring new technologies and creating intuitive user experiences.
                            </p>
                            <p>
                                With a background in engineering, I approach problems with a structured mindset
                                while keeping creativity at the forefront of my work.
                            </p>
                        </div>
                        <div className="pt-2">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-gray-700 dark:hover:bg-gray-200"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
