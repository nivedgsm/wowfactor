import Arrow from '../ui/Arrow';
import styles from './ParallaxSection.module.css';

type Props = {
  onBook: () => void;
};

export default function ParallaxSection({ onBook }: Props) {
  return (
    <section className={styles.section} aria-labelledby="parallax-heading">
      <div className={styles.image} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.desktop}>Wow Factor</span>
          <span className={styles.desktop}>Science &middot; Beauty &middot; Care</span>
          <span className={styles.mobile}>Medical Tourism</span>
          <span className={styles.mobile}>Skincare &middot; Aesthetics &middot; Wellness</span>
        </div>
        <div className={styles.content}>
          <div className={styles.copy} data-scroll-reveal>
            <p className={styles.eyebrow}>
              <span className={styles.desktop}>A new dimension in skincare technology</span>
              <span className={styles.mobile}>Advanced skin &amp; aesthetic treatments</span>
            </p>
            <h2 id="parallax-heading">
              Beautiful results.
              <em>
                <span className={styles.desktop}>Thoughtful<br />{' '}medicine.</span>
                <span className={styles.mobile}>Thoughtful care.</span>
              </em>
            </h2>
            <p className={styles.description}>
              Where advanced technology meets a deeply personalized
              approach to aesthetic care.
            </p>
          </div>
          <button className={styles.booking} type="button" onClick={onBook} aria-label="Start your journey" data-scroll-reveal data-motion-press>
            <span>Start<br />{' '}your<br />{' '}journey</span>
            <Arrow />
            <span className={styles.mobile} aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
