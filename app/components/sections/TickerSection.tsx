
'use client';

import { motion, useReducedMotion } from 'framer-motion';

const services = [
  'DERMATOLOGY',
  'TRICHOLOGY',
  'COSMETOLOGY',
  'LASER TREATMENTS',
  'PERSONALIZED CARE',
];

export default function TickerSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="wow-luxury">

      <div className="wow-luxury-inner">

        <div className="wow-luxury-heading">
          <span className="wow-overline">
            THE WOW FACTOR EXPERIENCE
          </span>

          <h2>
            Where science meets{' '}
            <em>beauty.</em>
          </h2>

          <p>
            A more personal approach to skin and hair excellence.
          </p>
        </div>

        <div className="wow-marquee">
          <motion.div
            className="wow-marquee-track"
            animate={
              reduceMotion ? {} : { x: ['0%', '-50%'] }
            }
            transition={{
              duration: 32,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                className="wow-marquee-item"
                key={`${service}-${index}`}
              >
                <span className="wow-marquee-star">✦</span>
                <span>{service}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="wow-luxury-footer">
          <span>EST. 2012</span>

          <span className="wow-footer-divider" />

          <span>SCIENCE × BEAUTY × EXPERTISE</span>

          <span className="wow-footer-divider" />

          <span>INDIA</span>
        </div>

      </div>

    </section>
  );
}
