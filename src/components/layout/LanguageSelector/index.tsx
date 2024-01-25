'use client';

import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
// import Link from "next-intl/link";
import { useLocale } from 'next-intl';
// import { usePathname } from "next-intl/client";
import styles from './languageSelector.module.scss';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
const locales = ['en', 'pl'] as const;
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export const LanguageSelector = () => {
  const locale = useLocale();
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <Dropdown
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      onClick={toggleDropdown}
      className={styles.dropdown}
    >
      <Dropdown.Toggle
        className={styles.dropdown__toggle}
        id="languageDropdown"
      >
        {locale.toUpperCase()}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          as={Link}
          href={`${pathname}`}
          locale="pl"
          eventKey={'pl'}
        >
          PL
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          href={`${pathname}`}
          locale="en"
          eventKey={'en'}
        >
          EN
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
