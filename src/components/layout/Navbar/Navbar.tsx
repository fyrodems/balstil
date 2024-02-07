'use client';

// import { useState } from 'react';
// import styles from './Navbar.module.scss';
// import Image from 'next/image';
// import { Link } from '@/navigation';
// import { Hamburger } from '../Hamburger/Hamburger';

// export const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navbarBrand}>
//         <Hamburger />
// <Link href="/">
//   <Image width={180} height={40} src={'/assets/logo.png'} alt="" />
// </Link>
//       </div>
//       {/* <button className={styles.navbarToggler} onClick={toggleNavbar}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </button> */}
//       <div
//         className={`${styles.navbarCollapse} ${expanded ? styles.show : ''}`}
//       >
//         {/* <ul className={styles.navbarNav}>
//           <li className={styles.navItem}>
//             <Link href="#category1">Kategoria 1</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="#category2">Kategoria 2</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="#category3">Kategoria 3</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="#category4">Kategoria 4</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="#profile">Mój profil</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="#orders">Zamówienia</Link>
//           </li>
//         </ul> */}
//       </div>
//     </nav>
//   );
// };

import { useState, useEffect, useRef, type MouseEvent } from 'react';
import styles from './Navbar.module.scss';
import { isMobileWidth } from '@/utils/functions';
import { Hamburger } from '../Hamburger/Hamburger';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Button } from '@/components/common/Button/Button';

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const locale = useLocale();

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const mobileNavBar = (
    <>
      <div className={`${styles.headerContainer} ${styles.headerBg}`}>
        <Hamburger
          setDropdownOpen={setDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <Link href="/">
          <Image width={180} height={40} src={'/assets/logo.png'} alt="" />
        </Link>
        <div className={styles.healper}></div>
      </div>
      {isDropdownOpen && (
        <nav className={`${styles.mobileNavigation} ${styles.headerBg}`}>
          <ul>
            <li>
              <Link locale={locale} href={`/about`}>
                O nas
              </Link>
            </li>
          </ul>
          <Button to="/login" content="Zaloguj się" className={styles.button} />
        </nav>
      )}
    </>
  );

  const desktopNavBar = (
    <div className={`${styles.headerContainer} ${styles.headerBg}`}>
      <Link href="/">
        <Image width={180} height={40} src={'/assets/logo.png'} alt="" />
      </Link>
      <nav className={`${styles.desktopNavigation}`}>
        <ul>
          <li>
            <Link locale={locale} href={`/about`}>
              O nas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <div data-name="dropdownRef" ref={dropdownRef}>
        {isMobileWidth() ? mobileNavBar : desktopNavBar}
      </div>
    </>
  );
};
