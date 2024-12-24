import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-32 pb-24 my-24 px-4">
          <Hero />
        </section>
        <section id="features" className="py-24 mt-64 lg:mt-36 flex items-center justify-center">
          <Features />
        </section>
        <section className="py-24">
          <Testimonials />
        </section>
        <section className="py-24">
        </section>
      </main>
      <Footer />
    </>
  );
}