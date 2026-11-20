'use client';

import { useState } from 'react';

export default function BeforeAfterSlider() {
  const [value, setValue] = useState(52);

  return (
    <div className="before-after">
      <div className="ba-after" />
      <div className="ba-before" style={{ width: `${value}%` }} />
      <div className="ba-line" style={{ left: `${value}%` }} />
      <input aria-label="Compare before and after" type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <span className="ba-label before">BEFORE</span>
      <span className="ba-label after">AFTER</span>
      <span className="ba-handle" style={{ left: `${value}%` }}>↔</span>
    </div>
  );
}
