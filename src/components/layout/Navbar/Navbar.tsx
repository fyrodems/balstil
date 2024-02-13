'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import { isMobileWidth } from '@/utils/functions';
import { Hamburger } from '../Hamburger/Hamburger';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const locale = useLocale() as 'en' | 'pl' | undefined;
  const pathname = usePathname();

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
      <div className={styles.headerContainer}>
        <Hamburger
          setDropdownOpen={setDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <Link href="/">
          <Image width={160} height={40} src={'/assets/logo.png'} alt="" />
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
            <li>
              <Link locale={locale} href={`/product`}>
                Przykładowy produkt
              </Link>
            </li>
            <li>
              <Link locale={locale} href={`/404`}>
                Strona 404
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );

  const desktopNavBar = (
    <div className={styles.headerContainer}>
      <Link href="/">
        <Image width={180} height={40} src={'/assets/logo.png'} alt="" />
      </Link>
      <nav className={`${styles.desktopNavigation}`}>
        <ul>
          <li
            className={
              pathname.includes('/about') ? styles.selectedMenuItem : ''
            }
          >
            <Link locale={locale} href={`/about`}>
              O nas
            </Link>
          </li>
          <li
            className={
              pathname.includes('/product') ? styles.selectedMenuItem : ''
            }
          >
            <Link locale={locale} href={`/product`}>
              Przykładowy produkt
            </Link>
          </li>
          <li
            className={pathname.includes('/404') ? styles.selectedMenuItem : ''}
          >
            <Link locale={locale} href={`/404`}>
              Strona 404
            </Link>
          </li>
        </ul>
      </nav>
      <Image
        width={80}
        height={40}
        src={'/assets/navbar/menuIcons.png'}
        alt=""
        style={{ cursor: 'not-allowed' }}
      />
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
