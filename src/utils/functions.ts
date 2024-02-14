'use client';

export const isMobileWidth = () => {
  // if (typeof window !== 'undefined') {
  return window.innerWidth < 992;
  // }
};

export const isLargeDesktopWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > 1920;
  }
};
