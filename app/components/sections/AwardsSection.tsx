'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useId, useRef, useState } from 'react';
import styles from './AwardsSection.module.css';

type Award = {
  title: string;
  detail: string;
  year?: number;
  photos: { file: string; alt: string }[];
};

const awards: Award[] = [
  {
    title: 'Outstanding Contribution in Healthcare Services',
    detail: 'India Business Summit · Awarded to Wow Factor',
    year: 2022,
    photos: [{ file: 'india-business-summit-2022', alt: 'Framed India Business Summit certificate and star plaque' }],
  },
  {
    title: 'Female Entrepreneur of the Year',
    detail: 'GTF Women Excellence Summit · Dr. Asha Biju',
    year: 2022,
    photos: [{ file: 'gtf-women-excellence-2022', alt: 'Female Entrepreneur of the Year trophy and certificate' }],
  },
  {
    title: 'Excellence in Beauty and Wellness Brand Development',
    detail: 'Unique Times Excellence Award · Dr. Asha Biju',
    year: 2021,
    photos: [
      { file: 'unique-times-2021-ceremony', alt: 'Unique Times Excellence Award presentation' },
      { file: 'unique-times-2021-certificate', alt: 'Unique Times certificate and gold trophy' },
    ],
  },
  {
    title: 'WMC Healthcare Excellence Award',
    detail: 'World Medical Council, Kerala Chapter · Certificate of Honour for Dr. Asha Biju',
    year: 2019,
    photos: [
      { file: 'wmc-2019-trophy', alt: 'World Medical Council trophy inscribed with Distinctive Services to the Healthcare Sector' },
      { file: 'wmc-2019-certificate', alt: 'World Medical Council Certificate of Honour for professional excellence and outstanding contribution' },
    ],
  },
  {
    title: 'Best Clinical Result with Combination Technologies or Procedures',
    detail: 'FVC Awards at Facethetics · Second prize for Dr. Asha Biju',
    year: 2017,
    photos: [
      { file: 'fvc-2017-ceremony', alt: 'Onstage presentation of the FVC Awards prize' },
      { file: 'fvc-2017-announcement', alt: 'Announcement of the second-place FVC Awards result' },
      { file: 'fvc-2017-collage', alt: 'Facethetics conference and FVC Awards photo collage' },
      { file: 'fvc-2017-programme', alt: 'FVC Awards graphic for the fifth national AFAASI conference' },
    ],
  },
  {
    title: 'Trivandrum Healthcare Leadership Awards',
    detail: 'Certificate presentation',
    photos: [{ file: 'trivandrum-healthcare-leadership', alt: 'Framed Trivandrum Healthcare Leadership Awards certificate at the presentation' }],
  },
  {
    title: 'MAN Fashion Zone Excellence Award',
    detail: 'Award presentation at Press Club Thiruvananthapuram',
    photos: [{ file: 'man-fashion-zone-excellence', alt: 'Glass award at the MAN Fashion Zone Excellence Award presentation' }],
  },
  {
    title: 'Aesthetics Conference Recognition',
    detail: 'Commemorative plaque presentation',
    year: 2026,
    photos: [{ file: 'aesthetics-conference-2026', alt: 'Glass plaque presented onstage at the 2026 aesthetics conference' }],
  },
  {
    title: 'Recent Trends in Skin and Hair Treatment',
    detail: 'Commemorative plaque presented to Dr. Asha Biju',
    photos: [{ file: 'skin-and-hair-treatment-recognition', alt: 'Round plaque inscribed with Recent Trends in Skin and Hair Treatment' }],
  },
];

function awardIndex(index: number) {
  return (index + awards.length) % awards.length;
}

export default function AwardsSection() {
  const headingId = useId();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const selectedAward = awards[active];

  function move(direction: number) {
    setPhotoIndex(0);
    setActive((current) => awardIndex(current + direction));
  }

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <div className={styles.intro} data-scroll-reveal>
          <span className={styles.eyebrow}>Recognition</span>
          <h2 id={headingId}><span className={styles.titleLead}>Our <em>Awards &amp;</em></span> Achievements</h2>
          <p>Honours received by Wow Factor and Dr. Asha Biju for contributions to healthcare, medical aesthetics and entrepreneurship.</p>
        </div>

        <div
          className={styles.carousel}
          role="group"
          aria-roledescription="carousel"
          aria-label="Awards"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              move(event.key === 'ArrowLeft' ? -1 : 1);
            }
          }}
        >
          <div className={styles.stage}>
            <button type="button" className={styles.arrow} aria-label="Previous award" onClick={() => move(-1)}>
              <span aria-hidden="true" />
            </button>

            <div
              className={styles.cards}
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
              }}
              onTouchCancel={() => { touchStart.current = null; }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                if (!start) return;
                const touch = event.changedTouches[0];
                const deltaX = touch.clientX - start.x;
                const deltaY = touch.clientY - start.y;
                if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
                  move(deltaX < 0 ? 1 : -1);
                }
              }}
            >
              {[-2, -1, 0, 1, 2].map((offset) => {
                const award = awards[awardIndex(active + offset)];
                const photo = award.photos[offset === 0 ? photoIndex : 0];
                const distance = Math.abs(offset);

                return (
                  <motion.article
                    key={award.title}
                    className={styles.card}
                    aria-hidden={offset !== 0 ? true : undefined}
                    initial={false}
                    transformTemplate={({ x, y, rotate, scale }) =>
                      `translateX(calc(${x} * var(--award-spacing))) translateY(${y}) rotate(${rotate}) scale(${scale})`
                    }
                    animate={{
                      x: `${offset * 104}%`,
                      y: `${distance * distance * 8}px`,
                      rotate: `${offset * 7}deg`,
                      scale: 1 - distance * 0.09,
                      filter: offset === 0 ? 'blur(0px)' : 'blur(2.5px)',
                      opacity: 1 - distance * 0.18,
                    }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
                    style={{ zIndex: 3 - distance }}
                  >
                    <div className={styles.art}>
                      <Image
                        src={`/images/awards/${photo.file}.webp`}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 19vw"
                      />
                    </div>
                    <h3>{award.title}</h3>
                    <p className={styles.detail}>{award.detail}</p>
                    {award.year && <span className={styles.year}>{award.year}</span>}
                  </motion.article>
                );
              })}
            </div>

            <button type="button" className={`${styles.arrow} ${styles.next}`} aria-label="Next award" onClick={() => move(1)}>
              <span aria-hidden="true" />
            </button>
          </div>

          <div className={styles.dots} role="group" aria-label="Choose an award">
            {awards.map((award, index) => (
              <button
                key={award.title}
                type="button"
                aria-label={award.year ? `${award.title}, ${award.year}` : award.title}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => {
                  setPhotoIndex(0);
                  setActive(index);
                }}
              />
            ))}
          </div>
          <div className={styles.photoControls}>
            {selectedAward.photos.length > 1 && (
              <button
                type="button"
                onClick={() => setPhotoIndex((current) => (current + 1) % selectedAward.photos.length)}
                aria-label={`Next photo for ${selectedAward.title}. Photo ${photoIndex + 1} of ${selectedAward.photos.length}`}
              >
                Photo {photoIndex + 1} of {selectedAward.photos.length} <span aria-hidden="true">›</span>
              </button>
            )}
          </div>
          <span className={styles.status} role="status">
            {selectedAward.title}{selectedAward.year && `, ${selectedAward.year}`}. Award {active + 1} of {awards.length}.
            {selectedAward.photos.length > 1 && ` Photo ${photoIndex + 1} of ${selectedAward.photos.length}. ${selectedAward.photos[photoIndex].alt}.`}
          </span>
        </div>
      </div>
    </section>
  );
}
