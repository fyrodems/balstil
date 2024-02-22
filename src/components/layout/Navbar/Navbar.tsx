'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Inbox,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
} from 'lucide-react';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { Link } from '@/navigation';
import useWindowDimensions from '@/utils/useWindowDimensions';
import useLocation from '@/utils/useLocation';

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownReference = useRef<HTMLDivElement | null>(null);
  const locale = useLocale() as 'en' | 'pl' | undefined;
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isHome = useLocation();

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownReference.current &&
      !dropdownReference.current.contains(event.target as Node)
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
        <div className={styles.outerHamburger}>
          <Image
            width={32}
            height={40}
            src={
              isHome
                ? '/assets/navbar/white/burger.svg'
                : '/assets/navbar/dark/burger.svg'
            }
            alt="hamburger"
            onClick={() => setDropdownOpen(true)}
          />
        </div>

        <Link href="/">
          <Image
            width={160}
            height={40}
            src={
              isHome
                ? '/assets/navbar/white/logo.svg'
                : '/assets/navbar/dark/logo.svg'
            }
            alt=""
          />
        </Link>
        <div className={styles.healper} />
      </div>

      <nav
        className={classNames(
          styles.burgerNavigation,
          isDropdownOpen ? styles.open : ''
        )}
      >
        <div className={styles.innerHamburger}>
          <ChevronLeft size={28} onClick={() => setDropdownOpen(false)} />
        </div>

        <div className={styles.upperContainer}>
          <Link href="/">
            <Image
              width={160}
              height={40}
              src={'/assets/navbar/dark/logo.svg'}
              alt=""
            />
          </Link>

          <div className={styles.menuLinks}>
            <div>
              <h2>Lorem ipsum</h2>
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
              </ul>
            </div>
            <div className={styles.disabled}>
              <h2>Mój profil</h2>
              <ul>
                <li>
                  <Inbox size={18} />
                  <Link locale={locale} href={`#`}>
                    Zamówienia
                  </Link>
                  <ChevronDown />
                </li>
                <li>
                  <Settings size={18} />

                  <Link locale={locale} href={`#`}>
                    Ustawienia
                  </Link>
                  <ChevronDown />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classNames(styles.disabled, styles.bottomContainer)}>
          <ul>
            <li>
              <HelpCircle size={18} />
              <Link locale={locale} href={`#`}>
                Pomoc
              </Link>
            </li>
            <li>
              <LogOut size={18} />
              <Link locale={locale} href={`#`}>
                Wyloguj
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  const desktopNavBar = (
    <>
      <div className={styles.outerHamburger}>
        <Image
          width={26}
          height={40}
          src={
            isHome
              ? '/assets/navbar/white/burger.svg'
              : '/assets/navbar/dark/burger.svg'
          }
          className={styles.burger}
          alt="hamburger"
          onClick={() => setDropdownOpen(true)}
        />
      </div>

      <div
        className={classNames(
          styles.headerContainer,
          isHome ? styles.home : ''
        )}
      >
        <nav
          className={classNames(
            styles.burgerNavigation,
            isDropdownOpen ? styles.open : ''
          )}
        >
          <div className={styles.innerHamburger}>
            <ChevronLeft size={28} onClick={() => setDropdownOpen(false)} />
          </div>

          <div className={styles.upperContainer}>
            <Link href="/">
              <Image
                width={160}
                height={40}
                src={'/assets/navbar/dark/logo.svg'}
                alt=""
              />
            </Link>

            <div className={styles.menuLinks}>
              <div className={styles.disabled}>
                <h2>Mój profil</h2>
                <ul>
                  <li>
                    <Inbox size={18} />
                    <Link locale={locale} href={`#`}>
                      Zamówienia
                    </Link>
                    <ChevronDown />
                  </li>
                  <li>
                    <Settings size={18} />

                    <Link locale={locale} href={`#`}>
                      Ustawienia
                    </Link>
                    <ChevronDown />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classNames(styles.disabled, styles.bottomContainer)}>
            <ul>
              <li>
                <HelpCircle size={18} />
                <Link locale={locale} href={`#`}>
                  Pomoc
                </Link>
              </li>
              <li>
                <LogOut size={18} />
                <Link locale={locale} href={`#`}>
                  Wyloguj
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Link href="/">
          <Image
            width={180}
            height={40}
            src={
              isHome
                ? '/assets/navbar/dark/logo.svg'
                : '/assets/navbar/dark/logo.svg'
            }
            alt=""
          />
        </Link>

        <nav className={styles.desktopNavigation}>
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
          </ul>
        </nav>

        <Image
          width={80}
          height={40}
          src={'/assets/navbar/dark/additionalIcons.svg'}
          alt=""
          style={{ cursor: 'not-allowed' }}
        />
      </div>
    </>
  );

  return (
    <header
      data-name="dropdownReference"
      ref={dropdownReference}
      className={classNames(styles.header, isHome ? styles.home : '')}
    >
      {width && width < 992 ? mobileNavBar : desktopNavBar}
    </header>
  );
};
