import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const MobileMenu = ({ handleMobileMenu }) => {
  const t = useTranslations("menu");
  const currentLocale = useLocale();

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  const items = routing.locales.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
  }));
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image" onClick={handleMobileMenu}>
              <img
                src="/assets/images/resources/logo-1.svg"
                width="150"
                alt=""
              />
            </Link>
          </div>
          <div className="mobile-nav__language">
            <ul className="list-unstyled top-menu">
              {items.map((item) => (
                <li key={item.value}>
                  <Link
                    href="/"
                    locale={item.value}
                    className={currentLocale === item.value ? "active" : ""}
                    onClick={handleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link href="/" onClick={handleMobileMenu}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link href="/thai-teak" onClick={handleMobileMenu}>
                    {t("teak")}
                  </Link>
                </li>
                <li>
                  <Link href="/hardwoods" onClick={handleMobileMenu}>
                    {t("hardwood")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:info@sakw.ru" onClick={handleMobileMenu}>
                info@sakw.ru
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:+79118880388" onClick={handleMobileMenu}>
                +7 (911) 888 03 88
              </Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link
                href="https://t.me/sakwru"
                target="_blank"
                className="fab fa-telegram-plane"
                onClick={handleMobileMenu}
              ></Link>
              <Link
                href="https://vk.com/sakwru"
                target="_blank"
                className="fab fa-vk"
                onClick={handleMobileMenu}
              ></Link>
              {/* <Link href="#" className="fab fa-pinterest-p"></Link>
                     <Link href="#" className="fab fa-instagram"></Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
