import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Sets the "active" class on the appropriate navigation link item
function Nav() {
  const [collapsible, setCollapsible] = useState(true);
  const handleCollapsible = () => setCollapsible(!collapsible);
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link className="navbar-brand" to="/">
        Alisha Saleh
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"  aria-expanded={!collapsible ? true : false} aria-label="Toggle navigation" onClick={handleCollapsible}>
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className={`${collapsible ? 'collapse' : ''} navbar-collapse`} id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
