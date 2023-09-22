import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
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
                <div className="child__content">Giỏ hàng</div>
              </div>
              <div className="info__child pointer__event">
                <i class="fas fa-user"></i>{" "}
                <div className="child__content">Tài khoản</div>
              </div>
            </div>
            <div className="header__language">
              <div className="language language--vi pointer__event">VN</div>
              <div className="language language--en pointer__event">EN</div>
            </div>
          </div>
          <div className="header__menu">
            <div className="header__category pointer__event hover__event--blue">
              <i class="fas fa-bars"></i>
              <div className="option_content hover__event--bigger">
                Danh mục sản phẩm
              </div>
              <i class="fas fa-sort-down"></i>
            </div>
            <div className="header__support">
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-book"></i>
                <div className="option_content option--hover hover__event--bigger">
                  Tin tức
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-percent"></i>
                <div className="option_content option--hover hover__event--bigger">
                  Khuyến mãi
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-shield-alt"></i>
                <div className="option_content option--hover hover__event--bigger">
                  Bảo hành
                </div>
              </div>
              <div className="options pointer__event hover__event--blue">
                <i class="fas fa-phone-volume"></i>
                <div className="option_content hover__event--bigger">
                  Tư vấn
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
