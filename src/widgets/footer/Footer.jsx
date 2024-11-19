import React from "react";
import footerstyle from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={footerstyle.left_site_footer}>
        <div className={footerstyle.top_footer}>
          <div className={footerstyle.logo_footer}>
            <img src="../assets/biglogo.svg" alt="" />
          </div>
          <div className={footerstyle.social}>
            <div className={footerstyle.box_social}>
              <img src="../assets/instagram.svg" alt="instagram" />
            </div>
            <div className={footerstyle.box_social}>
              <img src="../assets/telegram.svg" alt="telegram" />
            </div>
            <div className={footerstyle.box_social}>
              <img src="../assets/whatsapp.svg" alt="whatsapp" />
            </div>
          </div>
          <div className={footerstyle.contact_info}>
            <div>
              <img src="../assets/mail.svg" alt="" />
              <p>00000000000000@Gmail.com</p>
            </div>
            <div>
              <img src="../assets/mail.svg" alt="" />
              <p>00000000000000@Gmail.com</p>
            </div>
            <div>
              <img src="../assets/phone.svg" alt="" />
              <p>+000 000 000 000</p>
            </div>
            <div>
              <img src="../assets/phone.svg" alt="" />
              <p>+000 000 000 000</p>
            </div>
          </div>
        </div>
        <div className={footerstyle.maker}>
          <a>ElDev Digital</a>
        </div>
      </div>
      <div className={footerstyle.right_site_footer}>
        <div className={footerstyle.top_navigate}>
          <nav>
            <a href="/">Project</a>
            <a href="/">Service </a>
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Feedback</a>
          </nav>
        </div>
        <div className={footerstyle.under_navigate}>
          <div className={footerstyle.licences}>
            <h1>1C licenses</h1>
            <p>Client for 1 workplace</p>
            <p>Client for 5 workplace</p>
            <p>Client for 10 workplace</p>
            <p>Client for 20 workplace</p>
            <p>Client for 50 workplace</p>
            <p>Client for 100 workplace</p>
          </div>
          <div className={footerstyle.model}>
            <h1>Model solutions for Kyrgyzstan</h1>
            <p>Training version</p>
            <p>Accounting for PROF</p>
            <p>Kit for 5 users</p>
            <p>Mobile cash desk</p>
            <p>Electronic delivery</p>
          </div>
          <div className={footerstyle.instalation}>
            <h1>1C installation</h1>
          </div>
          <div className={footerstyle.fresh}>
            <h1>1C:Fresh</h1>
          </div>
        </div>
        <div className={footerstyle.down_navigate}>
          <div className={footerstyle.server}>
            <h1>Server licenses</h1>
            <p>Server license (x86-32)</p>
            <p>Server license (x86-64)</p>
            <p>MINI server for 5 connections</p>
          </div>
          <div className={footerstyle.economic}>
            <h1>Economics Solutions</h1>
            <p>NPO configuration</p>
            <p>Pharmaceutical Company</p>
            <p>Boarding house</p>
          </div>
          <div className={footerstyle.ilustration_footer}>
            <img src="./assets/footerillustration.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
