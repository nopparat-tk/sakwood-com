"use client";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("menu");

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
            <div className="col-xl-6">
              <div className="about-three__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <h2 className="section-title__title title-animation">
                    Outdoor Opulence
                  </h2>
                </div>
                <p className="about-three__text">
                  Discover Yellow Balau, a distinguished hardwood revered by
                  architects, contractors, and homeowners alike for its
                  exceptional strength, natural resilience, and captivating
                  aesthetic appeal. Meticulously crafted with precision using
                  the E4E (Eased Four Edges) technique, our Yellow Balau
                  transforms outdoor spaces into opulent extensions of your
                  home. It’s an investment in enduring quality, unmatched
                  durability, and timeless beauty, turning ordinary decks into
                  stunning features of your landscape.
                </p>
                <ul className="about-three__points-list list-unstyled">
                  <li>
                    <div className="content">
                      <h3>Uncompromising Quality and Expertis</h3>
                      <p>
                        Yellow Balau's density and toughness ensure it
                        withstands harsh weather and heavy traffic, keeping
                        outdoor spaces pristine for decades.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h3>Minimal Upkeep, Maximum Aesthetic Appeal</h3>
                      <p>
                        Yellow Balau offers natural decay and insect resistance,
                        providing enduring beauty and robust structural
                        integrity with minimal upkeep, adding lasting value.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-three__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-three__img">
                  <img
                    src="/assets/images/backgrounds/yellow-balau-2.png"
                    alt=""
                  />
                  <div className="about-three__experience-box">
                    <div className="welcome-style1__img">
                      <div className="img1">
                        <img
                          src="/assets/images/backgrounds/yellow-balau-1.png"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
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
