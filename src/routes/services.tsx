import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Services } from "@/components/nova/Services";

export default function ServicesPage() {
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
