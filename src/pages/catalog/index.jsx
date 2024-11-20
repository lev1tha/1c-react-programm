import React from "react";
import { Link } from "react-router-dom";
import catalogstyle from "./catalog.module.css";

export default function Catalog() {
  return (
    <div>
      <main>
        <div className={catalogstyle.card_container}>
          <div className={catalogstyle.card}>
            <div className={catalogstyle.right_site_map}>
              <div className={catalogstyle.box}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licenses</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
              <div className={catalogstyle.box_1}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licensesss</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={catalogstyle.left_site_map}>
              <div className={catalogstyle.box_2}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licenses</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className={catalogstyle.main}>
        <div className={catalogstyle.card_container_down}>
          <div className={catalogstyle.card_down}>
            <div className={catalogstyle.left_site_down}>
              <div className={catalogstyle.box_2}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licenses</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={catalogstyle.right_site_down}>
              <div className={catalogstyle.box}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licenses</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
              <div className={catalogstyle.box_1}>
                <img src="../assets/card.svg" alt="" />
                <div className={catalogstyle.box_title}>
                  <h1>Server licenses</h1>
                  <Link to="../aboutus/license.html">
                    Server license (x86-32)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    Server license (x86-64)
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                  <Link to="../aboutus/license.html">
                    MINI server for 5 connections
                    <span className={catalogstyle.material_symbols_outlined}>
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className={catalogstyle.application}>
        <div className={catalogstyle.left_site_application}>
          <div className={catalogstyle.application_title}>
            <h1>
              We are always ready to help you, fill in your details and we will
              get back to you.
            </h1>
          </div>
          <div className={catalogstyle.application_suptitle}>
            <p>
              Monero is the leading cryptocurrency with a focus on private and
              censorship-resistant transactions. The Monero wallet software
              allows you to easily manage your money.
            </p>
          </div>
          <div className={catalogstyle.correct}>
            <img src="../assets/correct.svg" alt="correct document" />
            <p>Consent to processing of personal data</p>
          </div>
        </div>
        <div className={catalogstyle.right_site_application}>
          <div className={catalogstyle.top}>
            <p>How may I address you?</p>
            <input type="text" placeholder="text" />
          </div>
          <div className={catalogstyle.middle}>
            <div className={catalogstyle.left_input}>
              <p>E-mail</p>
              <input type="text" placeholder="text" />
            </div>
            <div className={catalogstyle.right_input}>
              <p>Your phone number</p>
              <input type="text" placeholder="text" />
            </div>
          </div>
          <button className={catalogstyle.button_request}>
            Send Request
            <img src="../assets/arrow.svg" alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}
