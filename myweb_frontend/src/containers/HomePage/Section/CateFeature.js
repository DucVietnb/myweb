import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./NoSlide.scss";

class CateFeature extends Component {
  render() {
    return (
      <div className="section__cate-feature">
        <div className="cate-feature__container">
          <div className="cate-feature__header">
            <div className="header__title">Danh mục nổi bật</div>
            <div className="btn pointer__event">XEM TẤT CẢ ⮞</div>
          </div>
          <div className="cate-feature__body pointer__event">
            <div className="catefeature__item">
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
            </div>
            <div className="catefeature__item">
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div className="catefeature__oneitem">
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CateFeature);
