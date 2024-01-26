'use client';

import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useLocale } from 'next-intl';
import styles from './languageSelector.module.scss';
import { Link, usePathname } from '@/navigation';

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
