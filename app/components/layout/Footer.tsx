'use client';

import { motion } from 'framer-motion';
import Arrow from '../ui/Arrow';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Main statement */}
        <motion.div
          className="footer-hero"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="footer-hero-meta">
            <span>09 — WOW FACTOR</span>
            <span>SCIENCE · BEAUTY · CARE</span>
          </div>

          <div className="footer-hero-content">
            <h2>
              Your best self,
              <br />
              <em>starts here.</em>
            </h2>

            <div className="footer-hero-side">
              <p>
                Advanced skincare, aesthetic medicine and
                personalized care — thoughtfully designed
                around you.
              </p>

              <a href="#booking" className="footer-cta">
                <span>Book a consultation</span>
                <span className="footer-cta-arrow">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="footer-main">

          <div className="footer-brand">
            <img
              src="/images/logo-white.png"
              alt="WOW FACTOR"
            />

            <span>
              MEDI-COSMETIC
              <br />
              EXCELLENCE
            </span>
          </div>

          <div className="footer-nav-group">
            <span className="footer-label">EXPLORE</span>

            <nav className="footer-links">
              <a href="/about">About</a>
              <a href="/treatments">Treatments</a>
              <a href="/experts">Experts</a>
              <a href="/results">Results</a>
              <a href="/journal">Journal</a>
            </nav>
          </div>

          <div className="footer-nav-group">
            <span className="footer-label">CONNECT</span>

            <nav className="footer-links">
              <a href="#booking">Book consultation</a>
              <a href="#contact">Contact us</a>
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© {year} WOW FACTOR</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="footer-bottom-center">
            <span>THIRUVANANTHAPURAM · INDIA</span>
          </div>

          <div className="footer-bottom-right">
            <a href="#">Privacy</a>
            <span className="footer-dot" />
            <a href="#">Terms</a>
          </div>
        </div>

        {/* Giant brand mark */}
        <motion.div
          className="footer-wordmark"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          WOW
          <span>FACTOR</span>
        </motion.div>

      </div>
    </footer>
  );
}
