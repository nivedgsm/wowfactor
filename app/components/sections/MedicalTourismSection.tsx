import Image from 'next/image';
import styles from './MedicalTourismSection.module.css';

type Props = {
  onBook: () => void;
};

const steps = [
  { label: 'Expert Consultation', icon: 'M6 3H4v6a5 5 0 0 0 10 0V3h-2M9 14v2a5 5 0 0 0 10 0v-2m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' },
  { label: 'Personalized Treatment Plan', icon: 'M4 5h16v16H4zM4 9h16M8 3v4m8-4v4m-4 5v6m-3-3h6' },
  { label: 'Travel & Stay Assistance', icon: 'm22 2-7 19-3-8-8-3L22 2ZM12 13 22 2M5 16l-2 2m5 0-3 3' },
  { label: 'Post-Treatment Follow-up', icon: 'M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1ZM5 12h4l1.5-3 2.5 6 1.5-3H19' },
];

export default function MedicalTourismSection({ onBook }: Props) {
  return (
    <section className={styles.section} aria-labelledby="medical-tourism-heading">
      <div className={styles.inner}>
        <div className={styles.copy} data-scroll-reveal>
          <p className={styles.eyebrow}>Medical Tourism</p>
          <h2 id="medical-tourism-heading">
            Your Treatment Journey, <em>Across Borders</em>
          </h2>
          <p className={styles.description}>
            Expert care, travel assistance, and follow-up support so you can
            focus on your health, wherever you are.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={onBook} data-motion-press>
              Plan Your Medical Journey <span aria-hidden="true">→</span>
            </button>
            <a className={styles.more} href="#medical-tourism-steps">
              <span className={styles.play} aria-hidden="true">▸</span> How It Works
            </a>
          </div>
        </div>

        <ol id="medical-tourism-steps" className={styles.steps} tabIndex={-1} aria-label="Medical tourism journey steps" data-scroll-reveal>
          {steps.map(({ label, icon }) => (
            <li key={label}>
              <span className={styles.stepIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon} />
                </svg>
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ol>

        <div className={styles.visual} data-scroll-reveal>
          <Image
            src="/images/medical-tourism.webp"
            alt=""
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 980px) 48vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
