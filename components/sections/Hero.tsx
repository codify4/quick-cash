import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import Particles from "../ui/particles";
import BlurFade from "../ui/blur-fade";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <BlurFade>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6b0200]">
              Track all Your Payments in One Powerful Tool
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl text-white/80">
              Manage loans, downpayments, and other payments with ease. Stay on top of your finances
              with our powerful tracking tool.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <InteractiveHoverButton text="Get Started" className="hidden lg:block w-1/4 rounded-xl"/>
              <Button className="w-10/12 lg:hidden rounded-xl text-white bg-primary">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
      <Particles
        className="absolute inset-0 h-full w-full"
        quantity={200}
        ease={80}
        refresh
      />
    </section>
  );
}