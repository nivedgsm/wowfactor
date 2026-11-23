'use client';

import { AnimatePresence, motion, MotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Arrow from '../ui/Arrow';

type HeroSectionProps = {
  heroY: MotionValue<number>;
  onBook: () => void;
};

export default function HeroSection({
  heroY,
  onBook,
}: HeroSectionProps) {
  const images = [
    { src: '/images/editorial/facial.webp', alt: 'Patient and clinician during a facial consultation', tag: 'PERSONALIZED CARE' },
    { src: '/images/editorial/skin.webp', alt: 'Close-up portrait of an Indian woman', tag: 'SKIN HEALTH' },
    { src: '/images/editorial/hair.webp', alt: 'Clinician examining a patient’s hair and scalp', tag: 'HAIR & SCALP' },
  ];
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (paused || !autoPlay || reduceMotion) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % images.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, autoPlay, reduceMotion, images.length]);
  const stepSlide = (direction: number) => setSlide((current) => (current + direction + images.length) % images.length);
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
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
        onPanEnd={(_, { offset }) => {
          if (Math.abs(offset.x) > 55 && Math.abs(offset.x) > Math.abs(offset.y)) {
            stepSlide(offset.x < 0 ? 1 : -1);
          }
        }}
        style={{ touchAction: 'pan-y' }}
      >

        <AnimatePresence mode="wait">
          <motion.img
            key={slide}
            src={images[slide].src}
            alt={images[slide].alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="(max-width: 700px) 100vw, 55vw"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [.22, 1, .36, 1] }}
          />
        </AnimatePresence>


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
            {images[slide].tag}
          </span>

        </div>

        <div className="hero-slide-controls" aria-label="Hero image slides">
          <button type="button" onClick={() => stepSlide(-1)} aria-label="Previous image">←</button>
          {images.map((item, index) => <button key={item.tag} type="button" className={`hero-slide-dot ${slide === index ? 'active' : ''}`} onClick={() => setSlide(index)} aria-label={`Show ${item.tag.toLowerCase()} image`} aria-current={slide === index} />)}
          <button type="button" onClick={() => stepSlide(1)} aria-label="Next image">→</button>
          {!reduceMotion && (
            <button type="button" onClick={() => setAutoPlay((value) => !value)} aria-label={autoPlay ? 'Pause slideshow' : 'Play slideshow'}>
              {autoPlay ? 'Ⅱ' : '▶'}
            </button>
          )}
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
