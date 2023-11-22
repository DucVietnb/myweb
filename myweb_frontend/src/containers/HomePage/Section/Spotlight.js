import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./NoSlide.scss";
import { withRouter } from "react-router";

class Spotlight extends Component {
  getPrime = () => {
    setTimeout(() => {
      this.props.history.push(`/product-prime`);
    }, 100);
  };
  getTivi = () => {
    setTimeout(() => {
      this.props.history.push(`/tivi`);
    }, 100);
  };
  render() {
    return (
      <div className="section-spotlight">
        <div className="section-spotlight__container">
          <ul className="spotlight">
            <li onClick={this.getPrime}>
              <div className="spl">
                <div className="spotlight__img prenium"></div>
                <span>Hàng cao cấp</span>
              </div>
            </li>
            <li onClick={this.getTivi}>
              <div className="spl">
                <div className="spotlight__img tivi"></div>
                <span>
                  Tivi trưng bày <br />
                  Giảm đến 60%
                </span>
              </div>
            </li>
            <li onClick={this.getPrime}>
              <div className="spl">
                <div className="spotlight__img prenium"></div>
                <span>Hàng cao cấp</span>
              </div>
            </li>
            <li onClick={this.getTivi}>
              <div className="spl">
                <div className="spotlight__img tivi"></div>
                <span>
                  Tivi trưng bày <br />
                  Giảm đến 60%
                </span>
              </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Spotlight)
);
