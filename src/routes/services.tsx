import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Services } from "@/components/nova/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nova Digital Agency" },
      { name: "description", content: "Web development, mobile apps, UI/UX design, e-commerce and landing pages — engineered to grow your business." },
      { property: "og:title", content: "Services — Nova" },
      { property: "og:description", content: "Premium digital services for ambitious brands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="What we do"
          title="Services that move"
          accent="brands forward"
          subtitle="From first sketch to production launch — we design and build the digital products your customers love."
        />
        <Services />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
