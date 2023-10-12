import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

//import Slider
import Slider from "react-slick";

class BigPromotion extends Component {
  render() {
    return (
      <div className="section__share">
        <div className="section__container big-promotion__container">
          <div className="section__header">
            <div className="header__title pointer__event">
              TƯNG BỪNG KHUYẾN MẠI
            </div>
            <div className="btn pointer__event">XEM TẤT CẢ ⮞</div>
          </div>
          <div className="section__body">
            <Slider {...this.props.setting}>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img big-promotion__img" />
                  <div className="product__info">
                    <p>
                      <span>% Giá rẻ quá</span>
                    </p>
                    <span className="hover__event--blue">
                      Smart Tivi NanoCell
                    </span>
                    <span className="price--real">14.900.900 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">22.600.900 ₫</span>
                      <span className="price--percent">- 35%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.3<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(200)</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(BigPromotion);
