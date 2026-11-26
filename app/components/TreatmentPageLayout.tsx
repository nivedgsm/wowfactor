'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BookingModal from './ui/BookingModal';
import Arrow from './ui/Arrow';

export default function TreatmentPageLayout({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <Navbar onBook={openBooking} />
      <main>
        {children}
        <section id="booking" className="page-cta" data-scroll-reveal>
          <h2>Talk to a specialist</h2>
          <button className="pill-btn" onClick={openBooking}>
            Book a consultation <Arrow />
          </button>
        </section>
      </main>
      <Footer />
      <AnimatePresence>
        {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
