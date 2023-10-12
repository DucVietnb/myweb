import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

//import Slider
import Slider from "react-slick";

class TopSeller extends Component {
  render() {
    return (
      <div className="section__share">
        <div className="section__container top-seller__container">
          <div className="section__header">
            <div className="header__title pointer__event">
              TOP SẢN PHẨM BÁN CHẠY
            </div>
            <div className="btn pointer__event">XEM TẤT CẢ ⮞</div>
          </div>
          <div className="section__body">
            <Slider {...this.props.setting}>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline__body">
                <div className="body__cus pointer__event">
                  <div className="bg-img top-seller__img" />
                  <div className="product__info">
                    <p className="top-seller">
                      <span>Top bán chạy !!!</span>
                    </p>
                    <span className="hover__event--blue">
                      Máy giặt Samsung Inverter
                    </span>
                    <span className="price--real">9.090.000 ₫</span>
                    <div className="price--sale">
                      <span className="price--begin">11.090.000 ₫</span>
                      <span className="price--percent">- 18%</span>
                    </div>
                    <div className="vote">
                      <span className="vote__star">
                        4.7<span style={{ fontSize: "30px" }}>⋆</span>
                      </span>
                      <span className="vote__number">(234)</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopSeller);
