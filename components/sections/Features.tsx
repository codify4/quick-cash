import { Bell, ChartBar, CreditCard, Shield } from "lucide-react";
import BlurFade from "../ui/blur-fade";

const features = [
  {
    icon: CreditCard,
    title: "Track Payments",
    description: "Keep track of all your payments in one place"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about upcoming payments"
  },
  {
    icon: ChartBar,
    title: "Visual Reports",
    description: "See your financial data come to life"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level security for your data"
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-32">
      <div className="container mx-auto px-4">
        <BlurFade>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
              Everything you need to track your payments
            </h2>
          </div>
        </BlurFade>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <BlurFade
              key={index}
              delay={index * 0.2}
            >
              <div className="group relative h-full">
                <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/0 to-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-[#0A0A0A] rounded-3xl p-6 h-full border border-white/[0.05] group-hover:border-primary/20 transition-colors duration-300 flex flex-col">
                  <div className="relative flex-1">
                    <div className="mb-8">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl transform rotate-45 group-hover:rotate-180 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent rounded-xl transform -rotate-45 group-hover:rotate-180 transition-all duration-500" />
                        <feature.icon className="h-6 w-6 text-primary relative z-10" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/50">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}