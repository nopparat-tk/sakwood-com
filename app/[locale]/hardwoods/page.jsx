"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import HardwoodSellPoint from "@/components/sections/home6/HarwoodSellPoint";
import Products from "@/components/sections/home6/TeakProducts";
import Whychoose from "@/components/sections/home6/Whychoose";
import BalauProducts from "@/components/sections/home6/BalauProducts";
import MerbauProducts from "@/components/sections/home6/MerbauProduct";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
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
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 5,
    },
    1350: {
      slidesPerView: 5,
    },
  },
};
export default function hardwoods() {
  const t = useTranslations("hardwood");

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Merbau">
        {/*Project Details Start*/}
        <HardwoodSellPoint />
        {/*About Two Start*/}
        <section className="about-two">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="about-two__shape-1 float-bob-x">
            <img src="/assets/images/shapes/about-two-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="about-two__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">
                      {t("title")}
                    </h2>
                  </div>
                  <p
                    className="about-two__text"
                    style={{ marginBottom: "17px" }}
                  >
                    {t("desc")}
                  </p>
                  <div className="faq-page__left">
                    <div
                      className="project-details__faq-box"
                      style={{ counterReset: "count" }}
                    >
                      <div
                        className="accrodion-grp faq-one-accrodion"
                        data-grp-name="faq-one-accrodion-1"
                      >
                        <div
                          className={
                            isActive.key == 1 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="accrodion-title">
                            <h4>{t("accordion.list1.title")}</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{t("accordion.list1.desc")}</p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 2 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="accrodion-title">
                            <h4>{t("accordion.list2.title")}</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{t("accordion.list2.desc")}</p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 3 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="accrodion-title">
                            <h4>{t("accordion.list3.title")}</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{t("accordion.list3.desc")}</p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 4 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="accrodion-title">
                            <h4>{t("accordion.list4.title")}</h4>
                            <div className="project-details__faq-box-count"></div>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{t("accordion.list4.desc")}</p>
                            </div>
                            {/* /.inner */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="about-two__right">
                  <div className="about-two__img">
                    <img
                      src="/assets/images/resources/hardwoods-hl.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Two End */}
        <BalauProducts />
        <MerbauProducts />
        <section id="whychoose">
          <Whychoose />
        </section>
      </Layout>
    </>
  );
}
