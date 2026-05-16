import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { INSTAGRAM_URL, EMAIL } from "@/lib/nova-contact";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary glow" />
              <span className="font-display text-xl font-bold">Nova</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Building powerful digital experiences for ambitious companies around the world.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Twitter" className="size-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all"><Twitter className="size-4" /></a>
              <a href="#" aria-label="LinkedIn" className="size-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all"><Linkedin className="size-4" /></a>
              <a href="#" aria-label="GitHub" className="size-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all"><Github className="size-4" /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all"><Instagram className="size-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-colors">{EMAIL}</a></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Start a project</Link></li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
