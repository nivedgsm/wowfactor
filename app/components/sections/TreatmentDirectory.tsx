'use client';

import { motion } from 'framer-motion';
import { treatmentGroups } from '@/app/data/siteData';
import Arrow from '../ui/Arrow';

export default function TreatmentDirectory() {
  return (
    <section
      id="treatments-directory"
      className="treatment-directory"
    >
      <div className="treatment-directory-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="treatment-directory-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="treatment-directory-heading">
            <span className="eyebrow">
              04 — TREATMENT DIRECTORY
            </span>

            <h2>
              Everything your
              <br />
              <em>care needs.</em>
            </h2>
          </div>

          <div className="treatment-directory-intro">
            <p>
              Explore our treatments by category and discover
              a more personalized approach to your skin, hair
              and aesthetic journey.
            </p>

            <span className="treatment-directory-count">
              {treatmentGroups.length
                .toString()
                .padStart(2, '0')}{' '}
              CATEGORIES
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            DIRECTORY
        ===================================================== */}

        <div className="directory-grid">
          {treatmentGroups.map((group, index) => (
            <motion.article
              className="directory-card"
              key={group.name}
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
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Card top */}

              <div className="directory-card-top">
                <span className="directory-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="directory-count">
                  {group.items.length}{' '}
                  {group.items.length === 1
                    ? 'TREATMENT'
                    : 'TREATMENTS'}
                </span>
              </div>

              {/* Category */}

              <div className="directory-card-heading">
                <h3>
                  {group.name}
                </h3>

                <span
                  className="directory-card-symbol"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              {/* Treatment list */}

              <div className="directory-treatment-list">
                {group.items.map((item) => (
                  <a
                    key={item}
                    href="#booking"
                    className="directory-treatment"
                  >
                    <span className="directory-treatment-name">
                      {item}
                    </span>

                    <span className="directory-treatment-arrow">
                      <Arrow />
                    </span>
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          className="directory-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <p>
            Not sure where to begin?
          </p>

          <a href="#booking">
            <span>Talk to our specialists</span>

            <span
              className="directory-bottom-arrow"
              aria-hidden="true"
            >
              <Arrow />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}