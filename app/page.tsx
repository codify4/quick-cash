import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import CTA from "@/components/sections/CTA";
import { InstallPrompt } from "@/components/install-prompt";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-20 lg:pt-32 pb-10 px-4">
          <Hero />
        </section>
        <section id="features" className="py-32 flex items-center justify-center">
          <Features />
        </section>
        <section className="py-24">
          <Testimonials />
        </section>
        <section className="pt-24">
          <CTA />
        </section>
        <InstallPrompt />
      </main>
      <Footer />
    </>
  );
}