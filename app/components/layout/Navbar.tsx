'use client';

import { useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { treatmentCategories, treatmentHref } from '@/app/data/treatments';
import styles from './Navbar.module.css';

type NavbarProps = { onBook: () => void };

const pages = [
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Results', href: '/results' },
  { label: 'Experts', href: '/experts' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar({ onBook }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  const pageLinks = pages.map(({ label, href }) => {
    const current = pathname === href || pathname === href + '/';
    const active = current || pathname.startsWith(href + '/');

    return (
      <Link key={href} href={href} onClick={closeMenu} aria-current={current ? 'page' : undefined} data-active={active}>
        {label}
      </Link>
    );
  });

  return (
    <header className={styles.header} onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        closeMenu();
        toggleRef.current?.focus();
      }
    }}>
      <nav aria-label="Main navigation" className={styles.bar}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <Image src="/images/logo-pink.png" alt="Wow Factor home" width={3092} height={934} />
        </Link>

        <div className={styles.links}>{pageLinks}</div>

        <div className={styles.controls}>
          <button className={styles.booking} type="button" onClick={() => {
            closeMenu();
            onBook();
          }} aria-label="Book consultation">
            <span>Book Consultation</span>
            <span aria-hidden="true">→</span>
          </button>
          <button
            ref={toggleRef}
            className={styles.menuToggle}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className={styles.panelSlot} id={menuId} hidden={!open}>
          {open && (
            <motion.div className={styles.panel}
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
            >
              <div className={styles.panelLinks}>{pageLinks}</div>
              <div className={styles.categories}>
                {treatmentCategories.map((group) => (
                  <div className={styles.category} key={group.slug}>
                    <Link href={treatmentHref(group.slug)} onClick={closeMenu}>{group.name}</Link>
                    {group.items.slice(0, 5).map((item) => (
                      <Link href={treatmentHref(item.slug)} key={item.slug} onClick={closeMenu}>{item.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
