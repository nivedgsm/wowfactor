'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BookingModal from './ui/BookingModal';
import HeroSection from './sections/HeroSection';
import TickerSection from './sections/TickerSection';
import AboutSection from './sections/AboutSection';
import AwardsSection from './sections/AwardsSection';
import ServicesSection from './sections/ServicesSection';
import ParallaxSection from './sections/ParallaxSection';
import ResultsSection from './sections/ResultsSection';
import TreatmentDirectory from './sections/TreatmentDirectory';
import SkinGuide from './sections/SkinGuide';
import TeamSection from './sections/TeamSection';
import CredibilitySection from './sections/CredibilitySection';
import TestimonialsSection from './sections/TestimonialsSection';
import SocialSection from './sections/SocialSection';
import MedicalTourismSection from './sections/MedicalTourismSection';
import BookingCTA from './sections/BookingCTA';
import type { InstagramReel } from '@/app/data/instagramReels';

export default function HomePage({ reels }: { reels: InstagramReel[] }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navbar onBook={openBooking} />
      <HeroSection onBook={openBooking} />

      <AboutSection />
      {/* <TickerSection /> */}
      <ServicesSection />
      <ParallaxSection onBook={openBooking} />
      <ResultsSection />
      <TreatmentDirectory />
      <SkinGuide />
      <TeamSection />
      <CredibilitySection />
      <AwardsSection />
      <TestimonialsSection />
      <SocialSection reels={reels} />
      <MedicalTourismSection onBook={openBooking} />
      <BookingCTA onBook={openBooking} />
      <Footer />
      {bookingOpen && <BookingModal onClose={closeBooking} />}
    </main>
  );
}
