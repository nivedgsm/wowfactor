'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/app/data/siteData';
import Arrow from '../ui/Arrow';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="testimonials-header-top">
            <span className="eyebrow">
              06 — EXCEPTIONAL CARE & RESULTS
            </span>

            <span className="testimonials-header-label">
              PATIENT STORIES
            </span>
          </div>

          <div className="testimonials-heading">
            <h2>
              Real stories from
              <br />
              <em>personalized journeys.</em>
            </h2>

            <p>
              Every experience is different. These are the words
              of people who chose to begin their journey with
              WOW FACTOR.
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              className={`testimonial-card ${
                index === 1 ? 'testimonial-card-featured' : ''
              }`}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
            >
              <div className="testimonial-card-top">
                <span className="testimonial-number">
                  0{index + 1}
                </span>

                <span className="testimonial-mark">
                  WOW FACTOR
                </span>
              </div>

              <div className="testimonial-card-content">
                <span className="testimonial-quote">“</span>

                <h3>{testimonial.title}</h3>

                <p>{testimonial.text}</p>
              </div>

              <div className="testimonial-card-bottom">
                <div>
                  <span className="testimonial-author-label">
                    PATIENT STORY
                  </span>

                  <strong>{testimonial.author}</strong>
                </div>

                <span
                  className="testimonial-arrow"
                  aria-hidden="true"
                >
                  <Arrow />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="testimonials-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <span>PERSONALIZED CARE</span>

          <div className="testimonials-footer-line" />

          <span>REAL EXPERIENCES</span>

          <div className="testimonials-footer-line" />

          <span>WOW FACTOR</span>
        </motion.div>

      </div>
    </section>
  );
}