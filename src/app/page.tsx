import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Transformation90Days from '@/components/Transformation90Days';
import FeatureImageCards from '@/components/FeatureImageCards';
import ServicesCarousel from '@/components/ServicesCarousel';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Green Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header (Nutrition By Durdana) */}
      <Header />

      {/* 3. Hero Banner with Habit Change Headline & Floating Card */}
      <HeroBanner />

      {/* 4. About Us Section (Ayurveda & Medical Nutrition by Durdana) */}
      <AboutUs />

      {/* 5. Why Choose Us / Why People Need a Health Adviser */}
      <WhyChooseUs />

      {/* 6. 90 Days Transformation Section (Personalized Nutrition & Exercise Plans) */}
      <Transformation90Days />

      {/* 7. Feature Image Cards (Healthy Meals Tips, Recipes Idea) */}
      <FeatureImageCards />

      {/* 8. Services Carousel with Interactive Hover Color States */}
      <ServicesCarousel />

      {/* 9. FAQ Accordion Section */}
      <FAQSection />

      {/* 10. Footer with Brand Info, Quick Links & Contact */}
      <Footer />
    </main>
  );
}
