import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguage } from "../../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguage(language);
  };
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="header__container">
          <div className="header__navbar">
            <div className="header__logo">
              <div className="logo pointer__event"></div>
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
              <div className="info__child pointer__event">
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
        <div className="banner__container">
          <div className="first__banner"></div>
          <div className="second__banner">
            <div className="first__slide"></div>
            <div className="second__slide"></div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
