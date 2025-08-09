"use client";

import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // Autoplay
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  //   speed: 800,
  // },
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
  //    type: "bullets",
  // },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);

  const t = useTranslations("banner");

  return (
    <>
      {/* Main Sllider Four Start */}
      <section className="main-slider-four">
        <Swiper
          {...swiperOptions}
          className="main-slider-four__carousel owl-carousel owl-theme"
        >
          <SwiperSlide>
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(/assets/images/backgrounds/slider-1-1.png)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content_slide1">
                  <div className="main-slider__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                      <div className="main-slider__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <h2 className="main-slider__title">
                    {t("slide1.title1")} <br /> {t("slide1.title2")}
                  </h2>
                  <div className="text main-slider__text">
                    <p>{t("slide1.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(/assets/images/backgrounds/slider-1-2.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      {t("slide2.title1")}
                      <br />
                      {t("slide2.title2")} <span>{t("slide2.title3")}</span>
                    </h2>
                  </div>
                  <div className="text main-slider__text">
                    <p>{t("slide2.text")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(/assets/images/backgrounds/slider-1-3.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      {t("slide3.title1")} <span>{t("slide3.title2")}</span>
                      <br />
                      {t("slide3.title3")}
                    </h2>
                  </div>
                  <div className="text main-slider__text">
                    <p>{t("slide3.text")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(/assets/images/backgrounds/slider-1-4.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      {t("slide4.title1")}
                      <br />
                      {t("slide4.title2")} <span>{t("slide4.title3")}</span>
                    </h2>
                  </div>
                  <div className="text main-slider__text">
                    <p>{t("slide4.text")}</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
          <SwiperSlide>
            {/* Single Main Sllider Four Start */}
            <div className="item">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    " url(/assets/images/backgrounds/slider-1-5.png)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="container">
                <div className="main-slider-four__content">
                  <div className="title">
                    <h2>
                      {t("slide5.title1")}
                      <br />
                      <span>{t("slide5.title2")}</span> {t("slide5.title3")}
                    </h2>
                  </div>
                  <div className="text main-slider__text">
                    <p>{t("slide5.text")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Main Sllider Four End */}
          </SwiperSlide>
        </Swiper>
        <div className="main-slider-nav">
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*Main Sllider Start */}
      <ModalVideo
        channel="custom"
        url="/assets/images/video/sakw-introduction.mp4"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
