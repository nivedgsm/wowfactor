'use client';

import { useState } from 'react';
import type { InstagramReel } from '@/app/data/instagramReels';
import styles from './SocialSection.module.css';

const profile = 'https://www.instagram.com/wowfactorindia/';
const columnCount = 5;
const rowsPerColumn = 3;

export default function SocialSection({ reels }: { reels: InstagramReel[] }) {
  const [paused, setPaused] = useState(false);
  const columns = Array.from({ length: columnCount }, (_, column) =>
    Array.from({ length: rowsPerColumn }, (_, row) => {
      const index = row * columnCount + column;
      return { reel: reels[index % reels.length], repeat: index >= reels.length };
    })
  );

  return (
    <section id="journal" className={styles.section} aria-labelledby="social-heading">
      <header className={styles.header} data-scroll-reveal>
        <div>
          <p className={styles.eyebrow}>Instagram</p>
          <h2 id="social-heading">Inside the <em>WOW world.</em></h2>
        </div>
        <a className={styles.profile} href={profile}>Follow @wowfactorindia <span aria-hidden="true">↗</span></a>
      </header>

      <div className={styles.gallery} data-paused={paused} data-scroll-reveal>
        {columns.map((column, index) => (
          <div className={styles.column} key={index}>
            <div className={styles.track}>
              {[false, true].map((duplicate) => (
                <div className={duplicate ? styles.duplicate : styles.group} key={String(duplicate)} aria-hidden={duplicate || undefined}>
                  {column.map(({ reel, repeat }, row) => (
                    <div className={styles.tile} key={row} aria-hidden={repeat || undefined}>
                      <img className={styles.cover} src={reel.cover} alt="" loading="lazy" decoding="async" />
                      <a
                        className={styles.reelLink}
                        href={reel.href}
                        tabIndex={duplicate || repeat ? -1 : undefined}
                        aria-label={reel.title + ' on Instagram'}
                      >
                        <span className={styles.reelTitle}>{reel.title}</span>
                        <span className={styles.reelArrow} aria-hidden="true">↗</span>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className={styles.pause} type="button" onClick={() => setPaused((value) => !value)}>
        {paused ? 'Resume scrolling' : 'Pause scrolling'}
      </button>
    </section>
  );
}
