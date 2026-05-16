import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-neon-blue/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-[120px]"
      />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm text-neon-blue mb-3 uppercase tracking-widest">{eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            {title} {accent && <span className="text-gradient">{accent}</span>}
          </h1>
          {subtitle && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
