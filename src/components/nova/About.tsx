import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-neon-blue mb-3 uppercase tracking-widest">About Nova</p>
            <h2 className="text-4xl md:text-6xl font-bold">
              A digital studio for the <span className="text-gradient">next decade</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nova is a digital agency focused on building high-quality web and mobile solutions for modern businesses. We're a small team of designers and engineers obsessed with craft, performance, and the details that make products feel alive.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { v: "2021", l: "Founded" },
                { v: "12", l: "Team members" },
                { v: "18", l: "Countries served" },
                { v: "$24M", l: "Client revenue driven" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-neon-purple/40 pl-4">
                  <div className="text-3xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border border-neon-purple/30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-32 rounded-3xl bg-gradient-primary glow flex items-center justify-center">
                <span className="font-display text-5xl font-bold">N</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
