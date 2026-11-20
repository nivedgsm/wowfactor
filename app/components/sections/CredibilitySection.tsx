'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

const credibilityItems = [
  {
    number: '01',
    title: 'Clinical Expertise',
    description:
      'Specialist-led care combining clinical knowledge, modern technology and personalized treatment planning.',
  },
  {
    number: '02',
    title: 'Advanced Technology',
    description:
      'A technology-led approach designed around precise diagnosis, targeted treatments and thoughtful outcomes.',
  },
  {
    number: '03',
    title: 'Personalized Care',
    description:
      'Every treatment journey begins by understanding the individual rather than following a one-size-fits-all approach.',
  },
  {
    number: '04',
    title: 'Patient First',
    description:
      'From consultation to follow-up, every detail is designed around comfort, clarity and confidence.',
  },
];

export default function CredibilitySection() {
  return (
    <section className="credibility-section">
      <div className="credibility-container">

        {/* Header */}
        <motion.div
          className="credibility-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="credibility-heading">
            <span className="eyebrow">
              06 — TRUSTED CARE
            </span>

            <h2>
              Expertise you can
              <br />
              <em>feel confident in.</em>
            </h2>
          </div>

          <div className="credibility-intro">
            <p>
              Great care is built on more than technology.
              It is the combination of expertise, precision,
              experience and a genuine understanding of you.
            </p>

            <span className="credibility-mark">
              WOW FACTOR
            </span>
          </div>
        </motion.div>

        {/* Credibility cards */}
        <div className="credibility-grid">
          {credibilityItems.map((item, index) => (
            <motion.article
              className="credibility-card"
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="credibility-card-top">
                <span>{item.number}</span>

                <span
                  className="credibility-card-arrow"
                  aria-hidden="true"
                >
                  <Arrow />
                </span>
              </div>

              <div className="credibility-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certifications / media strip */}
        <motion.div
          className="credibility-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="credibility-strip-label">
            <span>RECOGNITION</span>
          </div>

          <div className="credibility-strip-items">
            <div className="credibility-placeholder">
              <span>Certification</span>
              <small>LOGO / NAME</small>
            </div>

            <div className="credibility-placeholder">
              <span>Affiliation</span>
              <small>LOGO / NAME</small>
            </div>

            <div className="credibility-placeholder">
              <span>Award</span>
              <small>LOGO / NAME</small>
            </div>

            <div className="credibility-placeholder">
              <span>Featured</span>
              <small>MEDIA / PUBLICATION</small>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}