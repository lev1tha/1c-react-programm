import React from "react";
import { Link } from "react-router-dom";
import headerstyle from "./header.module.css";

export default function Header() {
  return (
    <header className={headerstyle.header}>
      <div className={headerstyle.left_site}>
        <div className="logotype">
          <Link to={"/"}>
            <img src="/assets/logo.svg" alt="logotype of company" />
          </Link>
        </div>
        <div>
          <nav className={headerstyle.navigation_menu}>
            <Link to="/">Project</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/service"}>Service</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/license"}>License</Link>
          </nav>
        </div>
      </div>

      <div className={headerstyle.widgets}>
        <nav>
          <a href="">
            En <span>/ </span>
          </a>
          <a href="">
            Ru <span>/ </span>
          </a>
          <a href="">Kg </a>
        </nav>
        <div className={headerstyle.catalog}>
          <Link to={"/service"}>Catalog</Link>
        </div>
      </div>
    </header>
  );
}
