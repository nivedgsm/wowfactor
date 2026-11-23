'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

type Props = {
  onBook: () => void;
};

export default function MedicalTourismSection({ onBook }: Props) {
  return (
    <section className="tourism-section">
      <div className="tourism-container">

        {/* Image */}
        <motion.div
          className="tourism-visual"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="/images/editorial/consultation.webp"
            alt="Patient discussing care with two clinicians"
            loading="lazy"
          />

          <div className="tourism-visual-overlay" />

          <div className="tourism-visual-top">
            <span>08 — MEDICAL TOURISM</span>
            <span>INDIA · INTERNATIONAL CARE</span>
          </div>

          <div className="tourism-visual-bottom">
            <span>WOW FACTOR</span>
            <span>GLOBAL CARE</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="tourism-content"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="tourism-content-top">
            <span className="tourism-number">08</span>

            <span className="tourism-label">
              INTERNATIONAL PATIENT CARE
            </span>
          </div>

          <div className="tourism-content-main">
            <h2>
              Expert care,
              <br />
              <em>wherever you are.</em>
            </h2>

            <p>
              Build a dedicated medical-tourism journey for
              international clients, including remote consultation,
              treatment planning, travel support and follow-up care.
            </p>

            <button
              type="button"
              className="tourism-button"
              onClick={onBook}
            >
              <span>Talk to our team</span>

              <span
                className="tourism-button-arrow"
                aria-hidden="true"
              >
                <Arrow />
              </span>
            </button>
          </div>

          <div className="tourism-content-bottom">
            <div>
              <span>01</span>
              <p>Remote consultation</p>
            </div>

            <div>
              <span>02</span>
              <p>Treatment planning</p>
            </div>

            <div>
              <span>03</span>
              <p>Follow-up care</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
