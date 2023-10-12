import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./NoSlide.scss";

class Spotlight extends Component {
  render() {
    return (
      <div className="section-spotlight">
        <div className="section-spotlight__container">
          <ul className="spotlight">
            <li>
              <a href="">
                <div className="spotlight__img prenium"></div>
                <span>Hàng cao cấp</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="spotlight__img tivi"></div>

                <span>
                  Tivi trưng bày <br />
                  Giảm đến 60%
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="spotlight__img prenium"></div>

                <span>Hàng cao cấp</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="spotlight__img tivi"></div>

                <span>
                  Tivi trưng bày <br />
                  Giảm đến 60%
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Spotlight);
