import Layout from "@/components/layout/Layout";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={4}
        // breadcrumbTitle="Page Not Found"
      >
        <section className="error-page">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="error-page__inner">
              <div className="error-page__img">
                <img
                  src="/assets/images/resources/error-page-img-1.png"
                  alt=""
                />
              </div>
              <div className="error-page__btn-box">
                <Link href="/" className="thm-btn error-page__btn">
                  Back To Home <span className="icon-up-right-arrow"></span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
