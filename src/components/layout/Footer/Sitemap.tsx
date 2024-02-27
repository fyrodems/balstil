import styles from './Footer.module.scss';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useWindowDimensions from '@/utils/useWindowDimensions';

const sitemapItems = [
  {
    value: 'O nas',
    contents: [
      'Informacje',
      'Wirtualny spacer',
      'Misja Firmy',
      'Technologia',
      'Projekty unijne',
      'Filozofia jakości',
    ],
  },
  {
    value: 'Strefa klienta',
    contents: [
      'Rejestracja gwarancji',
      'Zgłoś reklamacje',
      'Polityka prywatności',
      'Regulamin i konta bankowe',
    ],
  },
  {
    value: 'Wiedza i pomoc',
    contents: [
      'Inspiracje',
      'Materiały do pobrania',
      'Zostań częścią społeczności BÅLSTIL',
      'Serwis',
      'Nota Prawna',
    ],
  },
  {
    value: 'Współpraca',
    contents: [
      'Dla Architektów',
      'Kariera',
      'Dla B2B',
      'Wspólny Salon Firmowy',
      'Kwatery pracownicze Radom',
    ],
  },
];

const mobileSitemap = (
  <Accordion type="single" collapsible>
    {sitemapItems.map((item, key) => (
      <AccordionItem key={item.value} value={`item-${key + 1}`}>
        <AccordionTrigger>{item.value}</AccordionTrigger>
        {item.contents.map((content, index) => (
          <AccordionContent key={index}>{content}</AccordionContent>
        ))}
      </AccordionItem>
    ))}
  </Accordion>
);

const desktopSitemap = (
  <div className={styles.desktopSitemap}>
    {sitemapItems.map((item, key) => (
      <div key={item.value} className={styles.sitemapColumn}>
        <h3>{item.value}</h3>
        {item.contents.map((content, index) => (
          <span key={index}>{content}</span>
        ))}
      </div>
    ))}
  </div>
);

export const Sitemap = () => {
  const { width } = useWindowDimensions();

  return width && width < 992 ? mobileSitemap : desktopSitemap;
};
