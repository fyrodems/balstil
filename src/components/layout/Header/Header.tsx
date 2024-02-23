"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Inbox,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { Link } from "@/navigation";
import useWindowDimensions from "@/utils/useWindowDimensions";
import useLocation from "@/utils/useLocation";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownReference = useRef<HTMLDivElement | null>(null);
  const locale = useLocale() as "en" | "pl" | undefined;
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
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const mobileNavBar = (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.outerHamburger}>
          <Image
            width={32}
            height={40}
            src={"/assets/navbar/dark/burger.svg"}
            alt="hamburger"
            onClick={() => setDropdownOpen(true)}
          />
        </div>

        <Link href="/">
          <Image
            width={160}
            height={40}
            src={"/assets/navbar/gold/logo.svg"}
            alt=""
          />
        </Link>

        <Image
          width={160}
          height={40}
          src={"/assets/navbar/additionalIcons.png"}
          alt=""
          style={{ cursor: "not-allowed" }}
        />
      </div>

      <nav
        className={classNames(
          styles.burgerNavigation,
          isDropdownOpen ? styles.open : ""
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
              src={"/assets/navbar/dark/logo.svg"}
              alt=""
            />
          </Link>

          <div className={styles.menuLinks}>
            <div>
              <h2>Produkty</h2>
              <ul>
                <li>
                  <Link locale={locale} href={`/product`}>
                    BIOKOMINKI
                  </Link>
                </li>
                <li>
                  <Link
                    locale={locale}
                    href={`#`}
                    style={{ cursor: "not-allowed" }}
                  >
                    PIECE WOLNOSTOJĄCE
                  </Link>
                </li>
                <li>
                  <Link
                    locale={locale}
                    href={`#`}
                    style={{ cursor: "not-allowed" }}
                  >
                    KOMINKI ELEKTRYCZNE
                  </Link>
                </li>
                <li>
                  <Link
                    locale={locale}
                    href={`#`}
                    style={{ cursor: "not-allowed" }}
                  >
                    AKCESORIA
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

  return (
    <header
      data-name="dropdownReference"
      ref={dropdownReference}
      className={classNames(styles.header, isHome ? styles.home : "")}
    >
      {mobileNavBar}
      {/* {width && width < 992 ? mobileNavBar : desktopNavBar} */}
    </header>
  );
};
