import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
  onBook: () => void;
};

export default function HeroSection({ onBook }: HeroSectionProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (imageRef.current && !imageRef.current.complete) setLoading(true);
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
      <picture className={styles.artwork}>
        <source
          media="(max-width: 700px), (max-width: 1100px) and (orientation: portrait)"
          srcSet="/images/editorial/home-hero-portrait.webp"
          width={1086}
          height={1448}
        />
        <Image
          ref={imageRef}
          className={styles.image}
          src="/images/editorial/home-hero.webp"
          alt=""
          width={1672}
          height={941}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </picture>
      <div className={styles.loader} data-active={loading} aria-hidden="true">
        <span />
      </div>
      <div className={styles.content}>
        <h1 id="home-hero-heading" className={styles.heading}>
          It’s time you own<br />
          your <em>WOW</em> factor.
        </h1>
        <div className={styles.actions} data-site-entrance>
          <button type="button" className={`${styles.action} ${styles.primary}`} onClick={onBook} data-motion-press>
            <svg className={styles.actionIcon} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M7 3v4m10-4v4M3 10h18M7 14h2m3 0h2m3 0h1M7 17h2m3 0h2" />
            </svg>
            <span>Book Consultation</span>
            <span className={styles.actionArrow} aria-hidden="true">→</span>
          </button>
          <a className={`${styles.action} ${styles.secondary}`} href="#treatments">
            <svg className={styles.actionIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
            <span>View Treatments</span>
            <span className={styles.actionArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
