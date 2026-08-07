import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1 flex flex-col">
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
