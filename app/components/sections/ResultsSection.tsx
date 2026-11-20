'use client';

import { motion } from 'framer-motion';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import Arrow from '../ui/Arrow';

export default function ResultsSection() {
  return (
    <section id="results" className="results-section">
      <div className="results-container">

        {/* Heading */}
        <motion.div
          className="results-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="results-intro-left">
            <span className="eyebrow">
              03 — RESULTS
            </span>

            <h2>
              See the difference
              <br />
              <em>for yourself.</em>
            </h2>
          </div>

          <div className="results-intro-right">
            <p>
              Every treatment journey is personal. Explore
              transformations and discover what personalized
              care can achieve.
            </p>

            <a
              href="#booking"
              className="results-link"
            >
              <span>Start your journey</span>
              <span className="results-link-arrow" aria-hidden="true">
                <Arrow />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Before / After */}
        <motion.div
          className="results-showcase"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* Bottom information */}
        <motion.div
          className="results-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="results-note">
            <span className="results-note-dot" />

            <p>
              Individual results may vary. Treatment plans are
              personalized following a consultation with our
              specialists.
            </p>
          </div>

          <div className="results-scroll-hint">
            <span>DRAG TO COMPARE</span>
            <span className="results-scroll-arrow" aria-hidden="true">
              <Arrow />
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}