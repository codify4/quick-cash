import { Bell, ChartBar, CreditCard, Shield } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Track Payments",
    description: "Keep track of all your payments in one place with our intuitive dashboard."
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a payment with customizable notifications and reminders."
  },
  {
    icon: ChartBar,
    title: "Visualize Progress",
    description: "See your payment progress with beautiful charts and analytics."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data is protected with bank-level security."
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything you need to track your payments
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/10 hover:border-[#FF4C4C]/50 transition-colors duration-300 bg-[#121212]"
            >
              <feature.icon className="h-12 w-12 text-[#FF4C4C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}