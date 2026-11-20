'use client';

import { motion } from 'framer-motion';

const items = [
  'DERMATOLOGY',
  'TRICHOLOGY',
  'COSMETOLOGY',
  'PERSONALIZED CARE',
];

export default function TickerSection() {
  return (
    <section className="ticker-section">
      <div className="ticker-label">
        <span>WOW FACTOR</span>
        <span>SCIENCE × BEAUTY × EXPERTISE</span>
      </div>

      <div className="ticker-window">
        <motion.div
          className="ticker-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 24,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div className="ticker-item" key={`${item}-${index}`}>
              <span className="ticker-dot" />
              <span>{item}</span>
              <span className="ticker-symbol">×</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="ticker-bottom">
        <span>EST. 2012</span>
        <span>MEDI-COSMETIC CARE</span>
        <span>INDIA</span>
      </div>
    </section>
  );
}