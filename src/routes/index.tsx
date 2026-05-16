import { Navbar } from "@/components/nova/Navbar";
import { Hero } from "@/components/nova/Hero";
import { Services } from "@/components/nova/Services";
import { WhyUs } from "@/components/nova/WhyUs";
import { Testimonials } from "@/components/nova/Testimonials";
import { Footer } from "@/components/nova/Footer";
import { WhatsAppFloat } from "@/components/nova/WhatsAppFloat";

export default function Index() {
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
