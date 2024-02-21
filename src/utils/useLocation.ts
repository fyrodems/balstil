import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// type location

const useLocation = (): boolean => {
  const locationPathname = usePathname();
  const locale = useLocale() as 'en' | 'pl' | undefined;
  // const [pathname, setPathname] = useState<string>('/');
  const [isHome, setIsHome] = useState<boolean>(true);

  useEffect(() => {
    setIsHome(locationPathname === `/${locale}`);
  }, [locale, locationPathname]);

  return isHome;
};

export default useLocation;
