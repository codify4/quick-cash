import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}