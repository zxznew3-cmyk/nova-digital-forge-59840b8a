import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { About } from "@/components/nova/About";
import { Testimonials } from "@/components/nova/Testimonials";
import { WhyUs } from "@/components/nova/WhyUs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nova Digital Agency" },
      { name: "description", content: "Nova is a digital agency focused on building high-quality web and mobile solutions for modern businesses." },
      { property: "og:title", content: "About Nova" },
      { property: "og:description", content: "A small team obsessed with craft, performance and the details." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About"
          title="A digital studio for the"
          accent="next decade"
          subtitle="We're a small team of designers and engineers building products with craft and conviction."
        />
        <About />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
