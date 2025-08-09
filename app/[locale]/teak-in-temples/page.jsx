"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Layout from "@/components/layout/Layout";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Showcase from "@/components/sections/home6/Showcase";

export default function TeakInTemples() {
  const t = useTranslations("showcases");
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: "/assets/images/showcase/teak-in-temples-2.png" },
    { src: "/assets/images/showcase/teak-in-temples-3.png" },
    { src: "/assets/images/showcase/teak-in-temples-4.png" },
    { src: "/assets/images/showcase/teak-in-temples-5.png" },
    { src: "/assets/images/showcase/teak-in-temples-6.png" },
  ];

  const handleImagePopup = (i) => {
    setSlideIndex(i);
    setSlideOpen(true);
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        {/*Project Details Start*/}
        <section className="project-details">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">
                {t("case5.title")}
              </h2>
            </div>
            <div className="project-details__img">
              <img src="/assets/images/showcase/teak-in-temples-1.png" alt="" />
            </div>
            <div className="project-details__content">
              <h3 className="project-details__title-1">{t("case5.heading")}</h3>
              <p className="project-details__text-1">{t("case5.desc1")}</p>
              <div className="project-details__img-and-faq">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="projects-one__single">
                      <div className="projects-one__img-box">
                        <div className="projects-one__img">
                          <img
                            onClick={() => handleImagePopup(0)}
                            style={{ cursor: "pointer" }}
                            src={images[0].src}
                            alt=""
                          />
                        </div>
                        <div className="projects-one__arrow">
                          <button
                            onClick={() => handleImagePopup(0)}
                            className="img-popup"
                          >
                            <span className="icon-up-right-arrow-1"></span>
                          </button>
                        </div>
                        <Lightbox
                          open={slideOpen}
                          close={() => setSlideOpen(false)}
                          slides={images}
                          index={slideIndex}
                          plugins={[Zoom]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="project-details__faq-box">
                      <div
                        className="accrodion-grp"
                        data-grp-name="faq-one-accrodion"
                      >
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{t("case1.desc2")}</p>
                            <br />
                            <p>{t("case1.desc3")}</p>
                            <br />
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
        {/*Project Details End*/}
      </Layout>
    </>
  );
}
