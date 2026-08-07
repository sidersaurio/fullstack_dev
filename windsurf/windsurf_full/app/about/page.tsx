import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import ProjectsSection from "@/components/about/ProjectsSection";
import TalksSection from "@/components/about/TalksSection";

export default function About() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
            <Header />
            <main className="flex-1 flex flex-col">
                <AboutHero />
                <ProjectsSection />
                <TalksSection />
            </main>
            <Footer />
        </div>
    );
}
