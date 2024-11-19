import React from "react";
import homestyle from "./home.module.css";
import PaginationSwiper from "../../components/swiper";
import { Link } from "react-router-dom";
import FAQ from "../../components/faq/Faq";

export default function Home() {
  return (
    <>
      <PaginationSwiper />

      <div className={homestyle.card_company}>
        <div className={homestyle.card_container}>
          <div className={homestyle.title}>
            <h1>About us</h1>
          </div>
          <div className={homestyle.information}>
            <p>
              Our experience and professionalism allow us to help businesses in
              various industries optimize their processes and reach new heights
              of efficiency.
            </p>
          </div>
        </div>

        <div className={homestyle.card_container}>
          <div className={homestyle.title}>
            <h1>Our mission</h1>
          </div>
          <div className={homestyle.information}>
            <p>
              Our mission is to make businesses more successful and our values
              are quality, reliability and partnership with our customers.
            </p>
          </div>
        </div>

        <div className={homestyle.card_container}>
          <div className={homestyle.title}>
            <h1>Our team</h1>
          </div>
          <div className={homestyle.information}>
            <p>
              Our team is made up of experienced professionals ready to support
              our clients at every stage of their business journey.
            </p>
          </div>
        </div>
      </div>

      <section className={homestyle.programms}>
        <div className={homestyle.title_section}>
          <div className={homestyle.title_c}>
            <h1>1C programs</h1>
          </div>
          <Link
            to={"/catalog"}
            href=""
            className={homestyle.adress_all_progress}
          >
            <span>Buy program</span>
            <img src="/assets/lightarrow.svg" alt="arrow for site" />
          </Link>
        </div>
        <div className={homestyle.cards}>
          <div className={homestyle.card}>
            <div className={homestyle.card_icon}>
              <img src="/assets/_layer.svg" alt="Accounting Icon" />
            </div>
            <div className={homestyle.card_text}>1C: Accounting</div>
          </div>

          <div className={homestyle.card}>
            <div className={homestyle.card_icon}>
              <img src="/assets/_layer2.svg" alt="Accounting Icon" />
            </div>
            <div className={homestyle.card_text}>1C: Trade Management</div>
          </div>

          <div className={homestyle.card}>
            <div className={homestyle.card_icon}>
              <img src="/assets/_layer3.svg" alt="Accounting Icon" />
            </div>
            <div className={homestyle.card_text}>1C: Company Management</div>
          </div>

          <div className={homestyle.card}>
            <div className={homestyle.card_icon}>
              <img src="/assets/_layer4.svg" alt="Accounting Icon" />
            </div>
            <div className={homestyle.card_text}>1C: Company Management</div>
          </div>
        </div>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32px",
          }}
        >
          <div className={homestyle.button_all_program}>
            <a href="">All program</a>
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </section>
      </section>

      {/* PartnerShip */}
      <section className={homestyle.partnership}>
        <div className={homestyle.title_partnership}>
          <h1>Partnership</h1>
        </div>
        <div className={homestyle.partnership_cards}>
          <div className={homestyle.p_card}>
            <img src="../assets/p_card.png" alt="" />
          </div>
          <div className={homestyle.p_card}>
            <img src="../assets/p_card2.png" alt="" />
          </div>
          <div className={homestyle.p_card}>
            <img src="../assets/p_card-3.png" alt="" />
          </div>
          <div className={homestyle.p_card}>
            <img src="../assets/p_card4.png" alt="" />
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className={homestyle.application}>
        <div className={homestyle.left_site_application}>
          <div className={homestyle.title}>
            <h1>
              We are always ready to help you, fill in your details and we will
              get back to you.
            </h1>
          </div>
          <div className={homestyle.suptitle}>
            <p>
              Monero is the leading cryptocurrency with a focus on private and
              censorship-resistant transactions. The Monero wallet software
              allows you to easily manage your money.
            </p>
          </div>
          <div className={homestyle.correct}>
            <img src="/assets/correct.svg" alt="correct document" />
            <p>Consent to processing of personal data</p>
          </div>
        </div>
        <div className={homestyle.right_site_application}>
          <div className={homestyle.top}>
            <p>How may I address you?</p>
            <input type="text" placeholder="text" />
          </div>
          <div className={homestyle.middle}>
            <div className={homestyle.left_input}>
              <p>E-mail</p>
              <input type="text" placeholder="text" />
            </div>

            <div className={homestyle.right_input}>
              <p>Your phone number</p>
              <input type="text" placeholder="text" />
            </div>
          </div>
          <button className={homestyle.button_request}>
            Send Request
            <img src="/assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className={homestyle.faqContainer}>
        <FAQ />
      </section>

      {/* Contact */}
      <section className={homestyle.contact}>
        <div className={homestyle.contact_card}>
          <div className={homestyle.contact_title}>
            <h1>Contacts</h1>
          </div>
          <div className={homestyle.contact_suptitle}>
            <p>
              Monero is the leading cryptocurrency with a focus on private and
              censorship-resistant transactions. The Monero wallet software
              allows you to easily manage your money.
            </p>
          </div>

          <div className={homestyle.contact_info}>
            <div className={homestyle.date}>
              <img src="../assets/mail.svg" alt="mail" />
              <p>00000000000000@Gmail.com</p>
            </div>
            <div className={homestyle.date}>
              <img src="../assets/mail.svg" alt="mail" />
              <p>00000000000000@Gmail.com</p>
            </div>
            <div className={homestyle.date}>
              <img src="../assets/phone.svg" alt="" />
              <p>+000 000 000 000</p>
            </div>
            <div className={homestyle.date}>
              <img src="../assets/phone.svg" alt="" />
              <p>+000 000 000 000</p>
            </div>
          </div>
        </div>
        <div className={homestyle.map_card}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d93587.43158336771!2d74.61400970966798!3d42.86002578269436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1728306712382!5m2!1sru!2skg"
            width={600}
            height={450}
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
