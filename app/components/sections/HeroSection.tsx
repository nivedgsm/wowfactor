'use client';

import { motion, MotionValue } from 'framer-motion';
import Arrow from '../ui/Arrow';

type HeroSectionProps = {
  heroY: MotionValue<number>;
  onBook: () => void;
};

export default function HeroSection({
  heroY,
  onBook,
}: HeroSectionProps) {
  return (
    <section className="hero">

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <motion.div
        className="hero-copy"
        style={{ y: heroY }}
      >

        {/* Eyebrow */}

        <motion.span
          className="eyebrow hero-eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          MEDI-COSMETIC CARE · EST. 2012
        </motion.span>


        {/* Main heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          It&apos;s time you own
          <br />
          your <em>WOW factor.</em>
        </motion.h1>


        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Advanced skincare, tailored just for you.
          Precision-led dermatology, trichology and
          aesthetic care in a space designed around
          confidence.
        </motion.p>


        {/* Actions */}

        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
        >

          <button
            type="button"
            className="pill-btn dark"
            onClick={onBook}
          >
            Book a consultation
            <Arrow />
          </button>

          <a
            className="hero-explore"
            href="#treatments"
          >
            <span>Explore treatments</span>
            <strong>↓</strong>
          </a>

        </motion.div>

      </motion.div>


      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <motion.div
        className="hero-image"
        initial={{
          opacity: 0,
          scale: 1.06,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=90"
          alt="Professional skincare treatment"
        />


        {/* Image overlay */}

        <div className="hero-image-overlay" />


        {/* Top metadata */}

        <div className="hero-image-top">

          <span>
            01 — INTRODUCING
          </span>

          <span>
            WOW FACTOR
          </span>

        </div>


        {/* Bottom caption */}

        <div className="hero-image-bottom">

          <div className="hero-image-caption">
            <span>
              SCIENCE
            </span>

            <i>×</i>

            <span>
              TECHNOLOGY
            </span>

            <i>×</i>

            <span>
              EXPERTISE
            </span>
          </div>

          <span className="hero-image-location">
            PERSONALIZED CARE
          </span>

        </div>

      </motion.div>


      {/* =====================================================
          SIDE MARKER
      ===================================================== */}

      <div className="hero-side-marker">
        <span>WOW FACTOR</span>
        <span>↓</span>
      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>

    </section>
  );
}