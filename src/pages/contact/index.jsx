import React from "react";
import contactstyle from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <section className={contactstyle.contacts_section}>
        <div className={contactstyle.container}>
          <div className={contactstyle.contacts_title}>
            <div className={contactstyle.title}>
              <p>Contacts</p>
            </div>
            <div className={contactstyle.suptitle}>
              "1C:Accounting 8 for Kyrgyzstan" allows you to keep accounting and
              tax accounting of economic activities of several organizations. At
              the same time, for each organization you can set up a separate
              information base, as well as in a common information base to
              reflect the accounting of several organizations. In addition, for
              each organization you can assign its own accounting policy (in the
              field of accounting and tax accounting). The ability to keep
              records of several organizations is useful for companies whose
              business activities are closely related to each other and which
              use common lists of goods, cost items, customers, etc.
            </div>
            <div className={contactstyle.contacts_box}>
              <div className={contactstyle.box}>
                <div className={contactstyle.icon}>
                  <img src="./images/phone.svg" alt="" />
                </div>
                <div className={contactstyle.box_title}>
                  <h3>General contacts</h3>
                  <p>+000 000 000 000</p>
                </div>
              </div>
              <div className={contactstyle.box}>
                <div className={contactstyle.icon}>
                  <img src="./images/phone.svg" alt="" />
                </div>
                <div className={contactstyle.box_title}>
                  <h3>Sales Department</h3>
                  <p>+000 000 000 000</p>
                </div>
              </div>
              <div className={contactstyle.box}>
                <div className={contactstyle.icon}>
                  <img src="./images/mail.svg" alt="" />
                </div>
                <div className={contactstyle.box_title}>
                  <h3>Our mail</h3>
                  <p>00000000@Gmail.com</p>
                  <p>00000000@Gmail.com</p>
                </div>
              </div>
              <div className={contactstyle.box}>
                <div className={contactstyle.icon}>
                  <img src="./images/location.svg" alt="" />
                </div>
                <div className={contactstyle.box_title}>
                  <h3>Our adress</h3>
                  <p>г.Osh ul. 316 Lenina str</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={contactstyle.location}>
        <div className={contactstyle.map_card}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d93587.43158336771!2d74.61400970966798!3d42.86002578269436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1728306712382!5m2!1sru!2skg"
            width={1400}
            height={500}
            style={{ borderRadius: "30px", border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className={contactstyle.application}>
        <div className={contactstyle.left_site_application}>
          <div className={contactstyle.application_title}>
            <h1>
              We are always ready to help you, fill in your details and we will
              get back to you.
            </h1>
          </div>
          <div className={contactstyle.application_suptitle}>
            <p>
              Monero is the leading cryptocurrency with a focus on private and
              censorship-resistant transactions. The Monero wallet software
              allows you to easily manage your money.
            </p>
          </div>
          <div className={contactstyle.correct}>
            <img src="../assets/correct.svg" alt="correct document" />
            <p>Consent to processing of personal data</p>
          </div>
        </div>
        <div className={contactstyle.right_site_application}>
          <div className={contactstyle.top}>
            <p>How may I address you?</p>
            <input type="text" placeholder="text" />
          </div>
          <div className={contactstyle.middle}>
            <div className={contactstyle.left_input}>
              <p>E-mail</p>
              <input type="text" placeholder="text" />
            </div>
            <div className={contactstyle.right_input}>
              <p>Your phone number</p>
              <input type="text" placeholder="text" />
            </div>
          </div>
          <button className={contactstyle.button_request}>
            Send Request
            <img src="../assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}
