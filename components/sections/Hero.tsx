import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Particles from "../ui/particles";
import BlurFade from "../ui/blur-fade";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 pb-24 px-4 relative">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <BlurFade>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#ff3a36] to-[#6b0200] animate-gradient">
              Track all Your Payments in One Tool
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto hover:text-white transition-colors duration-300">
              Manage expenses, loans and subscriptions with ease. Get started now and take control of your finances.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signin" className="w-9/12 sm:w-1/4">
                <Button className="w-full rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
        <div className="z-50">
          <BlurFade delay={0.5} className="z-50 w-full">
            <Image src="/dashboard-scr.png" alt="Dashboard Screenshot" width={1600} height={900} className="z-50 mt-10 rounded-xl" />
          </BlurFade>
        </div>
      </div>
      <Particles
        className="absolute inset-0 h-full w-full z-0"
        quantity={200}
        ease={80}
        refresh
      />
    </section>
  );
}