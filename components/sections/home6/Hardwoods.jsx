"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function hardwoods() {
  const t = useTranslations("woods");
  const merbauItems = [
    t("merbau.charact.list.1"),
    t("merbau.charact.list.2"),
    t("merbau.charact.list.3"),
    t("merbau.charact.list.4"),
    t("merbau.charact.list.5"),
    t("merbau.charact.list.6"),
  ];
  const balauItems = [
    t("balau.charact.list.1"),
    t("balau.charact.list.2"),
    t("balau.charact.list.3"),
    t("balau.charact.list.4"),
    t("balau.charact.list.5"),
    t("balau.charact.list.6"),
  ];
  return (
    <>
      {/*About Three Start */}
      <section className="about-three">
        <div className="about-three__shape1">
          <img
            className="float-bob-x"
            src="/assets/images/shapes/site-footer-two-shape-1.png"
            alt="Shape"
          />
        </div>
        <div className="about-three__shape2">
          <img
            className="float-bob-x"
            src="/assets/images/shapes/site-footer-two-shape-2.png"
            alt="Shape"
          />
        </div>
        <div className="about-three__shape3">
          <img
            className="float-bob-x"
            src="/assets/images/shapes/about-v1-shape1.png"
            alt="Shape"
          />
        </div>
        <div className="container">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <img src="/assets/images/services/merbau-hp.png" alt="" />
                    </div>
                    <h3 className="service-details__title-1">
                      {t("merbau.title")}
                    </h3>
                    <p className="service-details__text-1">
                      {t("merbau.des1")}
                    </p>
                    <p className="service-details__text-2">
                      {t("merbau.des2")}
                    </p>
                    <div className="service-details__img-and-point-box">
                      <div className="service-details__points-img col-xl-5 col-lg-5 col-md-7 col-sm-7 col-7">
                        <img
                          src="/assets/images/services/merbau-characteristics.png"
                          alt=""
                        />
                      </div>
                      <div className="service-details__points-box">
                        <h3 className="service-details__points-title">
                          {t("merbau.charact.title")}
                        </h3>
                        <ul className="service-details__points-list list-unstyled">
                          {merbauItems.map((item, index) => (
                            <li key={index}>
                              <div className="service-details__points-shape"></div>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <h3 className="service-details__points-title">
                      {t("merbau.specs.title")}
                    </h3>
                    <p className="service-details__text-3">
                      {t("merbau.specs.bullets.point1")}{" "}
                      <span style={{ fontStyle: "italic", fontWeight: "700" }}>
                        {t("merbau.specs.bullets.subpoint1")}
                      </span>{" "}
                      <br />
                      {t("merbau.specs.bullets.point2")}
                      <br />
                      {t("merbau.specs.bullets.point3")} <br />
                      {t("merbau.specs.bullets.point4")} <br />
                      {t("merbau.specs.bullets.point5")}{" "}
                    </p>
                  </div>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/hardwoods" className="thm-btn">
                      {t("buttonText")}{" "}
                      <span className="icon-up-right-arrow"></span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-three__left wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="service-details__right">
                    <div className="service-details__img">
                      <img
                        src="/assets/images/services/yellow-balau-hp.png"
                        alt=""
                      />
                    </div>
                    <h3 className="service-details__title-1">
                      {t("balau.title")}
                    </h3>
                    <p className="service-details__text-1">{t("balau.des1")}</p>
                    <p className="service-details__text-2">{t("balau.des2")}</p>
                    <div className="service-details__img-and-point-box">
                      <div className="service-details__points-img col-xl-5 col-lg-5 col-md-7 col-sm-7 col-7">
                        <img
                          src="/assets/images/services/yellow-balau-characteristics.png"
                          alt=""
                        />
                      </div>
                      <div className="service-details__points-box">
                        <h3 className="service-details__points-title">
                          {t("balau.charact.title")}
                        </h3>
                        <ul className="service-details__points-list list-unstyled">
                          {balauItems.map((item, index) => (
                            <li key={index}>
                              <div className="service-details__points-shape"></div>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <h3 className="service-details__points-title">
                      {t("balau.specs.title")}
                    </h3>
                    <p className="service-details__text-3">
                      {t("balau.specs.bullets.point1")}{" "}
                      <span style={{ fontStyle: "italic", fontWeight: "700" }}>
                        {t("balau.specs.bullets.subpoint1")}{" "}
                      </span>
                      <br />
                      {t("balau.specs.bullets.point2")}
                      <br />
                      {t("balau.specs.bullets.point3")} <br />
                      {t("balau.specs.bullets.point4")} <br />
                      {t("balau.specs.bullets.point5")}{" "}
                    </p>
                  </div>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/hardwoods" className="thm-btn">
                      {t("buttonText")}{" "}
                      <span className="icon-up-right-arrow"></span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Three End */}
    </>
  );
}
