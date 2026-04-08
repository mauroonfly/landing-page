import Hero from '@/components/landing/Hero';
import Metrics from '@/components/landing/Metrics';
import Features from '@/components/landing/Features';
import Companies from '@/components/landing/Companies';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Metrics />
      <Features />
      <Companies />
      <CTA />
      <Footer />
    </div>
  );
}
