'use client';

import { motion } from 'framer-motion';
import { socialPosts } from '@/app/data/siteData';
import Arrow from '../ui/Arrow';

export default function SocialSection() {
  const posts = socialPosts.slice(0, 5);

  return (
    <section id="journal" className="social-section">
      <div className="social-container">

        {/* Header */}
        <motion.header
          className="social-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="social-header-meta">
            <span className="eyebrow">
              07 — THE JOURNAL
            </span>

            <span className="social-header-index">
              BEAUTY / SCIENCE / LIFE
            </span>
          </div>

          <div className="social-header-content">
            <h2>
              Inside the
              <br />
              <em>WOW world.</em>
            </h2>

            <div className="social-header-copy">
              <p>
                A closer look at the treatments, ideas,
                people and moments that shape the WOW FACTOR
                experience.
              </p>

              <a href="#" className="social-follow">
                <span>Follow along</span>

                <span
                  className="social-follow-arrow"
                  aria-hidden="true"
                >
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </motion.header>

        {/* Editorial gallery */}
        <div className="social-gallery">

          {posts.map((src, index) => (
            <motion.a
              href="#"
              key={src}
              className={`social-item social-item-${index + 1}`}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="social-image">
                <img
                  src={src}
                  alt={`WOW FACTOR journal ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                <div className="social-image-overlay" />

                <div className="social-item-number">
                  0{index + 1}
                </div>

                <div className="social-item-action">
                  <span>EXPLORE</span>

                  <span
                    className="social-item-arrow"
                    aria-hidden="true"
                  >
                    <Arrow />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}

        </div>

        {/* Bottom statement */}
        <motion.div
          className="social-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <div className="social-bottom-mark">
            <span>WOW</span>
            <span>FACTOR</span>
          </div>

          <p>
            Follow our journey.
            <br />
            <em>Stay inspired.</em>
          </p>

          <a href="#" className="social-bottom-link">
            <span>Instagram</span>
            <Arrow />
          </a>
        </motion.div>

      </div>
    </section>
  );
}