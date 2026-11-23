'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { treatmentCategories, treatmentHref } from '@/app/data/treatments';
import Arrow from '../ui/Arrow';

type NavbarProps = { onBook: () => void };

export default function Navbar({ onBook }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="/" onClick={closeMenu}><img src="/images/logo-pink.png" alt="WOW FACTOR" /></a>
        <div className="nav-links">
          <a href="/about">About</a>
          <a href="/treatments">Treatments</a>
          <a href="/results">Results</a>
          <a href="/experts">Experts</a>
          <a href="/journal">Journal</a>
        </div>
        <button className="pill-btn" onClick={onBook}>Book consultation <Arrow /></button>
        <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Open menu">☰</button>
      </nav>
      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mega-menu">
          <div className="mega-pages">
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="/treatments" onClick={closeMenu}>Treatments</a>
            <a href="/results" onClick={closeMenu}>Results</a>
            <a href="/experts" onClick={closeMenu}>Experts</a>
            <a href="/journal" onClick={closeMenu}>Journal</a>
          </div>
          <div className="mega-intro"><span>EXPLORE</span><h3>Care designed<br /><em>around you.</em></h3></div>
          {treatmentCategories.map((group) => (
            <div className="mega-col" key={group.name}>
              <b><Link href={treatmentHref(group.slug)} onClick={closeMenu}>{group.name}</Link></b>
              {group.items.slice(0, 5).map((item) => (
                <Link href={treatmentHref(item.slug)} key={item.slug} onClick={closeMenu}>{item.name}</Link>
              ))}
            </div>
          ))}
        </motion.div>
      )}
    </header>
  );
}











// 'use client';

// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { treatmentGroups } from '@/app/data/siteData';
// import Arrow from '../ui/Arrow';

// type NavbarProps = {
//   onBook: () => void;
// };

// export default function Navbar({ onBook }: NavbarProps) {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <header className={`nav-wrap ${open ? 'nav-open' : ''}`}>
//       <nav className="nav">

//         {/* BRAND */}
//         <a
//           href="#top"
//           className="brand"
//           onClick={closeMenu}
//           aria-label="WOW FACTOR"
//         >
//           <img
//             src="/images/logo-pink.png"
//             alt="WOW FACTOR"
//           />
//         </a>

//         {/* DESKTOP NAV */}
//         <div className="nav-links">

//           <a href="#about" onClick={closeMenu}>
//             About
//           </a>

//           <button
//             type="button"
//             className={`nav-treatment-trigger ${open ? 'active' : ''}`}
//             onClick={() => setOpen((value) => !value)}
//             aria-expanded={open}
//           >
//             <span>Treatments</span>

//             <span className="nav-trigger-icon">
//               <span />
//               <span />
//             </span>
//           </button>

//           <a href="#results" onClick={closeMenu}>
//             Results
//           </a>

//           <a href="#founders" onClick={closeMenu}>
//             Experts
//           </a>

//           <a href="#journal" onClick={closeMenu}>
//             Journal
//           </a>

//         </div>

//         {/* CTA */}
//         <button
//           type="button"
//           className="nav-book"
//           onClick={onBook}
//         >
//           <span>Book consultation</span>

//           <span className="nav-book-arrow">
//             <Arrow />
//           </span>
//         </button>

//         {/* MOBILE */}
//         <button
//           type="button"
//           className="mobile-menu"
//           onClick={() => setOpen((value) => !value)}
//           aria-label={open ? 'Close navigation' : 'Open navigation'}
//           aria-expanded={open}
//         >
//           <span />
//           <span />
//         </button>

//       </nav>

//       {/* =====================================================
//           TREATMENT OVERLAY
//       ===================================================== */}

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="treatment-overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="treatment-overlay-inner"
//               initial={{ y: -25, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -15, opacity: 0 }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >

//               {/* LEFT */}
//               <div className="treatment-overlay-intro">

//                 <div className="overlay-meta">
//                   <span>02</span>
//                   <span>AREAS OF EXPERTISE</span>
//                 </div>

//                 <div className="overlay-heading">
//                   <span>Explore</span>

//                   <h2>
//                     Care
//                     <br />
//                     <em>without limits.</em>
//                   </h2>
//                 </div>

//                 <p>
//                   From skin and hair to advanced aesthetics,
//                   explore treatments designed around your
//                   individual needs.
//                 </p>

//                 <a
//                   href="#treatments-directory"
//                   className="overlay-all"
//                   onClick={closeMenu}
//                 >
//                   <span>Explore all treatments</span>
//                   <Arrow />
//                 </a>

//               </div>

//               {/* RIGHT */}
//               <div className="treatment-overlay-list">

//                 {treatmentGroups.slice(0, 4).map((group, index) => (
//                   <motion.div
//                     key={group.name}
//                     className="treatment-group"
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.45,
//                       delay: index * 0.06,
//                     }}
//                   >

//                     <div className="treatment-group-number">
//                       <span>
//                         0{index + 1}
//                       </span>

//                       <span />
//                     </div>

//                     <div className="treatment-group-content">

//                       <div className="treatment-group-heading">
//                         <h3>{group.name}</h3>

//                         <span>
//                           {group.items.length
//                             .toString()
//                             .padStart(2, '0')}
//                         </span>
//                       </div>

//                       <div className="treatment-items">

//                         {group.items
//                           .slice(0, 4)
//                           .map((item) => (
//                             <a
//                               key={item}
//                               href="#treatments-directory"
//                               onClick={closeMenu}
//                             >
//                               <span>{item}</span>

//                               <Arrow />
//                             </a>
//                           ))}

//                       </div>

//                     </div>

//                   </motion.div>
//                 ))}

//               </div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
