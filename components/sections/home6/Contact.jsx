"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function Contact() {
  const t = useTranslations("contact");
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
      setPhoneError("Phone No. is required is numerical.");
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
        "https://script.google.com/macros/s/AKfycbzNmSoebdRLlUlupx_KxSSMS0TIIf3gquLj2GJIrI5oXa69FnCKkDfdiOyPSkzqbiZEdg/exec",
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
      {/*Contact One Start */}
      <section className="contact-one">
        <div
          className="section-shape-1"
          style={{
            backgroundImage: " url(/assets/images/shapes/section-shape-1.png)",
          }}
        ></div>
        <div className="contact-one__shape-2 float-bob-y">
          <img src="/assets/images/shapes/contact-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div
                className="contact-one__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="contact-one__inner">
                  <div className="contact-one__shape-1 float-bob-x">
                    <img
                      src="/assets/images/shapes/contact-one-shape-1.png"
                      alt=""
                    />
                  </div>
                  <form
                    id="contact-form"
                    className="contact-form-validated contact-one__form"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            // name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t("place.name")}
                            required=""
                          />
                          {nameError && (
                            <p className="error-message">{nameError}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-one__input-box">
                          <input
                            type="email"
                            // name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("place.email")}
                            required=""
                          />
                          {emailError && (
                            <p className="error-message">{emailError}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            // name="Phone"
                            value={phone}
                            onChange={(e) => {
                              const value = e.target.value
                                .replace(/[^0-9,+]/g, "")
                                .slice(0, 35);
                              setPhone(value);
                              // if (value.length > 0 && value.length < 10) {
                              //   setPhoneError(
                              //     "Phone number must be at least 10 digits."
                              //   );
                              // } else {
                              //   setPhoneError(null);
                              // }
                            }}
                            placeholder={t("place.phone")}
                            required=""
                          />
                          {phoneError && (
                            <p className="error-message">{phoneError}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            // name="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder={t("place.subject")}
                            required=""
                          />
                          {subjectError && (
                            <p className="error-message">{subjectError}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box text-message-box">
                          <textarea
                            name="message"
                            value={massege}
                            onChange={(e) => setMassege(e.target.value)}
                            required=""
                            placeholder={t("place.message")}
                          ></textarea>
                          {massegeError && (
                            <p className="error-message">{massegeError}</p>
                          )}
                        </div>

                        <div className="contact-one__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-one__btn"
                            disabled={submitting}
                          >
                            {submitting ? "Sending..." : [t("button")]}
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
                  <div className="result"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="contact-one__right">
                <div className="contact-one__right-content sec-title-animation animation-style2">
                  <h3 className="contact-one__title title-animation">
                    {t("title")} <br />
                    {t("subtitle")}
                  </h3>
                  <div className="contact-one__contact-info">
                    <div className="contact-one__contact-icon">
                      <span className="icon-customer-service"></span>
                    </div>
                    <div className="contact-one__contact-icon-2">
                      <span className="icon-customer-service"></span>
                    </div>
                    <div className="contact-one__contact-number-box">
                      <p>{t("text")}</p>
                      <h5>
                        <Link href="tel:+79118880388">+7 (911) 888 03 88</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact One End */}
    </>
  );
}
