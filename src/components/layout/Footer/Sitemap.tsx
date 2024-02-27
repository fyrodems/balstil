import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
      'Blog',
      'Serwis',
      'Nota Prawna',
      'Usługi CNC',
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

export const Sitemap = () => {
  return mobileSitemap;
};
