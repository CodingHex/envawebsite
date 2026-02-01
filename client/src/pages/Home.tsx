import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import ImpactSection from '@/components/ImpactSection';
import ClientsSection from '@/components/ClientsSection';
import MissionSection from '@/components/MissionSection';
import CertificationsSection from '@/components/CertificationsSection';
import CultureSection from '@/components/CultureSection';
import StoriesSection from '@/components/StoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Optimized Manufacturing / OEM Conversion Flow
 * ENVA – Premium Socks Manufacturing
 */
export default function Home() {
  return (
    <main className="w-full">
      <Navigation />

      {/* Hero – first impression */}
      <HeroSection />

      {/* What we manufacture */}
      <ProductsSection />

      {/* Scale, capacity & numbers */}
      <ImpactSection />

      {/* Brands that trust us */}
      <ClientsSection />

      {/* Responsibility & sustainability (process & values) */}
      <MissionSection />

      {/* Proof & compliance */}
      <CertificationsSection />

      {/* Internal stability & culture */}
      <CultureSection />

      {/* Stories & case-style content (optional but good for depth) */}
      <StoriesSection />

      {/* Social proof */}
      <TestimonialsSection />

      {/* Decision moment */}
      <ContactSection />
      <CTASection />

      <Footer />
    </main>
  );
}
