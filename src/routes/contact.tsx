import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Contact } from "@/components/nova/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nova Digital Agency" },
      { name: "description", content: "Start your project with Nova. Message us on WhatsApp, Instagram or send us a brief — we respond within 24 hours." },
      { property: "og:title", content: "Contact Nova" },
      { property: "og:description", content: "Let's build something remarkable." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Let's build something"
          accent="remarkable"
          subtitle="Tell us about your project. We respond within 24 hours."
        />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
