
'use client';

import { useCallback, useRef, useState } from 'react';

export default function BeforeAfterSlider() {
  const [value, setValue] = useState(52);

  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Update comparison position
  const updatePosition = useCallback((clientX: number) => {
    const container = sliderRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    if (!rect.width) return;

    const position =
      ((clientX - rect.left) / rect.width) * 100;

    setValue(Math.min(100, Math.max(0, position)));
  }, []);

  // Start mouse or touch dragging
  const handlePointerDown = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    dragging.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);

    // Immediately synchronize with the pointer position
    updatePosition(event.clientX);
  };

  // Continue dragging
  const handlePointerMove = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (!dragging.current) return;

    updatePosition(event.clientX);
  };

  // Stop dragging
  const handlePointerUp = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    dragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  // Keyboard support
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const step = event.shiftKey ? 10 : 2;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        setValue((v) => Math.max(0, v - step));
        break;

      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        setValue((v) => Math.min(100, v + step));
        break;

      case 'Home':
        event.preventDefault();
        setValue(0);
        break;

      case 'End':
        event.preventDefault();
        setValue(100);
        break;
    }
  };

  return (
    <div
      ref={sliderRef}
      className="before-after"
      style={{
        '--ba-position': `${value}%`,
      } as React.CSSProperties}
    >
      {/* AFTER IMAGE */}
      <div className="ba-after" />

      {/* BEFORE IMAGE */}
      <div
        className="ba-before"
        style={{
          clipPath: `inset(0 ${100 - value}% 0 0)`,
        }}
      />

      {/* COMPARISON LINE */}
      <div
        className="ba-line"
        style={{
          left: `${value}%`,
        }}
      />

      {/* LABELS */}
      <span className="ba-label before">
        BEFORE
      </span>

      <span className="ba-label after">
        AFTER
      </span>

      {/* TOUCH FRIENDLY HANDLE */}
      <button
        type="button"
        className="ba-handle"
        style={{
          left: `${value}%`,
        }}
        role="slider"
        aria-label="Drag to compare before and after treatment"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        aria-valuetext={`${Math.round(value)}% before image visible`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        onLostPointerCapture={() => {
          dragging.current = false;
        }}
        onKeyDown={handleKeyDown}
      >
        <span className="ba-handle-icon" aria-hidden="true">
          ↔
        </span>
      </button>
    </div>
  );
}
