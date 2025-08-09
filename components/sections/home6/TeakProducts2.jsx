"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // Autoplay
  // autoplay: {
  //   delay: 5000,
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

export default function TeakProducts2() {
  const t = useTranslations("thaiTeak");

  const slidesData = [
    {
      title: [t("Products.list1.title")],
      img: "/assets/images/products/Parquet.png",
      desc: [t("Products.list1.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-parquet.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list2.title")],
      img: "/assets/images/products/Floorboard.png",
      desc: [t("Products.list2.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-flooring.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list3.title")],
      img: "/assets/images/products/Decking.png",
      desc: [t("Products.list3.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-decking.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list4.title")],
      img: "/assets/images/products/Cladding.png",
      desc: [t("Products.list4.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-cladding.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list5.title")],
      img: "/assets/images/products/Timber.png",
      desc: [t("Products.list5.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list6.title")],
      img: "/assets/images/products/Finger-Joint.png",
      desc: [t("Products.list6.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    {
      title: [t("Products.list7.title")],
      img: "/assets/images/products/Skirtin.png",
      desc: [t("Products.list7.desc")],
      lightbox: {
        src: "/assets/images/pricelist/sakw-teak-timber-skirting-finger-jointed.png",
        downloadUrl: "/assets/images/pricelist/sakw-teak-pricelist.pdf",
      },
    },
    // Add more slides as needed, each with its own lightbox image
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              {t("Products.title")}
            </h2>
          </div>
          <div className="testimonial-two__bottom">
            <Swiper
              {...swiperOptions}
              className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
            >
              {slidesData.map((slide, idx) => (
                <SwiperSlide key={slide.title}>
                  <div className="item">
                    <div className="testimonial-two__single">
                      <div
                        className="testimonial-two__single-shape-1"
                        style={{
                          backgroundImage:
                            "url(/assets/images/shapes/testimonial-two-single-shape-1.png)",
                        }}
                      ></div>
                      <div className="testimonial-two__image">
                        <img src={slide.img} alt="" />
                      </div>
                      <h3 className="testimonial-two__name">
                        <Link href="testimonials">{slide.title}</Link>
                      </h3>
                      <p className="testimonial-two__text">{slide.desc}</p>
                      <div className="btn-box">
                        <button
                          className="thm-btn"
                          onClick={() => setOpenIndex(idx)}
                        >
                          {t("buttonText")}{" "}
                          <span className="icon-up-right-arrow"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Single Lightbox for all slides */}
            <Lightbox
              open={openIndex !== null}
              close={() => setOpenIndex(null)}
              plugins={[Zoom, Download]}
              slides={
                openIndex !== null ? [slidesData[openIndex].lightbox] : []
              }
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
            />
          </div>
        </div>
        <div className="btn-box mt-1 d-flex justify-content-center">
          <a
            className="dwn-btn"
            href="/assets/images/pricelist/sakw-teak-pricelist.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("download.buttonText")}{" "}
            <span className="fas fa-file-download"></span>
          </a>
        </div>
        <div className="main-slider-nav2">
          <div className="swiper-arrow-prev">
            <span className="icon-left-arrow"></span>
          </div>
          <div className="swiper-arrow-next">
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
