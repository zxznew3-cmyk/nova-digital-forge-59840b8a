import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Contact } from "@/components/nova/Contact";

export default function ContactPage() {
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
