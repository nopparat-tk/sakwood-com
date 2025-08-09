import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer4() {
  const t = useTranslations("footer");
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <img src="/assets/images/shapes/site-footer-shape-3.png" alt="" />
        </div>
        <div className="site-footer__shape-2 float-bob-y">
          <img src="/assets/images/shapes/site-footer-shape-4.png" alt="" />
        </div>

        <div className="site-footer__marquee">
          <ul className="marquee_mode">
            <li>{t("marquee.list1")}</li>
            <li>{t("marquee.list2")}</li>
            <li>{t("marquee.list3")}</li>
          </ul>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                {t("bottomText.text1")}{" "}
                <Link href="/">{t("bottomText.link")}</Link> | <br />
                {t("bottomText.text2")}
              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                <li>
                  <Link href="#">{t("bottomMenu.link1")}</Link>
                </li>
                <li>
                  <Link href="#">{t("bottomMenu.link2")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
