import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF4C4C]">
            Track Your Payments Easily
          </h1>
          <p className="text-xl text-white/80">
            Manage loans, downpayments, and other payments with ease. Stay on top of your finances
            with our powerful tracking tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white rounded-lg">
              Sign Up for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}