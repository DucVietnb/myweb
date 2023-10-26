import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguage } from "../../../store/actions";
import { withRouter } from "react-router";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguage(language);
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  getLogin = () => {
    if (this.props.history) {
      this.props.history.push(`/login`);
    }
  };
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="header__container">
          <div className="header__navbar">
            <div className="header__logo">
              <div
                className="logo pointer__event"
                onClick={() => this.returnToHome()}
              ></div>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Bạn tìm gì..." />
              <i className="fas fa-search pointer__event"></i>
            </div>
            <div className="header__info">
              <div className="info__child pointer__event">
                <i class="fas fa-shopping-cart"></i>
                <div className="child__content">
                  <FormattedMessage id="header__navbar.cart" />
                </div>
              </div>
              <div
                className="info__child pointer__event"
                onClick={() => this.getLogin()}
              >
                <i class="fas fa-user"></i>{" "}
                <div className="child__content">
                  <FormattedMessage id="header__navbar.user" />
                </div>
              </div>
            </div>
            <div className="header__language">
              <div className="language language--vi pointer__event">
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div className="language language--en pointer__event">
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
          <div className="header__menu">
            <div className="header__category pointer__event hover__event--blue">
              <i class="fas fa-bars"></i>
              <div className="option_content hover__event--bigger">
                <FormattedMessage id="header__menu.category" />
              </div>
              <i class="fas fa-sort-down"></i>
              <div className="submenu">
                <ul>
                  <li>Tivi</li>
                  <li>Tủ lanh</li>
                  <li>Máy giặt</li>
                  <li>Điều hòa</li>
                  <li>Nóng lạnh</li>
                  <li>Sức khỏe, làm đẹp</li>
                </ul>
              </div>
            </div>
            <div className="header__support">
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-book"></i>
                <div className="option_content option--hover hover__event--bigger">
                  <FormattedMessage id="header__menu.news" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-percent"></i>
                <div className="option_content option--hover hover__event--bigger">
                  <FormattedMessage id="header__menu.promotion" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-shield-alt"></i>
                <div className="option_content option--hover hover__event--bigger">
                  <FormattedMessage id="header__menu.warranty" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-phone-volume"></i>
                <div className="option_content hover__event--bigger">
                  <FormattedMessage id="header__menu.advisory" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="banner__container">
          <div className="first__banner"></div>
        </div> */}
      </React.Fragment>
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
  return {
    changeLanguage: (language) => dispatch(changeLanguage(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
