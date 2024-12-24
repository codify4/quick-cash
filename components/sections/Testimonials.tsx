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
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-primary">{name.charAt(0)}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
    return (
        <div id="testimonials">
            <BlurFade delay={0.3} inView> 
                <div className="text-4xl font-bold text-center mb-12">What our users say</div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((testimonial) => (
                            <ReviewCard key={testimonial.name} {...testimonial} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </BlurFade>
        </div>
    );
}