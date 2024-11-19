import React from "react";
import aboutstyle from "./aboutus.module.css";

export default function AboutUs() {
  return (
    <div>
      <main>
        <div className={aboutstyle.main_image}>
          <img
            src="../assets/487dff4144b19359f373f9f7fbe98a9e.jpeg"
            alt="люди типо работают"
          />
        </div>
        <div className={aboutstyle.top_text_info}>
          <h1 className={aboutstyle.title}>About Us</h1>
          <p>
            1C:Accounting 8 for Kyrgyzstan is designed to automate accounting
            and tax accounting at enterprises of the Kyrgyz Republic, in
            accordance with the current legislation, as well as for the
            preparation of mandatory (regulated) reporting forms in
            organizations engaged in any type of commercial activity: wholesale
            and retail trade, provision of services, production, etc. <br />
            <br />
            The software product is implemented on the technological platform
            "1C:Enterprise 8". <br />
            <br />
            "Accounting for Kyrgyzstan" is released in two versions: <br />
            1C:Accounting 8 for Kyrgyzstan. The basic version is for a small
            enterprise, where one accountant works in the program and does not
            need to change the standard solution for the specifics of accounting
            of the enterprise; <br />
            1C:Accounting 8 for Kyrgyzstan. PROF - is recommended when several
            users work in the program, as well as when it is possible to change
            the standard configuration for the specifics of accounting of a
            particular enterprise. <br />
            The Training version of the program is intended for studying and
            mastering the features of the configuration "Accounting for
            Kyrgyzstan". <br />
            "1C:Accounting 8 for Kyrgyzstan" allows you to keep accounting and
            tax accounting of economic activities of several organizations. At
            the same time, for each organization you can set up a separate
            information base, as well as in a common information base to reflect
            the accounting of several organizations. In addition, for each
            organization you can assign its own accounting policy (in the field
            of accounting and tax accounting). The ability to keep records of
            several organizations is useful for companies whose business
            activities are closely related to each other and which use common
            lists of goods, cost items, customers, etc. The ability to keep
            records of several organizations is useful for companies whose
            business activities are closely related to each other and which use
            common lists of goods, cost items, customers, etc.
            <br />
            <br />
            Functionality of the program "1C:Accounting 8 for Kyrgyzstan"
            <br />
            <br />
            "1C:Accounting 8 for Kyrgyzstan" is a universal program for
            automation of accounting and tax accounting. The program is based on
            a flexible technological platform of the system "1C:Enterprise 8",
            the capabilities of which allow you to create and modify a variety
            of business applications. The delivery set of the software product
            includes an application solution - configuration "Accounting for
            Kyrgyzstan". <br />
            <br />
            "1C:Accounting 8 for Kyrgyzstan" is designed for accounting and tax
            accounting, as well as for the preparation of mandatory (regulated)
            reporting forms in organizations engaged in any type of commercial
            activity: wholesale and retail trade, services, production, etc.
            <br />
            <br />
            Accounting and tax accounting are implemented in accordance with the
            current legislation of the Kyrgyz Republic.
          </p>
        </div>
      </main>

      <section className={aboutstyle.image_collaction}>
        <div style={{ border: "1px solid #fbbb00", borderRadius: "80px" }}>
          <img
            src="./assets/487dff4144b19359f373f9f7fbe98a9e.jpeg"
            alt="типо люди работают"
          />
        </div>
        <div style={{ border: "1px solid #fbbb00", borderRadius: "80px" }}>
          <img
            src="./assets/0266f02f3f2a7bdcc2966c6290fbc869.jpeg"
            alt="типо люди работают"
          />
        </div>
      </section>

      <div className={aboutstyle.bottom_text_info}>
        <p>
          "1C:Accounting 8 for Kyrgyzstan" allows you to keep accounting and tax
          accounting of economic activities of several organizations. At the
          same time, for each organization you can set up a separate information
          base, as well as in a common information base to reflect the
          accounting of several organizations. In addition, for each
          organization you can assign its own accounting policy (in the field of
          accounting and tax accounting). The ability to keep records of several
          organizations is useful for companies whose business activities are
          closely related to each other and which use common lists of goods,
          cost items, customers, etc. The ability to keep records of several
          organizations is useful for companies whose business activities are
          closely related to each other and which use common lists of goods,
          cost items, customers, etc. Functionality of the program
          "1C:Accounting 8 for Kyrgyzstan" "1C:Accounting 8 for Kyrgyzstan" is a
          universal program for automation of accounting and tax accounting. The
          program is based on a flexible technological platform of the system
          "1C:Enterprise 8", the capabilities of which allow you to create and
          modify a variety of business applications. The delivery set of the
          software product includes an application solution - configuration
          "Accounting for Kyrgyzstan".
          <br />
          <br />
          "1C:Accounting 8 for Kyrgyzstan" is designed for accounting and tax
          accounting, as well as for the preparation of mandatory (regulated)
          reporting forms in organizations engaged in any type of commercial
          activity: wholesale and retail trade, services, production, etc.
          <br />
          <br />
          Accounting and tax accounting are implemented in accordance with the
          current legislation of the Kyrgyz Republic.
        </p>
      </div>

      <section className={aboutstyle.application}>
        <div className={aboutstyle.left_site_application}>
          <div className={aboutstyle.application_title}>
            <h1>
              We are always ready to help you, fill in your details and we will
              get back to you.
            </h1>
          </div>
          <div className={aboutstyle.application_suptitle}>
            <p>
              Monero is the leading cryptocurrency with a focus on private and
              censorship-resistant transactions. The Monero wallet software
              allows you to easily manage your money.
            </p>
          </div>
          <div className={aboutstyle.correct}>
            <img src="../assets/correct.svg" alt="correct document" />
            <p>Consent to processing of personal data</p>
          </div>
        </div>
        <div className={aboutstyle.right_site_application}>
          <div className={aboutstyle.top}>
            <p>How may I address you?</p>
            <input type="text" placeholder="text" />
          </div>
          <div className={aboutstyle.middle}>
            <div className={aboutstyle.left_input}>
              <p>E-mail</p>
              <input type="text" placeholder="text" />
            </div>
            <div className={aboutstyle.right_input}>
              <p>Your phone number</p>
              <input type="text" placeholder="text" />
            </div>
          </div>
          <button className={aboutstyle.button_request}>
            Send Request
            <img src="../assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}
