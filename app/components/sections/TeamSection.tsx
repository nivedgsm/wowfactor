'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

const founders = [
  {
    name: 'Dr. Asha Biju',
    role: 'Founder & Managing Director',
    specialty: 'Aesthetic Physician',
    image: '/images/founders/dr-asha-biju.png',
  },
  {
    name: 'Dr. Biju Moses',
    role: 'Founder & Chairman',
    specialty: 'Internist & Diabetologist',
    image: '/images/founders/dr-biju-moses.png',
  },
];

export default function TeamSection() {
  return (
    <section id="founders" className="founders-section">
      <div className="founders-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="founders-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="founders-heading">
            <span className="eyebrow">
              05 — THE FOUNDERS
            </span>

            <h2>
              The people behind
              <br />
              <em>the WOW factor.</em>
            </h2>
          </div>

          <div className="founders-intro">
            <p>
              Meet the visionaries behind WOW FACTOR and
              the expertise that has shaped our approach
              to personalized care.
            </p>

            <span className="founders-signature">
              FOUNDERS · WOW FACTOR
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            FOUNDERS
        ===================================================== */}

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.article
              className="founder-card"
              key={founder.name}
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* IMAGE */}

              <div className="founder-image-wrapper">

                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-image"
                />

                <div className="founder-image-shade" />

                <div className="founder-image-meta">
                  <span>FOUNDER</span>

                  <span>
                    0{index + 1}
                  </span>
                </div>

                <div className="founder-image-label">
                  <span>
                    WOW FACTOR
                  </span>
                </div>

              </div>

              {/* INFORMATION */}

              <div className="founder-info">

                <div className="founder-info-main">

                  <span className="founder-role">
                    {founder.role}
                  </span>

                  <h3>
                    {founder.name}
                  </h3>

                  <span className="founder-specialty">
                    {founder.specialty}
                  </span>

                </div>

                <div className="founder-info-arrow">
                  <Arrow />
                </div>

              </div>

            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          className="founders-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >

          <span className="founders-bottom-number">
            05
          </span>

          <p>
            Medical expertise.
            <br />
            <em>Personalized care.</em>
          </p>

          <span className="founders-bottom-mark">
            WOW FACTOR
          </span>

        </motion.div>

      </div>
    </section>
  );
}