import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Briefcase, ShoppingBag, Rocket } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance websites built with modern frameworks and clean code." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feeling iOS & Android apps with elegant interactions." },
  { icon: Palette, title: "UI/UX Design", desc: "Award-worthy interfaces designed around real user behavior." },
  { icon: Briefcase, title: "Business Websites", desc: "Conversion-focused sites that turn visitors into customers." },
  { icon: ShoppingBag, title: "E-commerce Solutions", desc: "Scalable storefronts with smooth checkout and analytics." },
  { icon: Rocket, title: "Landing Pages", desc: "Pixel-perfect launch pages built to convert from day one." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-neon-blue mb-3 uppercase tracking-widest">What we do</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Services that move <span className="text-gradient">brands forward</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl glass p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10" />
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary glow mb-6">
                  <s.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
