"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
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
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
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
export default function MerbauProducts() {
  const t = useTranslations("hardwood");

  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          // style={{
          //   backgroundImage:
          //     " url(/assets/images/shapes/counter-one-shape1.png)",
          // }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              {t("merbau.title")}
            </h2>
          </div>
          <div className="testimonial-two__bottom">
            <Swiper
              {...swiperOptions}
              className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
            >
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
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
                        src="/assets/images/products/merbau-decking.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      {t("merbau.list1.title")}
                    </h3>
                    <p className="testimonial-two__text">
                      {t("merbau.list1.desc")}
                    </p>
                    <div className="btn-box">
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        {t("buttonText")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
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
                        src="/assets/images/products/merbau-cladding.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      {t("merbau.list2.title")}
                    </h3>
                    <p className="testimonial-two__text">
                      {t("merbau.list2.desc")}
                    </p>
                    <div className="btn-box">
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        {t("buttonText")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
              <SwiperSlide>
                {/*Testimonial Two Single Start*/}
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
                        src="/assets/images/products/merbau-boards.png"
                        alt=""
                      />
                    </div>
                    <h3 className="testimonial-two__name">
                      {t("merbau.list3.title")}
                    </h3>
                    <p className="testimonial-two__text">
                      {t("merbau.list3.desc")}
                    </p>
                    <div className="btn-box">
                      <Link href="/hardwoods#whychoose" className="thm-btn">
                        {t("buttonText")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*Testimonial Two Single End*/}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
