"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";

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

const slidesData = [
  {
    title: "Parquet",
    img: "assets/images/products/highlight/flooring-solutions.png",
    desc: "Create beautiful indoor floors with attractive designs and outstanding strength. Teak Parquet is a highly durable option that provides timeless luxury to any room.",
    lightbox: {
      src: "assets/images/pricelist/sakw-teak-parquet.png",
      downloadUrl: "/sakw-teak-parquet.png",
    },
  },
  {
    title: "Flooring",
    img: "assets/images/products/highlight/wall-panels.png",
    desc: "Our durable, elegant teak planks provide long-lasting flooring for any home. They are ideal for high-traffic areas, providing incredible durability and timeless charm.",
    lightbox: {
      src: "assets/images/pricelist/sakw-teak-flooring.png",
      downloadUrl: "/sakw-teak-flooring.png",
    },
  },
  // Add more slides as needed, each with its own lightbox image
];

export default function TeakProducts() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Our Teak Products
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/flooring-solutions.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Parquet</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Create beautiful indoor floors with attractive designs and
                      outstanding strength. Teak Parquet is a highly durable
                      option that provides timeless luxury to any room.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/wall-panels.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Flooring</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our durable, elegant teak planks provide long-lasting
                      flooring for any home. They are ideal for high-traffic
                      areas, providing incredible durability and timeless charm.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/boards.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Decking</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our teak decking is designed for outdoor use and resists
                      water, rot, and insects. It remains gorgeous for years,
                      resulting in magnificent and long-lasting decks, patios,
                      and poolsides.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/accessories.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Cladding</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Create natural beauty and warmth on any wall or ceiling.
                      It's a stylish, durable alternative for decorating rooms
                      that provides long-lasting protection.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/flooring-solutions.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Boards</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Our solid teak wood boards are both sturdy and elegant.
                      They give the ideal foundation for all forms of fine
                      woodworking, from custom furniture to elaborate interior
                      elements, ensuring long-term quality.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/wall-panels.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Finger Jointed</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Finger jointed teak boards provide excellent strength and
                      extremely long lengths. They are great for lengthy
                      countertops, massive tabletops, stair treads, and other
                      large-scale, demanding tasks that require solidity.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
                  <div
                    className="testimonial-two__single"
                    style={{
                      marginTop: "0px",
                      padding: "47px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="testimonial-two__single-shape-1"
                      style={{
                        backgroundImage:
                          " url(assets/images/shapes/testimonial-two-single-shape-1.png)",
                      }}
                    ></div>
                    <div className="testimonial-two__image">
                      <img
                        src="assets/images/products/highlight/wall-panels.png"
                        alt=""
                      />
                    </div>
                    <h3
                      className="testimonial-two__name"
                      style={{
                        marginTop: "18px",
                        marginBottom: "44px",
                        fontSize: "24px",
                      }}
                    >
                      <Link href="testimonials">Skirting</Link>
                    </h3>
                    <p
                      className="testimonial-two__text"
                      style={{
                        fontSize: "17px",
                        lineHeight: "26px",
                      }}
                    >
                      Elevate the details of your home with beautiful teak
                      skirting. It offers long-lasting beauty, a sturdy
                      protective border, and an elegant look to any room.
                    </p>
                    <div
                      className="btn-box"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <Link href="/teak#whychoose" className="thm-btn">
                        Get a consultation{" "}
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
        <div
          className="main-slider-nav"
          style={{ top: "55%", padding: "0 72px" }}
        >
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
