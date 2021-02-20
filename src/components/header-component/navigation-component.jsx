import React from "react";
import "./navigation-component.css";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Headers extends React.Component {
  constructor() {
    super();
    this.myElement = null;
    // reference to the animation
    this.myTween = null;

    this.state = {
      Links: [
        {
          id: 0,
          route: "/",
          linkName: "CURRENCY CONVERTER",
        },

        {
          id: 1,
          route: "/exchange",
          linkName: "CURRENT EXCHANGE RATES",
        },
      ],
      activeLink: 0,
      playSlide: "",
    };
  }

  handleClick(id) {
    this.setState({ activeLink: id });
    this.myTween = gsap.to(this.myElement, {
      duration: 0.3,
      x: 280 * id,
      ease: "none",
    });
  }

  render() {
    const { Links, activeLink } = this.state;
    return (
      <div>
        <nav>
          <div className="container">
            {Links.map((x) => {
              return (
                <Link key={x.id} to={x.route}>
                  {" "}
                  <div
                    className={activeLink == x.id ? "active-link" : ""}
                    onClick={() => {
                      this.handleClick(x.id);
                    }}
                  >
                    {x.linkName}
                  </div>
                </Link>
              );
            })}
            <div
              ref={(div) => (this.myElement = div)}
              className="animation-start-home"
            />
          </div>
        </nav>
      </div>
    );
  }
}
export default Headers;
Headers.propTypes = {
  Links: PropTypes.string,
  activeLink: PropTypes.number,
};
