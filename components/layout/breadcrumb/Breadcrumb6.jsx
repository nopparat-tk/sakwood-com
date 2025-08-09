import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function Breadcrumb6() {
  const t = useTranslations("ContactUs");
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: " url(/assets/images/backgrounds/contact.png)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__title-box">
              <p>{t("breadcrumb.subtitle")}</p>
              <h3>{t("breadcrumb.title")}</h3>
            </div>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">{t("breadcrumb.link.main")}</Link>
                </li>
                <li>
                  <span> / </span>
                </li>
                <li>{t("breadcrumb.link.sub")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
    </>
  );
}
