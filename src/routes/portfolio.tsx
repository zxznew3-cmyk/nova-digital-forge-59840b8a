import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Portfolio } from "@/components/nova/Portfolio";

export default function PortfolioPage() {
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
