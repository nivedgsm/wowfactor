
'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BookingModal from './ui/BookingModal';
import Arrow from './ui/Arrow';
import TreatmentDirectory from './sections/TreatmentDirectory';
import SkinGuide from './sections/SkinGuide';

import {
  serviceCategories,
  testimonials,
} from '@/app/data/siteData';

type PageKey =
  | 'about'
  | 'treatments'
  | 'results'
  | 'experts'
  | 'journal';

type Founder = {
  name: string;
  detail: string;
  image: string;
};

const founders: Founder[] = [
  {
    name: 'Dr. Asha Biju',
    detail:
      'Founder & Managing Director · Aesthetic Physician',
    image: '/images/founders/dr-asha-biju.png',
  },
  {
    name: 'Dr. Biju Moses',
    detail:
      'Founder & Chairman · Internist & Diabetologist',
    image: '/images/founders/dr-biju-moses.png',
  },
];

const stories = [
  {
    title: 'Understanding your skin barrier',
    type: 'SKIN NOTES',
    image:
      '/images/editorial/journal-skincare.webp',
    text:
      'A thoughtful guide to the skin barrier, everyday care and when to seek expert advice.',
  },
  {
    title: 'A considered approach to hair health',
    type: 'HAIR & SCALP',
    image:
      '/images/editorial/hair.webp',
    text:
      'Healthy hair begins with understanding the scalp and the factors that shape each growth cycle.',
  },
  {
    title: 'What to expect from a consultation',
    type: 'YOUR VISIT',
    image:
      '/images/editorial/consultation.webp',
    text:
      'A clear, unrushed conversation is the first step toward a plan that feels right for you.',
  },
];

const pageInfo: Record<
  PageKey,
  {
    number: string;
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    image: string;
    label: string;
  }
> = {
  about: {
    number: '01',
    eyebrow: 'THE WOW FACTOR APPROACH',
    title: 'Care that sees',
    accent: 'all of you.',
    copy:
      'A modern medi-cosmetic clinic where medical expertise, advanced technology and thoughtful care come together around your individual needs.',
    image:
      '/images/editorial/consultation.webp',
    label: 'SCIENCE · BEAUTY · CARE',
  },
  treatments: {
    number: '02',
    eyebrow: 'PERSONALIZED TREATMENTS',
    title: 'A plan made',
    accent: 'for your skin.',
    copy:
      'Explore skin, hair and aesthetic treatments selected with care, guided by a specialist and tailored to your goals.',
    image: serviceCategories[0].image,
    label: 'SKIN · HAIR · AESTHETICS',
  },
  results: {
    number: '03',
    eyebrow: 'REAL JOURNEYS, PERSONAL RESULTS',
    title: 'Progress that',
    accent: 'feels like you.',
    copy:
      'Every result begins with listening. Discover how thoughtful treatment plans can support the changes you want to see.',
    image:
      '/images/editorial/skin.webp',
    label: 'INDIVIDUAL RESULTS VARY',
  },
  experts: {
    number: '04',
    eyebrow: 'MEET YOUR CARE TEAM',
    title: 'Expertise with',
    accent: 'a human touch.',
    copy:
      'Meet the people behind WOW FACTOR. Our founders bring clinical experience and a shared commitment to thoughtful, personalized care.',
    image: '/images/founders/dr-asha-biju.png',
    label: 'THE PEOPLE BEHIND YOUR CARE',
  },
  journal: {
    number: '05',
    eyebrow: 'THE WOW FACTOR JOURNAL',
    title: 'A little more',
    accent: 'informed.',
    copy:
      'Clear, considered perspectives on skin, hair and aesthetic wellbeing from the people who care for you.',
    image: stories[0].image,
    label: 'NOTES ON SKIN, HAIR & CARE',
  },
};

/* =====================================
   REUSABLE EDITORIAL CAROUSEL
===================================== */

function Carousel({
  items,
  kind,
}: {
  items: {
    title: string;
    detail: string;
    image: string;
  }[];
  kind: string;
}) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  if (!items.length) return null;

  const current = items[active];

  const step = (direction: number) => {
    setActive(
      (value) =>
        (value + direction + items.length) % items.length
    );
  };

  return (
    <div className="editorial-carousel">
      <motion.div
        className="carousel-image image-frame swipe-slide"
        onPanEnd={(_, { offset }) => {
          if (Math.abs(offset.x) > 55 && Math.abs(offset.x) > Math.abs(offset.y)) {
            step(offset.x < 0 ? 1 : -1);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="carousel-image-inner"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 1.025 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              quality={80}
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>

        <span className="carousel-count">
          {String(active + 1).padStart(2, '0')}
          {' '}
          <i>/</i>
          {' '}
          {String(items.length).padStart(2, '0')}
        </span>
      </motion.div>

      <div className="carousel-caption">
        <div>
          <span className="eyebrow">{kind}</span>
          <h3>{current.title}</h3>
          <p>{current.detail}</p>
        </div>

        <div className="carousel-controls">
          <button
            onClick={() => step(-1)}
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={() => step(1)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      <div className="carousel-dots" aria-label="Choose slide">
        {items.map((item, index) => (
          <button
            key={item.title}
            aria-label={`Show slide ${index + 1}`}
            aria-current={active === index}
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

/* =====================================
   PREMIUM EXPERTS SECTION
===================================== */

function ExpertsSection({
  onBook,
}: {
  onBook: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="experts-section">

      {/* Introduction */}

      <div className="experts-intro">
        <div className="experts-intro-left">
          <span className="eyebrow">
            THE PEOPLE BEHIND YOUR CARE
          </span>

          <h2>
            Experience meets
            <br />
            <em>compassion.</em>
          </h2>
        </div>

        <div className="experts-intro-right">
          <p>
            At WOW FACTOR, we believe exceptional care
            begins with exceptional people. Get to know
            the founders behind our approach to
            personalized medi-cosmetic care.
          </p>

          <span className="experts-intro-index">
            OUR FOUNDERS · 01 / 02
          </span>
        </div>
      </div>

      {/* Founder profiles */}

      <div className="founders-grid">
        {founders.map((founder, index) => (
          <motion.article
            key={founder.name}
            className="founder-card"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="founder-image-wrap">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 46vw"
                quality={85}
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />

              <span className="founder-number">
                0{index + 1}
              </span>

              <div className="founder-image-overlay">
                <span>WOW FACTOR</span>
                <span>FOUNDING TEAM</span>
              </div>
            </div>

            <div className="founder-details">
              <div className="founder-details-main">
                <span className="eyebrow">
                  {index === 0
                    ? 'FOUNDER & MANAGING DIRECTOR'
                    : 'FOUNDER & CHAIRMAN'}
                </span>

                <h3>{founder.name}</h3>

                <p>{founder.detail}</p>
              </div>

              <span className="founder-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Philosophy strip */}

      <div className="experts-philosophy">
        <div className="philosophy-symbol">✳</div>

        <div className="philosophy-content">
          <span className="eyebrow">
            THE WOW FACTOR PHILOSOPHY
          </span>

          <h3>
            Medical knowledge.
            <em> Personal attention.</em>
          </h3>
        </div>

        <button
          className="experts-book-btn"
          onClick={onBook}
        >
          Meet our team
          <span>↗</span>
        </button>
      </div>

    </section>
  );
}

/* =====================================
   MAIN SITE PAGE
===================================== */

export default function SitePage({
  page,
}: {
  page: PageKey;
}) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const info = pageInfo[page];

  const carouselItems =
    page === 'journal'
      ? stories.map(({ title, text, image }) => ({
          title,
          detail: text,
          image,
        }))
      : serviceCategories.map(({ title, image, items }) => ({
          title,
          detail: items.slice(0, 3).join(' · '),
          image,
        }));

  const introHeading = {
    about: <>Medical care, <em>made personal.</em></>,
    treatments: <>Expert guidance at <em>every step.</em></>,
    results: <>Small steps. <em>Meaningful change.</em></>,
    experts: <>Good care starts <em>with listening.</em></>,
    journal: <>Knowledge for <em>your next step.</em></>,
  };

  const introCopy = {
    about:
      'We believe feeling your best starts with being heard. Our team takes the time to understand your concerns, explain your options and create a considered path forward.',
    treatments:
      'From dermatology and trichology to advanced cosmetology, begin with a conversation and discover a treatment plan shaped around you.',
    results:
      'Explore our areas of care and the personal journeys behind them. Each plan is guided by specialist advice and adjusted to your needs.',
    experts:
      'Our founders bring complementary experience and a shared commitment to thoughtful, evidence-led care.',
    journal:
      'Explore practical perspectives from our team. We make complex topics easier to understand so you can make informed choices.',
  };

  const openBooking = () => setBookingOpen(true);

  return (
    <main className={`site-page site-page-${page}`} id="top">

      <Navbar onBook={openBooking} />

      {/* HERO */}

      <section className={`page-hero page-hero-${page}`}>

        <div className="page-hero-copy">
          <span className="eyebrow">
            {info.number} — {info.eyebrow}
          </span>

          <h1>
            {info.title}
            <br />
            <em>{info.accent}</em>
          </h1>

          <p>{info.copy}</p>

          <button
            className="pill-btn"
            onClick={openBooking}
          >
            Book consultation
            <Arrow />
          </button>
        </div>

        <motion.div
          className="page-hero-image image-frame"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={info.image}
            alt={info.label}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            quality={85}
            style={{ objectFit: 'cover' }}
          />

          <span>{info.label}</span>
        </motion.div>

        <div className="page-hero-foot">
          <span>THIRUVANANTHAPURAM · INDIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="page-intro">
        <span className="eyebrow">
          {page === 'about'
            ? 'OUR PROMISE'
            : page === 'treatments'
              ? 'EXPLORE OUR SERVICES'
              : page === 'results'
                ? 'THE JOURNEY IS YOURS'
                : page === 'experts'
                  ? 'THE PEOPLE BEHIND YOUR CARE'
                  : 'FROM THE JOURNAL'}
        </span>

        <h2>{introHeading[page]}</h2>

        <p>{introCopy[page]}</p>
      </section>

      {/* EXPERTS PAGE */}

      {page === 'experts' && (
        <ExpertsSection onBook={openBooking} />
      )}

      {/* OTHER PAGE CAROUSELS */}

      {page !== 'experts' && page !== 'treatments' && (
        <section className="page-feature">
          <div className="page-feature-heading">
            <span className="eyebrow">
              {info.number} — {info.label}
            </span>

            <p>Swipe or use the arrows to explore</p>
          </div>

          <Carousel
            items={carouselItems}
            kind={
              page === 'journal'
                ? 'THE JOURNAL'
                : 'AREAS OF CARE'
            }
          />
        </section>
      )}

      {/* TREATMENTS */}

      {page === 'treatments' && (
        <>
          <TreatmentDirectory />
          <SkinGuide />
        </>
      )}

      {/* RESULTS */}

      {page === 'results' && (
        <section className="page-quote">
          <span className="eyebrow">
            PATIENT STORIES
          </span>

          <blockquote>
            “{testimonials[0].text}”
          </blockquote>

          <span>— {testimonials[0].author}</span>

          <p>
            {testimonials[0].title} · Individual results may vary.
          </p>
        </section>
      )}

      {/* JOURNAL */}

      {page === 'journal' && (
        <section className="page-treatment-list">
          <span className="eyebrow">
            LATEST NOTES
          </span>

          <h2>
            Read, learn, <em>feel confident.</em>
          </h2>

          <div className="treatment-list-grid">
            {stories.map((story) => (
              <article key={story.title}>
                <span>{story.type}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FINAL CTA */}

      <section id="booking" className="page-cta">
        <span className="eyebrow">
          A GOOD PLACE TO BEGIN
        </span>

        <h2>
          Let’s talk about
          <em> what matters to you.</em>
        </h2>

        <button
          className="pill-btn"
          onClick={openBooking}
        >
          Book a consultation
          <Arrow />
        </button>
      </section>

      <Footer />

      <AnimatePresence>
        {bookingOpen && (
          <BookingModal
            onClose={() => setBookingOpen(false)}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
