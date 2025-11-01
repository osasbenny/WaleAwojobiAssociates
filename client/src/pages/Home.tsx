import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedListings />
      <Stats />
      <CTASection />
      <Testimonials />
    </div>
  );
}
