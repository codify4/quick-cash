import { ArrowRight } from "lucide-react";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="w-full py-32 relative bg-black/40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/50 to-black/80" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
            <div className="container mx-auto px-4 relative">
                <BlurFade>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm">
                            Get Started
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
                            Ready to Take Control of Your Finances?
                        </h2>
                    </div>
                </BlurFade>
                <BlurFade delay={0.2}>
                    <div className="flex flex-col items-center text-center">
                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                            Join QuickCash and make your life easier while managing your finances and tracking your expenses. Start your journey today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto px-8 py-3 rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors duration-300">
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                            </Button>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default CTA;