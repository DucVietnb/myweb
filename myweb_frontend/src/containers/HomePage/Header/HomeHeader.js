import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguage } from "../../../store/actions";
import { withRouter } from "react-router";
import { push } from "connected-react-router";
import * as actions from "../../../store/actions";

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
    this.props.history.push(`/login`);
  };
  getNews = () => {
    this.props.history.push(`/news`);
  };
  handleLogout = () => {
    this.props.processLogout();
    this.props.navigate("/login");
  };

  render() {
    let language = this.props.language;
    let { isLoggedIn, processLogout, userInfo } = this.props;
    // console.log("check prop in home header", this.props);
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
                <i className="fas fa-shopping-cart"></i>
                <div className="child__content">
                  <FormattedMessage id="header__navbar.cart" />
                </div>
              </div>
              <div
                className="info__child pointer__event"
                onClick={() => this.getLogin()}
              >
                <i className="fas fa-user"></i>{" "}
                {isLoggedIn === false && (
                  <div className="child__content">
                    <FormattedMessage id="header__navbar.user" />
                    <div className="user__menu">
                      <ul>
                        <li className="welcome">
                          Xin chào, vui lòng đăng nhập
                        </li>
                        <li
                          className="button"
                          onClick={() => this.handleLogout()}
                        >
                          Đăng nhập
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {isLoggedIn === true && (
                  <div className="child__content">
                    {userInfo.fullName}
                    <div className="user__menu">
                      <ul>
                        <li className="welcome">
                          Xin chào,
                          {userInfo.fullName}
                        </li>
                        <li
                          className="button"
                          onClick={() => this.handleLogout()}
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
              <i className="fas fa-bars"></i>
              <div className="option_content hover__event--bigger">
                <FormattedMessage id="header__menu.category" />
              </div>
              <i className="fas fa-sort-down"></i>
              <div className="submenu">
                <ul>
                  <li className="hover__event--bigger">
                    <i className="fas fa-tv"></i>
                    <span>Tivi</span>
                    <i className="fas fa-chevron-right posi-left"></i>
                  </li>
                  <li className="hover__event--bigger">
                    <i className="fas fa-snowflake"></i>
                    <span>Tủ lạnh</span>
                    <i className="fas fa-chevron-right posi-left"></i>
                  </li>
                  <li className="hover__event--bigger">
                    <i className="fas fa-tint"></i>
                    <span>Máy giặt</span>
                    <i className="fas fa-chevron-right posi-left"></i>
                  </li>
                  <li className="hover__event--bigger">
                    <i class="fas fa-leaf"></i>
                    <span>Điều hòa</span>
                    <i className="fas fa-chevron-right posi-left"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__support">
              <div className="options pointer__event hover__event--blue">
                <i className="fas fa-book"></i>
                <div
                  className="option_content option--hover hover__event--bigger"
                  onClick={() => this.getNews()}
                >
                  <FormattedMessage id="header__menu.news" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i className="fas fa-percent"></i>
                <div className="option_content option--hover hover__event--bigger">
                  <FormattedMessage id="header__menu.promotion" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i className="fas fa-shield-alt"></i>
                <div className="option_content option--hover hover__event--bigger">
                  <FormattedMessage id="header__menu.warranty" />
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i className="fas fa-phone-volume"></i>
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
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => dispatch(changeLanguage(language)),
    processLogout: () => dispatch(actions.processLogout()),
    navigate: (path) => dispatch(push(path)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
