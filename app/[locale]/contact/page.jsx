"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("contactUs");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [massege, setMassege] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [subjectError, setSubjectError] = useState(null);
  const [massegeError, setMassegeError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null); // Clear any previous errors

    // Check for empty fields
    let hasError = false;
    if (!name) {
      setNameError("Name is required.");
      hasError = true;
    } else {
      setNameError(null);
    }
    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else {
      setEmailError(null);
    }
    if (!phone) {
      setPhoneError("Phone No. is required.");
      hasError = true;
    }
    // else if (phone.length < 10) {
    //   setPhoneError("Phone number must be at least 10 digits.");
    //   hasError = true;
    // }
    else {
      setPhoneError(null);
    }
    if (!subject) {
      setSubjectError("Subject is required.");
      hasError = true;
    } else {
      setSubjectError(null);
    }
    if (!massege) {
      setMassegeError("Message is required.");
      hasError = true;
    } else {
      setMassegeError(null);
    }

    if (hasError) {
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("subject", subject);
    formData.append("massege", massege);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyJe2QsRLEM3kkD4beigyUw1RQz8vgfdi8cP-6xcQB0rKB0n66EMk5zyX79yhwrjm1_Lw/exec",
        {
          method: "POST",
          body: formData, // Send FormData directly
        }
      );

      if (!response.ok) {
        const errorData = await response.text(); // Get error message from server
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData}`
        );
      }

      setSuccess(true);
      // Clear the form after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMassege("");
    } catch (error) {
      console.error("Submission failed! Please try again.", error);
      setError(error.message); // Set the error message
      setSuccess(false); // Make sure success is false in case of error
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        {/*Page Header Start*/}
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: " url(/assets/images/backgrounds/contact.png)",
            }}
          ></div>
          <div className="container">
            <div className="page-header__inner">
              <div className="page-header__title-box">
                <p>{t("breadcrumb.subtitle")}</p>
                <h3>{t("breadcrumb.title")}</h3>
              </div>
              <div className="thm-breadcrumb__box">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link href="/">{t("breadcrumb.link.main")}</Link>
                  </li>
                  <li>
                    <span> / </span>
                  </li>
                  <li>{t("breadcrumb.link.sub")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Page Header End*/}
        {/*Contact Info Start*/}
        <section className="contact-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3">
                <div className="single-contact-info-section">
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="single-contact-info-section__content">
                    <div className="text">
                      <h3>{t("info.call.title")}</h3>
                      <p>{t("info.call.text")}</p>
                    </div>
                    <div className="btn-box">
                      <Link href="tel:+79118880388">
                        {t("info.call.link")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="single-contact-info-section">
                  <div className="icon">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <div className="single-contact-info-section__content">
                    <div className="text">
                      <h3>{t("info.email.title")}</h3>
                      <p>{t("info.email.text")}</p>
                    </div>
                    <div className="btn-box">
                      <Link href="mailto:info@sakw.ru">
                        {t("info.email.link")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="single-contact-info-section">
                  <div className="icon">
                    <i className="fab fa-telegram-plane"></i>
                  </div>
                  <div className="single-contact-info-section__content">
                    <div className="text">
                      <h3>{t("info.chat.title")}</h3>
                      <p>{t("info.chat.text")}</p>
                    </div>
                    <div className="btn-box">
                      <Link href="https://t.me/sakwru" target="_blank">
                        {t("info.chat.link")}
                        <span className="icon-up-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Info End*/}

        {/*Contact Page Start*/}
        <section className="contact-page">
          <div
            className="section-shape-1"
            style={{
              backgroundImage:
                " url(/assets/images/shapes/section-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="contact-page__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="contact-page__left">
                    <div className="contact-page__information">
                      <h3 className="contact-page__information-title">
                        {t("inner.title")}
                      </h3>
                      <ul className="contact-page__information-list list-unstyled">
                        <li>
                          <div className="icon">
                            <Link href="tel:+79118880388">
                              <span className="fas fa-phone-alt"></span>
                            </Link>
                          </div>
                          <div className="content">
                            <h3>{t("inner.call.text")}</h3>
                            <p>
                              <Link href="tel:+79118880388">
                                +7 (911) 888 03 88
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fas fa-envelope"></span>
                          </div>
                          <div className="content">
                            <h3>{t("inner.email.text")}</h3>
                            <p>
                              <Link href="mailto:info@sakw.ru">
                                info@sakw.ru
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fab fa-telegram-plane"></span>
                          </div>
                          <div className="content">
                            <h3>{t("inner.chat.text")}</h3>
                            <p>
                              <Link href="https://t.me/sakwru" target="_blank">
                                @sakwru
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="fab fa-vk"></span>
                          </div>
                          <div className="content">
                            <h3>{t("inner.address.text")}</h3>
                            <p>
                              <Link
                                href="https://vk.com/sakwru"
                                target="_blank"
                              >
                                vk.com/sakwru
                              </Link>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-7 col-lg-7">
                  <div className="contact-page__right">
                    <h3 className="contact-page__contact-title">
                      {t("form.title")}
                    </h3>
                    <form
                      id="contact-form"
                      className="contact-page__form"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              // name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder={t("form.place.name")}
                              required=""
                            />
                            {nameError && (
                              <p className="error-message">{nameError}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-page__input-box">
                            <input
                              type="email"
                              // name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={t("form.place.email")}
                              required=""
                            />
                            {emailError && (
                              <p className="error-message">{emailError}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              // name="Phone"
                              value={phone}
                              onChange={(e) => {
                                const value = e.target.value
                                  .replace(/[^0-9,+]/g, "")
                                  .slice(0, 20);
                                setPhone(value);
                                // if (value.length > 0 && value.length < 10) {
                                //   setPhoneError(
                                //     "Phone number must be at least 10 digits."
                                //   );
                                // } else {
                                //   setPhoneError(null);
                                // }
                              }}
                              placeholder={t("form.place.phone")}
                            />
                            {phoneError && (
                              <p className="error-message">{phoneError}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              // name="Subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              placeholder={t("form.place.subject")}
                            />
                            {subjectError && (
                              <p className="error-message">{subjectError}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-page__input-box text-message-box">
                            <textarea
                              name="message"
                              value={massege}
                              onChange={(e) => setMassege(e.target.value)}
                              placeholder={t("form.place.message")}
                              required=""
                            ></textarea>
                            {massegeError && (
                              <p className="error-message">{massegeError}</p>
                            )}
                          </div>
                          <div className="contact-page__btn-box">
                            <button
                              type="submit"
                              className="thm-btn contact-page__btn"
                              // data-loading-text="Please wait..."
                              disabled={submitting}
                            >
                              {submitting
                                ? "Sending..."
                                : [t("form.buttonText")]}
                              <span className="icon-up-right-arrow"></span>
                            </button>
                            {success && (
                              <p className="success-message">
                                Message sent successfully!
                              </p>
                            )}
                            {error && <p className="error-message">{error}</p>}
                          </div>
                        </div>
                      </div>
                    </form>
                    <p className="ajax-response mb-0 error"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        {/* <section className="google-map-one">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
                  }}
               ></div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                  className="google-map__one"
               ></iframe>
            </section> */}
        {/*Google Map End*/}

        {/*Image Map Start*/}

        {/*Image Map End*/}
      </Layout>
    </>
  );
}
