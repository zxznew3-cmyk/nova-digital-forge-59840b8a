import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nova/Navbar";
import { Hero } from "@/components/nova/Hero";
import { Services } from "@/components/nova/Services";
import { WhyUs } from "@/components/nova/WhyUs";
import { Testimonials } from "@/components/nova/Testimonials";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — We Build Powerful Digital Experiences" },
      { name: "description", content: "Nova is a modern digital agency creating premium websites, mobile apps, and digital products for ambitious businesses." },
      { property: "og:title", content: "Nova — Premium Digital Agency" },
      { property: "og:description", content: "Modern websites and mobile apps that help businesses grow faster." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
