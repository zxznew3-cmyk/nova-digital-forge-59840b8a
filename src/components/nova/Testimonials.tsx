import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nova transformed our entire digital presence. The team shipped faster than any agency we've worked with — and the quality is unreal.",
    name: "Amelia Chen",
    role: "CEO, Helios Capital",
  },
  {
    quote: "Working with Nova felt like having an in-house product team. Our app launch exceeded every metric we set.",
    name: "Marcus Reid",
    role: "Founder, Pulse Fitness",
  },
  {
    quote: "The attention to detail is something I haven't seen anywhere else. Nova is the studio I recommend to every founder.",
    name: "Sofia Alvarez",
    role: "Head of Brand, Maison Noir",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-neon-purple mb-3 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Loved by <span className="text-gradient">founders</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="size-14 rounded-2xl bg-gradient-primary glow flex items-center justify-center">
              <Quote className="size-6" />
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-12 pt-16 min-h-[280px] relative overflow-hidden">
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-neon-blue/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-neon-purple/20 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative text-center"
              >
                <p className="text-xl md:text-2xl leading-relaxed font-display">"{t.quote}"</p>
                <div className="mt-8">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
