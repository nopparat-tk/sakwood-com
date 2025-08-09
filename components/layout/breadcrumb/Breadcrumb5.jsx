import Link from "next/link";
export default function Breadcrumb5() {
   return (
      <>
         {/*Page Header Start*/}
         <section className="page-header">
            <div
               className="page-header__bg"
               style={{
                  backgroundImage:
                     " url(assets/images/backgrounds/keruing-cover.png)",
               }}
            ></div>
            <div className="container">
               <div className="page-header__inner">
                  <div className="page-header__title-box">
                     <p>Excellence Tropical Hardwoods</p>
                     <h3>Keruing</h3>
                  </div>
                  <div className="thm-breadcrumb__box">
                     <ul className="thm-breadcrumb list-unstyled">
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>
                           <span> / </span>
                        </li>
                        <li>Keruing</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         {/*Page Header End*/}
      </>
   );
}
