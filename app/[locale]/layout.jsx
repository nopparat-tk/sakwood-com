import "@/node_modules/react-modal-video/css/modal-video.css";
import "../../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { figtree, barlowSemiCondensed } from "@/lib/font";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "SAK Wood",
  description: "Curated selection of meticulously graded premium hardwoods",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${figtree.variable} ${barlowSemiCondensed.variable}`}
    >
      <body>
        {/* <GoogleTagManager gtmId="GTM-KHH72PKH" /> */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
