"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ProductsHilight() {
  const t = useTranslations("hilight");
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two" style={{ padding: "60px 0 0" }}>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              {t("title")}
            </h2>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="item">
                  <div className="testimonial-two__single">
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/highlight/flooring-solutions.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      <Link href="thai-teak">{t("flooring.title")}</Link>
                    </h3>
                    <p className="testimonial-two__text">
                      <span>{t("flooring.desc.1")}</span> {t("flooring.desc.2")}
                      <span>{t("flooring.desc.3")}</span> {t("flooring.desc.4")}
                      <span>{t("flooring.desc.5")}</span> {t("flooring.desc.6")}
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="thai-teak" className="thm-btn">
                        {t("buttonText")}{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="item">
                  <div className="testimonial-two__single">
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/highlight/wall-panels.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      <Link href="thai-teak">{t("wall.title")}</Link>
                    </h3>
                    <p className="testimonial-two__text">
                      <span>{t("wall.desc.1")}</span> {t("wall.desc.2")}
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="thai-teak" className="thm-btn">
                        {t("buttonText")}{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="item">
                  <div className="testimonial-two__single">
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img src="/assets/images/products/Timber.png" alt="" />
                    </div>
                    <h3 className="testimonial-two__name">
                      <Link href="thai-teak">{t("timbers.title")}</Link>
                    </h3>
                    <p className="testimonial-two__text">
                      {t("timbers.desc.1")}
                      <span>{t("timbers.desc.2")}</span>{" "}
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="thai-teak" className="thm-btn">
                        {t("buttonText")}{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="item">
                  <div className="testimonial-two__single">
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/Finger-Joint.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      <Link href="thai-teak">{t("finger.title")}</Link>
                    </h3>
                    <p className="testimonial-two__text">
                      <span>{t("finger.desc.1")}</span> {t("finger.desc.2")}
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="thai-teak" className="thm-btn">
                        {t("buttonText")}{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-one__top wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="item">
                  <div className="testimonial-two__single">
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="/assets/images/products/highlight/hardwoods.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      <Link href="hardwoods">{t("hardwoods.title")}</Link>
                    </h3>
                    <p className="testimonial-two__text">
                      {t("hardwoods.desc.1")}
                      <span>{t("hardwoods.desc.2")}</span>{" "}
                      {t("hardwoods.desc.3")}{" "}
                      <span>{t("hardwoods.desc.4")} </span>
                      {t("hardwoods.desc.5")}
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="hardwoods" className="thm-btn">
                        {t("buttonText")}{" "}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
