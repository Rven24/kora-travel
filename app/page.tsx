import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ItineraryPreview from '@/components/ItineraryPreview';
import CostEstimator from '@/components/CostEstimator';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-950">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ItineraryPreview />
        <CostEstimator />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
}