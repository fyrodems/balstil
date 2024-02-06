'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          <Image width={180} height={40} src={'/assets/logo.png'} alt="" />
        </Link>
      </div>
      <button className={styles.navbarToggler} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles.navbarCollapse} ${expanded ? styles.show : ''}`}
      >
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="#category1">Kategoria 1</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#category2">Kategoria 2</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#category3">Kategoria 3</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#category4">Kategoria 4</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#profile">Mój profil</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#orders">Zamówienia</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
