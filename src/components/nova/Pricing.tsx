import { motion } from "framer-motion";
import { Check, Globe, Smartphone, Rocket, Zap, Wrench, Clock, Sparkles } from "lucide-react";

const websitePlans = [
  {
    name: "Starter Website",
    price: "15,000",
    desc: "A clean launchpad for new brands.",
    features: [
      "Modern responsive website",
      "Up to 5 pages",
      "Fast loading & mobile friendly",
      "Basic SEO",
      "Contact form",
      "Modern UI",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    price: "20,000",
    desc: "For growing businesses that need more.",
    features: [
      "Advanced custom design",
      "Custom sections & animations",
      "Dashboard / basic CMS",
      "Optimized performance",
      "Premium UI/UX",
      "On-page SEO",
    ],
    featured: true,
  },
  {
    name: "E-Commerce Website",
    price: "25,000+",
    desc: "Sell online with a full storefront.",
    features: [
      "Products system",
      "Cart & checkout",
      "Admin panel",
      "Order management",
      "Responsive design",
      "Payment-ready",
    ],
    featured: false,
  },
];

const appPlans = [
  {
    name: "Mobile App",
    price: "20,000",
    desc: "Cross-platform Flutter app.",
    features: [
      "Android & iOS support",
      "Clean UI",
      "Fast performance",
      "API integration",
      "Responsive layouts",
      "Built with Flutter",
    ],
    featured: false,
  },
  {
    name: "Advanced App",
    price: "30,000+",
    desc: "Production-grade app with full backend.",
    features: [
      "Authentication",
      "Push notifications",
      "Advanced animations",
      "Firebase integration",
      "Scalable architecture",
      "API & data layer",
    ],
    featured: true,
  },
];

const extras = [
  { name: "Online Payment Gateway", price: "+5,000" },
  { name: "Custom Dashboard", price: "+4,000" },
  { name: "Advanced Authentication System", price: "+3,000" },
  { name: "Push Notifications", price: "+2,000" },
  { name: "Multi-language Support", price: "+2,500" },
  { name: "Live Chat Integration", price: "+1,500" },
];

const delivery = [
  { service: "Website", time: "5–10 Days" },
  { service: "Mobile App", time: "7–14 Days" },
  { service: "Full Package", time: "10–20 Days" },
];

const tech = ["Flutter", "Dart", "React.js", "Tailwind CSS", "Firebase", "REST APIs"];

function PlanCard({ plan, i }: { plan: (typeof websitePlans)[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`relative rounded-3xl p-8 ${
        plan.featured ? "glass-strong glow" : "glass"
      }`}
      style={
        plan.featured
          ? {
              backgroundImage:
                "linear-gradient(oklch(0.15 0.04 270 / 0.8), oklch(0.15 0.04 270 / 0.8)), var(--gradient-primary)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "2px solid transparent",
            }
          : undefined
      }
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="text-sm text-muted-foreground mt-2 min-h-10">{plan.desc}</p>

      <div className="mt-6 mb-6 flex items-baseline gap-2">
        <span className="text-5xl font-bold">{plan.price}</span>
        <span className="text-muted-foreground text-sm">EGP</span>
      </div>

      <a
        href="/contact"
        className={`block text-center rounded-full py-3 font-medium transition-all ${
          plan.featured
            ? "bg-gradient-primary text-primary-foreground hover:scale-105"
            : "glass hover:border-white/20"
        }`}
      >
        Get Started
      </a>

      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="size-4 text-neon-blue mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SectionHeading({ icon: Icon, eyebrow, title, accent }: { icon: React.ElementType; eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
        <Icon className="size-4 text-neon-blue" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container mx-auto px-6 space-y-28">
        {/* Website Plans */}
        <div>
          <SectionHeading icon={Globe} eyebrow="Website Development" title="Websites built to" accent="convert" />
          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {websitePlans.map((p, i) => (
              <PlanCard key={p.name} plan={p} i={i} />
            ))}
          </div>
        </div>

        {/* App Plans */}
        <div>
          <SectionHeading icon={Smartphone} eyebrow="Mobile App Development" title="Apps that" accent="scale" />
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {appPlans.map((p, i) => (
              <PlanCard key={p.name} plan={p} i={i} />
            ))}
          </div>
        </div>

        {/* Full Package */}
        <div>
          <SectionHeading icon={Rocket} eyebrow="Full Package" title="Complete" accent="Digital Solution" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto rounded-3xl p-10 md:p-12 glass-strong glow overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.15 0.04 270 / 0.85), oklch(0.15 0.04 270 / 0.85)), var(--gradient-primary)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              border: "2px solid transparent",
            }}
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-neon-purple/30 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-neon-blue/30 blur-[100px]" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium mb-4">
                  <Sparkles className="size-3" /> Best Value
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Website + Mobile App</h3>
                <p className="text-muted-foreground mt-3">
                  Everything you need to launch a full digital product — built, polished, and supported.
                </p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-gradient">30,000</span>
                  <span className="text-muted-foreground">EGP</span>
                </div>
                <a
                  href="/contact"
                  className="mt-8 inline-block rounded-full bg-gradient-primary text-primary-foreground px-8 py-3 font-medium hover:scale-105 transition-transform"
                >
                  Start Your Project
                </a>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full Website",
                  "Mobile App",
                  "Modern UI/UX",
                  "Flutter + Dart",
                  "Responsive Design",
                  "API Integration",
                  "Performance Optimization",
                  "SEO-ready Website",
                  "Admin Dashboard (basic)",
                  "Technical Support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-neon-blue mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Extras */}
        <div>
          <SectionHeading icon={Zap} eyebrow="Add-ons" title="Advanced" accent="Features" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {extras.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 flex items-center justify-between hover:border-white/20 transition-colors"
              >
                <span className="text-sm">{e.name}</span>
                <span className="text-sm font-semibold text-gradient">{e.price} EGP</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech + Delivery + Revisions */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="size-5 text-neon-blue" />
              <h3 className="font-semibold">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-xs glass rounded-full px-3 py-1.5 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="size-5 text-neon-purple" />
              <h3 className="font-semibold">Delivery Time</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {delivery.map((d) => (
                <li key={d.service} className="flex justify-between">
                  <span className="text-muted-foreground">{d.service}</span>
                  <span className="font-medium">{d.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="size-5 text-neon-blue" />
              <h3 className="font-semibold">Revisions</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Every project includes <span className="text-foreground font-medium">2 free revisions</span> after delivery.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Additional edits: <span className="text-gradient font-semibold">150 EGP</span> per edit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
