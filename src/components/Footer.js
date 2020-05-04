import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";

import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered  has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div className="columns">
              <div className="column is-10">
                <section className="menu">
                  ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
                  <Link to="/" className="footerLink">
                    <u>Disclaimer & Privacy Policy</u>
                  </Link>
                  <a
                    href="mailto:info@bemoacademicconsulting.com"
                    className="footerLink"
                  >
                    <u>Contact Us</u>
                  </a>
                </section>
              </div>
              <div className="column is-2 social">
                <a
                  title="facebook"
                  href="https://facebook.com"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  f
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
