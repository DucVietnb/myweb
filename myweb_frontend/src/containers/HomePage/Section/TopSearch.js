import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

//import Slider
import Slider from "react-slick";

class TopSearch extends Component {
  render() {
    return (
      <div className="section__share">
        <div className="section__container top-search__container">
          <div className="section__header">
            <div className="header__title pointer__event">
              TOP SẢN PHẨM ĐƯỢC TÌM KIẾM NHIỀU NHẤT
            </div>
            <div className="btn pointer__event">XEM TẤT CẢ ⮞</div>
          </div>
          <div className="section__body">
            <Slider {...this.props.setting}>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-search__img" />
                  <div className="product__info">
                    <p className="top-search">
                      <span>Hot search !!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy lạnh Daikin Inverter
                    </span>
                    <span className="price--real">12.990.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">14.190.000 ₫</span>
                      <span className="price--percent">- 8%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.9<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(50)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopSearch);
