'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BookingModal from './ui/BookingModal';
import HeroSection from './sections/HeroSection';
import TickerSection from './sections/TickerSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ParallaxSection from './sections/ParallaxSection';
import ResultsSection from './sections/ResultsSection';
import TreatmentDirectory from './sections/TreatmentDirectory';
import TeamSection from './sections/TeamSection';
import CredibilitySection from './sections/CredibilitySection';
import TestimonialsSection from './sections/TestimonialsSection';
import SocialSection from './sections/SocialSection';
import MedicalTourismSection from './sections/MedicalTourismSection';
import BookingCTA from './sections/BookingCTA';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navbar onBook={openBooking} />
      <HeroSection heroY={heroY} onBook={openBooking} />
      <TickerSection />
      <AboutSection />
      <ServicesSection />
      <ParallaxSection onBook={openBooking} />
      <ResultsSection />
      <TreatmentDirectory />
      <TeamSection />
      <CredibilitySection />
      <TestimonialsSection />
      <SocialSection />
      <MedicalTourismSection onBook={openBooking} />
      <BookingCTA onBook={openBooking} />
      <Footer />
      {bookingOpen && <BookingModal onClose={closeBooking} />}
    </main>
  );
}
