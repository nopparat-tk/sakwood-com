"use client";

import { useTranslations } from "next-intl";
export default function Premium() {
  const t = useTranslations("premium");
  return (
    <>
      {/*Services Three Start */}
      <section className="services-three">
        <div
          className="services-three__bg"
          style={{
            backgroundImage:
              " url(/assets/images/shapes/site-footer-shape-1.jpg)",
          }}
        ></div>
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              {t("title1")} <br /> {t("title2")}
            </h2>
          </div>
          <div className="row">
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="feature-two__single">
                <div className="services-three__img">
                  <img src="/assets/images/resources/feature-3.png" alt="" />
                </div>
                <h3 className="feature-two__title">{t("feature1.title")}</h3>
                <p className="feature-two__text">{t("feature1.desc")}</p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="feature-two__single">
                <div className="services-three__img">
                  <img src="/assets/images/resources/feature-5.png" alt="" />
                </div>
                <h3 className="feature-two__title">{t("feature2.title")}</h3>
                <p className="feature-two__text">{t("feature2.desc")}</p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="feature-two__single last-child">
                <div className="services-three__img">
                  <img src="/assets/images/resources/feature-4.png" alt="" />
                </div>
                <h3 className="feature-two__title">{t("feature3.title")}</h3>
                <p className="feature-two__text">{t("feature3.desc")}</p>
                <div className="feature-two__shape-box">
                  <div className="feature-two__shape-1"></div>
                  <div className="feature-two__shape-2"></div>
                  <div className="feature-two__shape-3"></div>
                </div>
              </div>
            </div>
            {/*Feature Two Single End */}
          </div>
        </div>
      </section>
      {/*Services Three End */}
    </>
  );
}
