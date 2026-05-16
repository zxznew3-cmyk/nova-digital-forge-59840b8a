import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Portfolio } from "@/components/nova/Portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nova Digital Agency" },
      { name: "description", content: "Selected work from Nova: business websites, restaurants, fashion stores, mobile apps and dashboards." },
      { property: "og:title", content: "Portfolio — Nova" },
      { property: "og:description", content: "Recent launches across web, mobile and commerce." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Selected work"
          title="Recent"
          accent="launches"
          subtitle="A showcase of products we've designed and shipped for founders and teams worldwide."
        />
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
