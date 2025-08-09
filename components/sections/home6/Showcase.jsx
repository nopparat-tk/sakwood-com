"use client";
import { Link } from "@/i18n/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },

  // Pagination
  // pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};
export default function Showcase() {
  const t = useTranslations("showcase");
  return (
    <>
      {/*Start Service Style4*/}
      <section className="service-style4">
        <div
          className="services-three__bg"
          style={{
            backgroundImage:
              " url(/assets/images/shapes/testimonial-v1-shape1.png)",
            opacity: "0.3",
            backgroundColor: "#3F2021",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              {t("title1")} <br />
              {t("title2")}
            </h2>
          </div>

          <Swiper
            {...swiperOptions}
            className="service-style4__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-1.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/prestige-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/prestige-of-teak">{t("case1.title")} </Link>
                      {/* British Embassy Bangkok */}
                    </h3>
                    <p>{t("case1.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-2.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/golden-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/golden-teak">{t("case2.title")}</Link>
                    </h3>
                    <p>{t("case2.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-3.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/symbol-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/symbol-of-teak">{t("case3.title")}</Link>
                      {/* Symbol of Strength and Prosperity */}
                    </h3>
                    <p>{t("case3.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-4.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/legend-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/legend-of-teak">{t("case4.title")}</Link>
                      {/* Legend of a Live Material */}
                    </h3>
                    <p>{t("case4.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-5.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/teak-in-temples">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/teak-in-temples">{t("case5.title")}</Link>
                      {/* Architecture that Inspires */}
                    </h3>
                    <p>{t("case5.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-1.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/prestige-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/prestige-of-teak">{t("case1.title")} </Link>
                      {/* British Embassy Bangkok */}
                    </h3>
                    <p>{t("case1.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-2.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/golden-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/golden-teak">{t("case2.title")}</Link>
                    </h3>
                    <p>{t("case2.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-3.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/symbol-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/symbol-of-teak">{t("case3.title")}</Link>
                      {/* Symbol of Strength and Prosperity */}
                    </h3>
                    <p>{t("case3.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-4.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/legend-of-teak">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/legend-of-teak">{t("case4.title")}</Link>
                      {/* Legend of a Live Material */}
                    </h3>
                    <p>{t("case4.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
            <SwiperSlide>
              {/*Start Single Service Style4*/}
              <div className="item">
                <div className="single-service-style4">
                  <div className="img-box">
                    <img
                      src="/assets/images/resources/showcase-5.png"
                      alt="Image"
                    />
                    <div className="overlay-icon">
                      <Link href="/teak-in-temples">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <h3>
                      <Link href="/teak-in-temples">{t("case5.title")}</Link>
                      {/* Architecture that Inspires */}
                    </h3>
                    <p>{t("case5.desc")}</p>
                  </div>
                </div>
              </div>
              {/*End Single Service Style4*/}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="main-slider-nav">
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*End Service Style4*/}
    </>
  );
}
