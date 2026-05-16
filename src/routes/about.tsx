import { Navbar } from "@/components/nova/Navbar";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";
import { PageHeader } from "@/components/nova/PageHeader";
import { About } from "@/components/nova/About";
import { Testimonials } from "@/components/nova/Testimonials";
import { WhyUs } from "@/components/nova/WhyUs";

export default function AboutPage() {
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
