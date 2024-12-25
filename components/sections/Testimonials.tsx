import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { testimonials } from "@/constants/testimonials";
import BlurFade from "../ui/blur-fade";

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) => {
  return (
    <figure className="group/card relative mx-3 w-80 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900/70 hover:border-primary/30 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover/card:opacity-100 transition-all duration-300" />
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className="h-12 w-12 rounded-full flex items-center justify-center text-white bg-primary text-lg font-medium transition-transform duration-300 group-hover/card:scale-110">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <figcaption className="text-base font-medium text-white/90">
              {name}
            </figcaption>
            <p className="text-sm text-white/60">{role}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm text-white/80 leading-relaxed">{text}</blockquote>
      </div>
    </figure>
  );
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full">
            <div className="container mx-auto px-4">
                <BlurFade delay={0.3} inView> 
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm">
                            Testimonials
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
                            What our users say
                        </h2>
                    </div>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <div className="relative w-full overflow-hidden">
                        <Marquee className="py-4" reverse={false}>
                            {firstRow.map((testimonial) => (
                                <ReviewCard key={testimonial.name} {...testimonial} />
                            ))}
                        </Marquee>
                        <Marquee className="py-4" reverse={true}>
                            {secondRow.map((testimonial) => (
                                <ReviewCard key={testimonial.name} {...testimonial} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}