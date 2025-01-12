'use client'

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import CTA from "@/components/sections/CTA";
import { useEffect, useState } from "react";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
 
  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    )
 
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
  }, [])
 
  if (isStandalone) {
    return null 
  }
 
  return (
    <div>
      <h3>Install App</h3>
      <button>Add to Home Screen</button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {' '}
            ⎋{' '}
          </span>
          and then "Add to Home Screen"
          <span role="img" aria-label="plus icon">
            {' '}
            ➕{' '}
          </span>.
        </p>
      )}
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-32 pb-10 lg:pb-24 my-24 px-4">
          <Hero />
        </section>
        <section id="features" className="py-36 flex items-center justify-center">
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