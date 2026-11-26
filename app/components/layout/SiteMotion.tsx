'use client';

import { useEffect, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function SiteMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-reveal]'))
      .filter((element) => element.getBoundingClientRect().top > window.innerHeight + 24);

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.setAttribute('data-scroll-state', 'visible');
        observer.unobserve(target);
      }
    }, { rootMargin: '0px 0px -24px 0px', threshold: 0.01 });

    for (const target of targets) {
      target.dataset.scrollState = 'waiting';
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) delete target.dataset.scrollState;
    };
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
