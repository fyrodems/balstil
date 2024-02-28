import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import styles from './languageSelector.module.scss';
import Image from 'next/image';

interface LangWithFlagProps {
  locale: 'en' | 'pl' | undefined;
  language: string;
  flagCode?: string;
}

export const LanguageSelector: React.FC = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const LinkWithFlag: React.FC<LangWithFlagProps> = ({
    locale,
    language,
    flagCode,
  }) => (
    <Link href={pathname} locale={locale}>
      <Image
        src={`https://hatscripts.github.io/circle-flags/flags/${
          flagCode || locale
        }.svg`}
        alt={'flaga'}
        height={25}
        width={25}
      />
      {language}
    </Link>
  );

  const GenerateLanguageSelectorTrigger: React.FC<{ locale: string }> = ({
    locale,
  }) => (
    <div className={styles.languageSelectorTrigger}>
      <Image
        src={`https://hatscripts.github.io/circle-flags/flags/${
          locale === 'pl' ? 'pl' : 'gb'
        }.svg`}
        alt={'flaga'}
        height={25}
        width={25}
      />
      {locale === 'pl' ? 'Polski' : 'English'}
    </div>
  );

  return (
    <Popover>
      <PopoverTrigger>
        <GenerateLanguageSelectorTrigger locale={locale} />
      </PopoverTrigger>
      <PopoverContent className={styles.LanguageSelectorContainer}>
        <LinkWithFlag locale="pl" language="Polski" />
        <LinkWithFlag locale="en" language="English" flagCode="gb" />
      </PopoverContent>
    </Popover>
  );
};
