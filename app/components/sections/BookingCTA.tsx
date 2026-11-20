'use client';

import { motion } from 'framer-motion';

type Props = {
  onBook: () => void;
};

export default function BookingCTA({ onBook }: Props) {
  return (
    <section id="booking" className="booking-cta">
      <div className="booking-cta-inner">

        {/* Decorative top line */}
        <motion.div
          className="booking-cta-top"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>WOW FACTOR</span>
          <span>PERSONALIZED CARE</span>
          <span>EST. 2012</span>
        </motion.div>

        {/* Main content */}
        <div className="booking-cta-content">

          <motion.div
            className="booking-cta-copy"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="booking-cta-eyebrow">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Ready to discover
              <br />
              <em>your WOW factor?</em>
            </h2>

            <p>
              Begin with a personalized consultation and let our
              specialists create a treatment journey designed around you.
            </p>
          </motion.div>

          {/* Booking button */}
          <motion.button
            type="button"
            className="booking-circle"
            onClick={onBook}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <span className="booking-circle-inner">
              <span>BOOK</span>
              <span>NOW</span>
              <span className="booking-circle-arrow">
                ↗
              </span>
            </span>
          </motion.button>

        </div>

        {/* Bottom information */}
        <motion.div
          className="booking-cta-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <span>
            CONSULTATION · IN CLINIC · VIRTUAL
          </span>

          <span>
            LET'S BEGIN →
          </span>
        </motion.div>

      </div>
    </section>
  );
}