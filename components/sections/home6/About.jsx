"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const items = [
    t("bullets.point1"),
    t("bullets.point2"),
    t("bullets.point3"),
    t("bullets.point4"),
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
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-three__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <h2 className="section-title__title title-animation">
                    {t("title")}
                  </h2>
                </div>
                <p className="about-three__text">{t("subtitle3")}</p>
                <ul className="about-three__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-workstations"></span>
                    </div>
                    <div className="content">
                      <div className="service-details__points-box">
                        <h3
                          className="service-details__points-title"
                          style={{ top: "0" }}
                        >
                          {t("whyChoose")}
                        </h3>
                        <ul className="service-details__points-list list-unstyled">
                          {/* <li>
                            <div className="service-details__points-shape"></div>
                            <p>Outstanding Quality</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Trusted & Ethical Sourcing</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Competitive Pricing</p>
                          </li>
                          <li>
                            <div className="service-details__points-shape"></div>
                            <p>Timeless Craftsmanship & Lasting Value</p>
                          </li> */}
                          {items.map((item, index) => (
                            <li key={index}>
                              <div className="service-details__points-shape"></div>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5">
              <div
                className="about-three__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-three__img">
                  <img src="/assets/images/resources/welcome-4.png" alt="" />
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
