"use client";

import { useLocale, useTranslations } from "next-intl";
import styles from "./Footer.module.scss";

export const Footer = () => {
  // const t = useTranslations("layout.footer");
  const locale = useLocale();

  return <footer className={styles.footerWrapper}></footer>;
};
