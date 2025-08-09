"use client";
import Link from "next/link";
export default function teak() {
   return (
      <>
         {/*About Three Start */}
         <section className="about-three">
            <div className="about-three__shape1">
               <img
                  className="float-bob-x"
                  src="assets/images/shapes/site-footer-two-shape-1.png"
                  alt="Shape"
               />
            </div>
            <div className="about-three__shape2">
               <img
                  className="float-bob-x"
                  src="assets/images/shapes/site-footer-two-shape-2.png"
                  alt="Shape"
               />
            </div>
            <div className="about-three__shape3">
               <img
                  className="float-bob-x"
                  src="assets/images/shapes/about-v1-shape1.png"
                  alt="Shape"
               />
            </div>
            <div className="container">
               <div className="project-details__content">
                  <div className="row flex-row-reverse">
                     <div className="col-xl-6">
                        <div className="about-three__left">
                           <div className="section-title text-left sec-title-animation animation-style2">
                              <h2 className="section-title__title title-animation">
                                 Centuries of Legacy
                              </h2>
                           </div>
                           <p className="about-three__text">
                              Discover the unparalleled allure of Teak, a
                              hardwood with profound cultural significance,
                              rooted in Northern Thai heritage. Sourced
                              sustainably, our Teak embodies over a century of
                              proven resilience, historically gracing temples
                              and ships. It's a testament to enduring beauty and
                              strength, perfectly suited for modern masterpieces
                              and traditional grandeur alike.
                           </p>
                           <ul className="about-three__points-list list-unstyled">
                              <li>
                                 <div className="content">
                                    <h3>Enduring Resilience</h3>
                                    <p>
                                       Sourced from sustainable Northern Thai
                                       plantations, our Teak embodies over a
                                       century of proven resilience,
                                       historically gracing temples and ships
                                       that endure for generations.
                                    </p>
                                 </div>
                              </li>
                              <li>
                                 <div className="content">
                                    <h3>Crafting Timeless Masterpieces</h3>
                                    <p>
                                       More than just wood, Teak is a testament
                                       to enduring beauty and strength,
                                       perfectly suited for both traditional
                                       grandeur and sophisticated modern
                                       masterpieces.
                                    </p>
                                 </div>
                              </li>
                           </ul>
                           <div className="btn-box">
                              <Link
                                 href="about"
                                 className="thm-btn"
                                 style={{ textTransform: "uppercase" }}
                              >
                                 More Details{" "}
                                 <span className="icon-up-right-arrow"></span>{" "}
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div
                           className="about-three__left wow slideInLeft"
                           data-wow-delay="100ms"
                           data-wow-duration="2500ms"
                        >
                           <div className="about-three__img">
                              <img
                                 src="assets/images/resources/welcome-1.png"
                                 alt=""
                              />
                              <div className="about-three__experience-box-left">
                                 <img
                                    src="assets/images/backgrounds/teak-1.png"
                                    alt=""
                                 />
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
