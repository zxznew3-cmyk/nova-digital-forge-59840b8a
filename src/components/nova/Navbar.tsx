import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-primary glow" />
            <span className="font-display text-xl font-bold tracking-tight">Nova</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm text-muted-foreground hover:text-foreground transition-colors relative group ${
                    isActive ? "text-foreground" : ""
                  }`
                }
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform"
            >
              Start Project
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-6 space-y-4"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
