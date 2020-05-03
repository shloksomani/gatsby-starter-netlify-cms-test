import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255, 255, 255 , 0.5)",
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <img
                src={logo}
                alt="BeMO"
                style={{ width: "167px", height: "100px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link
                className="navbar-item"
                to="/"
                activeClassName="navbar-active"
              >
                Main
              </Link>
              <Link className="navbar-item" to="/">
                How To Prepare
              </Link>
              <Link className="navbar-item" to="/">
                CDA Interview Questions
              </Link>
              <Link
                className="navbar-item"
                to="/contact"
                activeClassName="navbar-active"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
