import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { Pricing } from "@/components/nova/Pricing";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Pricing"
          title="Plans that"
          accent="scale with you"
          subtitle="Pick a plan that matches your stage. Every project includes design, development, and launch support."
        />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
