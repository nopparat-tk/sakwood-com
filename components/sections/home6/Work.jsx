"use client";
import Link from "next/link";

export default function Work() {
   return (
      <>
         {/*How It Work Start */}
         <section className="how-it-work">
            <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
               }}
            ></div>
            <div className="container">
               <div className="section-title text-center sec-title-animation animation-style1">
                  <h2 className="section-title__title title-animation">
                     BUILDING BEAUTY, WITH
                     <br />
                     ENDURING STRENGTH.
                  </h2>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="how-it-work__single">
                        <div className="how-it-work__count"></div>
                        <h3 className="how-it-work__title">ARCHITECTURAL</h3>
                        <p className="how-it-work__text">
                           Wood's inherent strength and captivating
                           <br /> beauty breathe life into architectural
                           visions,
                           <br /> shaping luxurious, enduring spaces.
                        </p>
                        <div className="how-it-work__icon">
                           <span className="fa fa-vihara"></span>
                        </div>
                     </div>
                     <div className="how-it-work__single">
                        <div className="how-it-work__count"></div>
                        <h3 className="how-it-work__title">
                           FURNITURE & FABRICATION
                        </h3>
                        <p className="how-it-work__text">
                           We meticulously craft functional artistry from
                           <br /> wood, transforming raw material into bespoke
                           <br /> furnishings and intricate pieces.
                        </p>
                        <div className="how-it-work__icon">
                           <span className="fa fa-chair"></span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                     <div className="how-it-work__img-box">
                        <div className="how-it-work__img">
                           <img
                              src="assets/images/resources/Work-1.png"
                              alt=""
                           />
                        </div>
                        <div className="how-it-work__icon-2">
                           <span className="fa fa-globe"></span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                     <div className="how-it-work__single how-it-work__single-2">
                        <div className="how-it-work__count"></div>
                        <h3 className="how-it-work__title">CRAFTSMANSHIP</h3>
                        <p className="how-it-work__text">
                           Witness wood transcend its form;
                           <br /> create timeless works from intricate
                           <br /> carvings to resonant instruments.
                        </p>
                        <div className="how-it-work__icon">
                           <span className="fa fa-pencil-ruler"></span>
                        </div>
                     </div>
                     <div className="how-it-work__single how-it-work__single-2">
                        <div className="how-it-work__count"></div>
                        <h3 className="how-it-work__title">
                           SPECIALIZED DESIGN
                        </h3>
                        <p className="how-it-work__text">
                           For your masterpieces, we offer essential,
                           <br /> high-quality wood, sustainably sourced
                           <br /> directly from managed forests.
                        </p>
                        <div className="how-it-work__icon">
                           <span className="fa fa-torii-gate"></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/*How It Work End */}
      </>
   );
}
