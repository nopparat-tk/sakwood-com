import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Menu() {
  const t = useTranslations("menu");

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">{t("home")} </Link>
        </li>
        <li>
          <Link href="/thai-teak">{t("teak")}</Link>
        </li>
        <li>
          <Link href="/hardwoods">{t("hardwood")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>
    </>
  );
}
