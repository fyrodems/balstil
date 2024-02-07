'use client';

import { Squeeze as HamburgerIcon } from 'hamburger-react';

interface HamburgerMenuProps {
  setDropdownOpen: (isOpen: boolean) => void;
  isDropdownOpen: boolean;
}

export const Hamburger: React.FC<HamburgerMenuProps> = ({
  setDropdownOpen,
  isDropdownOpen,
}) => {
  const toggleBurger = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <HamburgerIcon
      toggled={isDropdownOpen}
      toggle={toggleBurger}
      color="#AF8E6D"
    />
  );
};
