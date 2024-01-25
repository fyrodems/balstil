"use client";

import { useTranslations } from "next-intl";

export const Content = () => {
  const t = useTranslations("homepage");

  return (
    <>
      <main>
        <p className="text-base sm:text-xl lg:text-2xl">{t("test")}</p>
      </main>
    </>
  );
};
