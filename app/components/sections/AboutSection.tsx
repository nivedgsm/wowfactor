'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Top metadata */}
        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            01 — ABOUT WOW FACTOR
          </span>

          <span className="about-top-label">
            EST. 2012 · INDIA
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2>
            Healthcare is evolving.
            <br />
            Stay ahead with{' '}
            <em>expert care.</em>
          </h2>
        </motion.div>

        {/* Story */}
        <div className="about-story">

          <motion.div
            className="about-story-mark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="about-mark-number">01</span>

            <div className="about-mark-line" />

            <span className="about-mark-text">
              SCIENCE
              <br />
              ×
              <br />
              BEAUTY
            </span>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="about-lead">
              Wow Factor, since 2012, has led the way in
              revolutionizing the medi-cosmetic industry in India.
              Our mission is to offer cutting-edge treatments from
              around the globe, creating a caring and supportive
              environment for every client.
            </p>

            <p>
              From acne solutions to hair implantation, we offer
              an extensive range of treatments with state-of-the-art
              facilities and unwavering professional standards.
            </p>

            <a
              className="about-link"
              href="#founders"
            >
              <span>Meet the experts</span>

              <span
                className="about-link-arrow"
                aria-hidden="true"
              >
                <Arrow />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          className="about-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <span>12+ YEARS</span>

          <div className="about-bottom-line" />

          <span>MEDI-COSMETIC CARE</span>

          <div className="about-bottom-line" />

          <span>WOW FACTOR</span>
        </motion.div>

      </div>
    </section>
  );
}