import { useTranslations } from "next-intl";
export default function BackToTop({ scroll }) {
  const t = useTranslations("footer");
  return (
    <>
      {scroll && (
        <a href="#top" className="scroll-to-target scroll-to-top">
          <div className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner"></span>
          </div>
          <span className="scroll-to-top__text"> {t("bottomMenu.link3")}</span>
        </a>
      )}
    </>
  );
}
