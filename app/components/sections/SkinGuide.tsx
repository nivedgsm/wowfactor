'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const types = [
  { name: 'Balanced', description: 'Your skin generally feels comfortable and has little persistent dryness or shine.', care: 'If your concern is texture or uneven tone, a consultation can help identify what is causing it and which options are worth discussing.', path: 'general-dermatology', link: 'Explore dermatology' },
  { name: 'Dry', description: 'Your skin may feel tight, rough or flaky.', care: 'Mention persistent dryness before booking a peel or resurfacing. A dermatologist can check for irritation or a skin condition and discuss whether to address that first.', path: 'general-dermatology', link: 'Explore dermatology' },
  { name: 'Oily', description: 'Your skin may look shiny, particularly across the forehead, nose or chin.', care: 'If shine comes with breakouts, an acne consultation can distinguish active acne from marks or scars and help you decide what to address first.', path: 'acne-acne-scars', link: 'Explore acne care' },
  { name: 'Combination', description: 'You may notice an oily forehead, nose or chin alongside drier cheeks.', care: 'Point out which areas react differently during your consultation. This can help the clinician decide which areas to treat and how to prepare them.', path: 'general-dermatology', link: 'Explore dermatology' },
  { name: 'Sensitive', description: 'Some products or procedures may cause stinging, burning or irritation.', care: 'Share any recent reactions and the products that triggered them. The clinician can assess whether to adapt or defer an exfoliating or energy-based procedure.', path: 'general-dermatology', link: 'Explore dermatology' },
];

const tones = [
  { name: 'Very light', color: '#f2d7c0' },
  { name: 'Light', color: '#e7b999' },
  { name: 'Medium', color: '#c89571' },
  { name: 'Tan', color: '#a96e4c' },
  { name: 'Deep', color: '#774936' },
  { name: 'Very deep', color: '#492921' },
];

export default function SkinGuide() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = types[active];
  const step = (direction: number) => {
    setActive((index) => (index + direction + types.length) % types.length);
  };

  return (
    <section id="skin-guide" className="skin-guide" aria-labelledby="skin-guide-heading">
      <h2 id="skin-guide-heading" data-scroll-reveal>Skin types &amp; <em>skin tones</em></h2>
      <p data-scroll-reveal>Skin type describes how your skin behaves. Skin tone describes its visible color. Both can inform a consultation.</p>

      <div className="skin-guide-grid" data-scroll-reveal>
        <div className="skin-guide-panel" role="group" aria-roledescription="carousel" aria-label="Skin types">
          <h3>Skin types</h3>
          <div className="skin-guide-controls" role="group" aria-label="Choose a skin type">
            {types.map((type, index) => (
              <button key={type.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
                {type.name}
              </button>
            ))}
          </div>
          <div aria-live="polite">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.name}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onPanEnd={(_, { offset }) => {
                  if (Math.abs(offset.x) > 55 && Math.abs(offset.x) > Math.abs(offset.y)) {
                    step(offset.x < 0 ? 1 : -1);
                  }
                }}
                className="swipe-slide"
              >
                <h4>{current.name} skin</h4>
                <p>{current.description}</p>
                <p>{current.care}</p>
                <Link className="text-link" href={`/treatments/${current.path}`}>{current.link}</Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="skin-guide-panel">
          <h3>Skin tones</h3>
          <ul className="skin-tone-swatches" aria-label="Illustrative skin tone range">
            {tones.map((tone) => (
              <li key={tone.name}>
                <span aria-hidden="true" style={{ backgroundColor: tone.color }} />
                {tone.name}
              </li>
            ))}
          </ul>
          <p>These swatches illustrate a range of tones. Before a laser or peel, tell your clinician if you tan easily or tend to develop dark or light marks after irritation. The clinician considers your history and the concern being treated when planning the procedure.</p>
          <div className="skin-guide-links">
            <Link className="text-link" href="/treatments/pigmentation-melasma">Pigmentation care</Link>
            <Link className="text-link" href="/treatments/laser">Laser treatments</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
