"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ProductsHilight from "./ProductsHilight";
export default function HeroProduct() {
  const t = useTranslations("hero");
  const items = [
    t("charact.list.1"),
    t("charact.list.2"),
    t("charact.list.3"),
    t("charact.list.4"),
    t("charact.list.5"),
    t("charact.list.6"),
    t("charact.list.7"),
    t("charact.list.8"),
  ];
  const specs = [t("specs.list.1"), t("specs.list.2"), t("specs.list.3")];
  return (
    <>
      {/*About Three Start */}
      <section
        className="welcome-style1"
        style={{
          backgroundColor: "#072b31",
          backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
        }}
      >
        <div className="container">
          <div className="project-details__content">
            <div className="row flex-row-reverse">
              <div className="col-xl-6">
                <div className="about-three__left">
                  {/* <div className="section-title text-left sec-title-animation animation-style2">
                    
                  </div> */}
                  <div className="service-details__points-box">
                    <h2 className="section-title__title title-animation">
                      {t("title")}
                    </h2>
                    <h3
                      className="service-details__points-title"
                      style={{ top: "12px", borderBottom: "none" }}
                    >
                      {t("charact.title")}
                    </h3>
                    <ul
                      className="service-details__points-list list-unstyled"
                      style={{
                        marginTop: "8px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingBottom: "25px",
                      }}
                    >
                      {items.map((item, index) => (
                        <li key={index}>
                          <div className="service-details__points-shape"></div>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-details__points-box">
                    <h3
                      className="service-details__points-title"
                      style={{ top: "10px", borderBottom: "none" }}
                    >
                      {t("specs.title")}
                    </h3>
                    <ul className="service-details__points-list list-unstyled">
                      {specs.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/thai-teak" className="thm-btn">
                      {t("buttonText")}{" "}
                      <span className="icon-up-right-arrow"></span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                  style={{ top: "15px" }}
                >
                  <div className="about-three__img">
                    <img src="/assets/images/resources/hilight-1.png" alt="" />
                    <div className="about-three__experience-box-left">
                      <img src="/assets/images/backgrounds/teak-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsHilight />
        </div>
      </section>
      {/*About Three End */}
    </>
  );
}
