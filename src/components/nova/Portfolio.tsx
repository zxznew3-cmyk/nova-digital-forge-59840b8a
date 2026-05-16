import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Helios Capital", category: "Business", tag: "Web", color: "from-blue-500/40 to-cyan-500/40" },
  { title: "Saffron Kitchen", category: "Restaurant", tag: "Web", color: "from-orange-500/40 to-red-500/40" },
  { title: "Maison Noir", category: "Fashion", tag: "E-commerce", color: "from-pink-500/40 to-purple-500/40" },
  { title: "Pulse Fitness", category: "Mobile App", tag: "App", color: "from-green-500/40 to-emerald-500/40" },
  { title: "Orbit Analytics", category: "SaaS", tag: "Web", color: "from-violet-500/40 to-indigo-500/40" },
  { title: "Wander", category: "Travel App", tag: "App", color: "from-teal-500/40 to-blue-500/40" },
];

const filters = ["All", "Web", "App", "E-commerce"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-neon-blue mb-3 uppercase tracking-widest">Selected work</p>
            <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">
              Recent <span className="text-gradient">launches</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active === f
                    ? "bg-gradient-primary text-primary-foreground glow"
                    : "glass hover:border-white/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href="/contact"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 grid-bg opacity-20" />

                {/* Mock browser/phone frame */}
                <div className="absolute inset-8 rounded-2xl glass-strong overflow-hidden">
                  <div className="flex gap-1.5 p-3 border-b border-white/10">
                    <span className="size-2 rounded-full bg-white/20" />
                    <span className="size-2 rounded-full bg-white/20" />
                    <span className="size-2 rounded-full bg-white/20" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-2 w-2/3 rounded bg-white/20" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-lg bg-white/10" />
                      <div className="h-12 rounded-lg bg-white/10" />
                    </div>
                    <div className="h-20 rounded-lg bg-white/5 mt-2" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider">{p.category}</p>
                    <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
                  </div>
                  <div className="size-10 rounded-full glass-strong flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
