import { motion } from "framer-motion";
import { Zap, Sparkles, Smartphone, Search, Shield, LifeBuoy } from "lucide-react";

const items = [
  { icon: Zap, title: "Fast Delivery", desc: "Ship in weeks, not months." },
  { icon: Sparkles, title: "Modern Design", desc: "Designs that feel ahead of their time." },
  { icon: Smartphone, title: "Responsive Development", desc: "Flawless on every screen size." },
  { icon: Search, title: "SEO Friendly", desc: "Built to rank from day one." },
  { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade architecture." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "We grow with you, post-launch." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm text-neon-purple mb-3 uppercase tracking-widest">Why Nova</p>
            <h2 className="text-4xl md:text-6xl font-bold">
              The unfair advantage your <span className="text-gradient">product needs</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              We combine engineering precision with bold design to deliver products that stand out and scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl glass p-6 hover:border-white/20 transition-colors"
              >
                <it.icon className="size-6 text-neon-blue mb-4" />
                <h3 className="font-semibold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
