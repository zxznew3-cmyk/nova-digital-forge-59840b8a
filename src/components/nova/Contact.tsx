import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from "@/lib/nova-contact";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass rounded-3xl p-8 space-y-6"
            >
              <div>
                <h3 className="font-semibold mb-4">Get in touch</h3>
                <div className="space-y-4">
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm hover:text-neon-blue transition-colors">
                    <div className="size-10 rounded-xl glass flex items-center justify-center">
                      <Mail className="size-4" />
                    </div>
                    {EMAIL}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-neon-purple transition-colors">
                    <div className="size-10 rounded-xl glass flex items-center justify-center">
                      <MessageCircle className="size-4" />
                    </div>
                    WhatsApp · {WHATSAPP_NUMBER_DISPLAY}
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-neon-purple transition-colors">
                    <div className="size-10 rounded-xl glass flex items-center justify-center">
                      <Instagram className="size-4" />
                    </div>
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="font-semibold mb-4">Follow</h3>
                <div className="flex gap-3">
                  {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="size-10 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-sm text-muted-foreground">Remote-first<br/>Working worldwide</p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={onSubmit}
              className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Project details</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your idea..."
                  className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow hover:scale-105 transition-all"
              >
                {submitted ? "Message sent ✓" : "Send Message"}
                <Send className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs text-muted-foreground uppercase tracking-wider">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all"
      />
    </div>
  );
}
