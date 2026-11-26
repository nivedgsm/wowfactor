'use client';

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import styles from './BeforeAfterSlider.module.css';

type Drag = {
  pointerId: number;
  left: number;
  width: number;
  startX: number;
  startY: number;
  grabOffset: number;
  engaged: boolean;
};

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export default function BeforeAfterSlider() {
  const [value, setValue] = useState(52);
  const handleRef = useRef<HTMLButtonElement>(null);
  const drag = useRef<Drag | null>(null);
  const frame = useRef<number | null>(null);
  const latestX = useRef(0);

  function cancelFrame() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }

  useEffect(() => cancelFrame, []);

  function updatePosition(clientX: number, gesture: Drag) {
    setValue(clamp((clientX - gesture.left - gesture.grabOffset) / gesture.width * 100));
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0 || drag.current) return;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    if (!width) return;

    const onHandle = handleRef.current?.contains(event.target as Node);
    const gesture = {
      pointerId: event.pointerId,
      left,
      width,
      startX: event.clientX,
      startY: event.clientY,
      grabOffset: onHandle ? event.clientX - (left + width * value / 100) : 0,
      engaged: event.pointerType === 'mouse',
    };
    drag.current = gesture;
    event.currentTarget.setPointerCapture(event.pointerId);

    if (gesture.engaged) {
      handleRef.current?.focus({ preventScroll: true });
      updatePosition(event.clientX, gesture);
    }
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current;
    if (gesture?.pointerId !== event.pointerId) return;

    if (!gesture.engaged) {
      const deltaX = Math.abs(event.clientX - gesture.startX);
      const deltaY = Math.abs(event.clientY - gesture.startY);
      if (deltaX < 6 || deltaX <= deltaY) return;
      gesture.engaged = true;
    }

    latestX.current = event.clientX;
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      updatePosition(latestX.current, gesture);
    });
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current;
    if (gesture?.pointerId !== event.pointerId) return;

    cancelFrame();
    drag.current = null;
    const isTap = Math.hypot(event.clientX - gesture.startX, event.clientY - gesture.startY) < 6;
    if (event.type === 'pointerup' && (gesture.engaged || isTap)) {
      updatePosition(event.clientX, gesture);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const step = event.shiftKey ? 10 : 2;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        setValue((current) => clamp(current - step));
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        setValue((current) => clamp(current + step));
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
  }

  return (
    <div
      className={`before-after ${styles.surface}`}
      style={{ '--ba-position': `${value}%` } as CSSProperties}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
    >
      <div className="ba-after" />
      <div className={`ba-before ${styles.before}`} />
      <span className="ba-label before">BEFORE</span>
      <span className="ba-label after">AFTER</span>

      <div className={styles.divider}>
        <div className="ba-line" />
        <button
          ref={handleRef}
          type="button"
          className={`ba-handle ${styles.handle}`}
          role="slider"
          aria-label="Drag to compare before and after treatment"
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(value)}
          aria-valuetext={`${Math.round(value)}% before image visible`}
          onKeyDown={handleKeyDown}
        >
          <span aria-hidden="true">&#8596;</span>
        </button>
      </div>
    </div>
  );
}
