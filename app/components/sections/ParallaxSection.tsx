'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

type Props = {
  onBook: () => void;
};

export default function ParallaxSection({ onBook }: Props) {
  return (
    <section className="parallax-section">

      {/* Background image */}
      <div className="parallax-image" />

      {/* Dark / berry gradient */}
      <div className="parallax-overlay-bg" />

      <div className="parallax-content">

        {/* Top metadata */}
        <motion.div
          className="parallax-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>WOW FACTOR</span>
          <span>SCIENCE · BEAUTY · CARE</span>
          <span>06</span>
        </motion.div>


        {/* Main content */}
        <div className="parallax-main">

          <motion.div
            className="parallax-copy"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="parallax-eyebrow">
              A NEW DIMENSION IN SKINCARE TECHNOLOGY
            </span>

            <h2>
              Beautiful results.
              <br />
              <em>Thoughtful medicine.</em>
            </h2>

            <p>
              Where advanced technology meets a deeply
              personalized approach to aesthetic care.
            </p>
          </motion.div>


          {/* Circular CTA */}
          <motion.button
            type="button"
            className="parallax-circle"
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
              amount: 0.25,
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
            <span>
              START
              <br />
              YOUR
              <br />
              JOURNEY
            </span>

            <Arrow />
          </motion.button>

        </div>


        {/* Bottom metadata */}
        <motion.div
          className="parallax-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <span>
            PERSONALIZED AESTHETIC CARE
          </span>

          <span>
            DISCOVER MORE ↓
          </span>
        </motion.div>

      </div>
    </section>
  );
}