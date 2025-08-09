"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function Whychoose() {
  const t = useTranslations("whyChoose");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [massege, setMassege] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
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
    formData.append("phone", phone);
    formData.append("massege", massege);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyY7GIgi_4ArDJ1otE45JS3BWripirdDjHhapbQvQcAySnsl9aJCjVja5L-vXlaONgq4g/exec",
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
      setPhone("");
      setMassege("");
    } catch (error) {
      console.error("Failed to Request! Please try again.", error);
      setError(error.message); // Set the error message
      setSuccess(false); // Make sure success is false in case of error
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      {/*Start slogan-one*/}
      <section className="slogan-one">
        <div
          className="whychoose__bg jarallax"
          style={{
            backgroundImage:
              " url(/assets/images/backgrounds/whychoose-cover.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="slogan-one__content text-center">
                <div className="title">
                  <h3>{t("title")}</h3>
                  <h4>
                    {t("subtitle1")}
                    <br />
                    {t("subtitle2")}
                  </h4>
                  <p>
                    {t("desc1")} <span>{t("desc2")}</span>
                    {/* <br /> */} {t("desc3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="contact-page__right">
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
                          placeholder={t("placeholder.name")}
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
                          type="text"
                          // name="Phone"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/[^0-9,+]/g, "")
                              .slice(0, 20);
                            setPhone(value);
                          }}
                          placeholder={t("placeholder.phone")}
                        />
                        {phoneError && (
                          <p className="error-message">{phoneError}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          name="message"
                          value={massege}
                          onChange={(e) => setMassege(e.target.value)}
                          maxLength={84}
                          placeholder={t("placeholder.message")}
                          required=""
                        ></input>
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
                          {submitting ? "Sending..." : [t("button")]}
                          <span className="icon-up-right-arrow"></span>
                        </button>
                        {success && (
                          <p className="success-message">
                            Thank you for your request. Our team will contact
                            you shortly!
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
      </section>
      {/*End slogan-one*/}
    </>
  );
}
