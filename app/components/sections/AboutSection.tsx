'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Arrow from '../ui/Arrow';

const sequence: Variants = {
  revealed: { transition: { staggerChildren: 0.12 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  revealed: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.74, ease: [0.22, 1, 0.36, 1] },
  },
};

const verticalLine: Variants = {
  hidden: { scaleY: 0 },
  revealed: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const horizontalLine: Variants = {
  hidden: { scaleX: 0 },
  revealed: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    variants: sequence,
    initial: reduceMotion ? false as const : 'hidden',
    whileInView: 'revealed',
    viewport: { once: true, amount: 0.5, margin: '0px 0px -96px 0px' },
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div className="about-top" {...reveal}>
          <motion.span className="eyebrow" variants={rise}>
            ABOUT WOW FACTOR
          </motion.span>
          <motion.span className="about-top-label" variants={rise}>
            EST. 2012 · INDIA
          </motion.span>
        </motion.div>

        <div className="about-statement">
          <motion.h2 {...reveal}>
            <motion.span style={{ display: 'block' }} variants={rise}>
              Healthcare is evolving.
            </motion.span>
            <motion.span style={{ display: 'block' }} variants={rise}>
              Stay ahead with <em>expert care.</em>
            </motion.span>
          </motion.h2>
        </div>

        <div className="about-story">
          <motion.div className="about-story-mark" {...reveal}>
            <motion.span className="about-mark-number" variants={rise}>01</motion.span>
            <motion.div className="about-mark-line" style={{ originY: 0 }} variants={verticalLine} />
            <motion.span className="about-mark-text" variants={rise}>
              SCIENCE<br />×<br />BEAUTY
            </motion.span>
          </motion.div>

          <motion.div className="about-copy" {...reveal}>
            <motion.p className="about-lead" variants={rise}>
              Wow Factor, since 2012, has led the way in
              revolutionizing the medi-cosmetic industry in India.
              Our mission is to offer cutting-edge treatments from
              around the globe, creating a caring and supportive
              environment for every client.
            </motion.p>
            <motion.p variants={rise}>
              From acne solutions to hair implantation, we offer
              an extensive range of treatments with state-of-the-art
              facilities and unwavering professional standards.
            </motion.p>
            <motion.a className="about-link" href="#founders" variants={rise}>
              <span>Meet the experts</span>
              <span className="about-link-arrow" aria-hidden="true">
                <Arrow />
              </span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="about-bottom" {...reveal}>
          <motion.span variants={rise}>12+ YEARS</motion.span>
          <motion.div className="about-bottom-line" style={{ originX: 0 }} variants={horizontalLine} />
          <motion.span variants={rise}>MEDI-COSMETIC CARE</motion.span>
          <motion.div className="about-bottom-line" style={{ originX: 0 }} variants={horizontalLine} />
          <motion.span variants={rise}>WOW FACTOR</motion.span>
        </motion.div>
      </div>
    </section>
  );
}
