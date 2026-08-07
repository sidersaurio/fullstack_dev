import { MOCK_PROJECTS } from "@/lib/aboutData";

export default function ProjectsSection() {
    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Projects</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {MOCK_PROJECTS.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            {/* Image Placeholder */}
                            <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-gray-400 group-hover:scale-[1.02] transition-transform duration-300">
                                Project Img
                            </div>

                            <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
