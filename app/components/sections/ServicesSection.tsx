'use client';

import { motion } from 'framer-motion';
import { serviceCategories } from '@/app/data/siteData';
import Arrow from '../ui/Arrow';

export default function ServicesSection() {
  const services = serviceCategories.slice(0, 3);

  return (
    <section id="treatments" className="services-section">
      <div className="services-inner">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="services-eyebrow">
            02 — OUR SERVICES
          </span>

          <h2>
            Evolving healthcare,
            <br />
            enhanced services —
            <br />
            <em>just for you.</em>
          </h2>
        </motion.div>


        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div className="services-grid">

          {services.map((service, index) => (
            <motion.a
              href="#booking"
              className="service-card"
              key={service.title}
              initial={{
                opacity: 0,
                y: 50,
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

              <div className="service-card-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                <div className="service-card-overlay" />

                {/* Editorial frame */}

                <div
                  className="service-card-border"
                  aria-hidden="true"
                />

                {/* Card number */}

                <span className="service-card-number">
                  0{index + 1}
                </span>


                {/* CONTENT */}

                <div className="service-card-content">

                  <div className="service-card-copy">

                    <span className="service-card-kicker">
                      WOW FACTOR
                    </span>

                    <h3 className="service-card-title">
                      {service.title}
                    </h3>

                  </div>

                  <span
                    className="service-card-arrow"
                    aria-hidden="true"
                  >
                    <Arrow />
                  </span>

                </div>

              </div>

            </motion.a>
          ))}

        </div>


        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <motion.div
          className="services-bottom"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <span>
            SCIENCE · TECHNOLOGY · EXPERTISE
          </span>

          <span>
            PERSONALIZED AESTHETIC CARE
          </span>
        </motion.div>

      </div>
    </section>
  );
}