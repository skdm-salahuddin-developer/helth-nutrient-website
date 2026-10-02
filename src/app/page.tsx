import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Transformation90Days from '@/components/Transformation90Days';
import FeatureImageCards from '@/components/FeatureImageCards';
import ServicesCarousel from '@/components/ServicesCarousel';
import FourStepsProcess from '@/components/FourStepsProcess';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Green Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header (Nutrition By Durdana) */}
      <Header />

      {/* 3. Hero Banner (Auto-slide 3s) */}
      <HeroBanner />

      {/* 4. About Us Section (Nutrition By Durdana) */}
      <AboutUs />

      {/* 5. Why Choose Us / Why People Need a Health Adviser */}
      <WhyChooseUs />

      {/* 6. 90 Days Transformation Section */}
      <Transformation90Days />

      {/* 7. Feature Image Cards */}
      <FeatureImageCards />

      {/* 8. Services Carousel */}
      <ServicesCarousel />

      {/* 9. Solution in 4 Easy Steps */}
      <FourStepsProcess />

      {/* 10. FAQ Accordion Section */}
      <FAQSection />

      {/* 11. Footer with Map, Location & Developer Credits */}
      <Footer />
    </main>
  );
}
