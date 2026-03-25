import Hero from "@/components/Hero";

/**
 * Home Page - Tekita Landing Page
 * 
 * Cyberpunk Minimalist Design
 * - Hero section with looping video background
 * - Animated navbar with scroll effects
 * - Modular section-based layout
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        videoUrl="https://d2xsxph8kpxj0f.cloudfront.net/310519663470810298/7YPvFrBLg7mNjq8BXWgrfv/hero-bg-cyberpunk_007c6928.mp4"
        tagline="Welcome to the Future"
        headline="Teknologi Kita"
        description="Innovative software solutions for tomorrow"
      />
      
      {/* Additional sections will be added here */}
    </div>
  );
}
