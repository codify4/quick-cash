import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    quote: "QuickCash has transformed how I manage my business payments. It's intuitive and saves me hours every week."
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    quote: "The best payment tracking solution I've ever used. The reminders feature is a game-changer."
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
    quote: "Managing multiple property payments has never been easier. Highly recommended!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Trusted by thousands of users
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/50 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}