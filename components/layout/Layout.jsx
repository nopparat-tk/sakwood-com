"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Breadcrumb1 from "./breadcrumb/Breadcrumb1";
import Breadcrumb2 from "./breadcrumb/Breadcrumb2";
import Breadcrumb3 from "./breadcrumb/Breadcrumb3";
import Breadcrumb4 from "./breadcrumb/Breadcrumb4";
import Breadcrumb5 from "./breadcrumb/Breadcrumb5";
import Breadcrumb6 from "./breadcrumb/Breadcrumb6";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  wrapperCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  // Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup(!isPopup);

  // Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <DataBg />
      <div
        className={`page-wrapper body-bg-color-1 ${
          wrapperCls ? wrapperCls : ""
        }`}
        id="#top"
      >
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 3 ? (
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 4 ? (
          <Header4
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

        {/* {breadcrumbTitle && (
               <Breadcrumb breadcrumbTitle={breadcrumbTitle} />
            )} */}
        {/* {breadcrumbTitle && <Breadcrumb />} */}
        {breadcrumbTitle == "Teak" ? <Breadcrumb1 /> : null}
        {breadcrumbTitle == "Yellow Balau" ? <Breadcrumb2 /> : null}
        {breadcrumbTitle == "Merbau" ? <Breadcrumb3 /> : null}
        {breadcrumbTitle == "Mersawa" ? <Breadcrumb4 /> : null}
        {breadcrumbTitle == "Keruing" ? <Breadcrumb5 /> : null}
        {breadcrumbTitle == "Contact" ? <Breadcrumb6 /> : null}

        {children}

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
        {footerStyle == 2 ? <Footer2 /> : null}
        {footerStyle == 3 ? <Footer3 /> : null}
        {footerStyle == 4 ? <Footer4 /> : null}
      </div>
      <BackToTop scroll={scroll} />
    </>
  );
}
