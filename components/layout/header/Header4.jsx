// import { useTransition } from "react";

import Menu2 from "../Menu2";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import MobileMenu from "../MobileMenu";
export default function Header4({ scroll, handleMobileMenu }) {
  // const [isPending, startTransition] = useTransition();
  // const handleLocaleChange = (locale) => {
  //   startTransition(() => {
  //     setLocale(locale);
  //   });
  // };
  const currentLocale = useLocale();

  const items = routing.locales.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
  }));
  return (
    <>
      <header className="main-header-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
            opacity: "0.4",
          }}
        ></div>
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link href="/">
                    <img src="/assets/images/resources/logo-1.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="main-menu-two__main-menu-box">
                <Link
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={handleMobileMenu}
                >
                  <i className="fa fa-bars"></i>
                </Link>
                <Menu2 />
              </div>
              <div className="main-menu-two__right">
                <div className="main-menu-two__search-and-nav-sidebar-icon">
                  <ul className="list-unstyled top-menu">
                    {items.map((item) => (
                      <li key={item.value}>
                        <Link
                          href="/"
                          locale={item.value}
                          className={
                            currentLocale === item.value ? "active" : ""
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`stricky-header stricked-menu main-menu main-menu-two ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
              opacity: "0.5",
            }}
          ></div>
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/">
                      <img src="/assets/images/resources/logo-1.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu2 />
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__search-and-nav-sidebar-icon">
                    <ul className="list-unstyled top-menu">
                      {items.map((item) => (
                        <li key={item.value}>
                          <Link
                            href="/"
                            locale={item.value}
                            className={
                              currentLocale === item.value ? "active" : ""
                            }
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
