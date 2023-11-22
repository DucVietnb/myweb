import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./NoSlide.scss";
import { withRouter } from "react-router";

class CateFeature extends Component {
  goTivi = () => {
    setTimeout(() => {
      this.props.history.push(`/tivi`);
    }, 100);
  };
  goFridge = () => {
    setTimeout(() => {
      this.props.history.push(`/fridge`);
    }, 100);
  };
  goRefresher = () => {
    setTimeout(() => {
      this.props.history.push(`/refresher`);
    }, 100);
  };
  goWashingMachine = () => {
    setTimeout(() => {
      this.props.history.push(`/washing-machine`);
    }, 100);
  };
  render() {
    return (
      <div className="section__cate-feature">
        <div className="cate-feature__container">
          <div className="cate-feature__header">
            <div className="header__title">Danh mục nổi bật</div>
          </div>
          <div className="cate-feature__body pointer__event">
            <div className="catefeature__item">
              <div className="catefeature__oneitem" onClick={this.goTivi}>
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goFridge}>
                <div className="feature__img tulanh__img mx-auto" />
                <div className="feature__text">Tủ lạnh</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goTivi}>
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goFridge}>
                <div className="feature__img tulanh__img mx-auto" />
                <div className="feature__text">Tủ lạnh</div>
              </div>{" "}
              <div className="catefeature__oneitem" onClick={this.goTivi}>
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goFridge}>
                <div className="feature__img tulanh__img mx-auto" />
                <div className="feature__text">Tủ lạnh</div>
              </div>{" "}
              <div className="catefeature__oneitem" onClick={this.goTivi}>
                <div className="feature__img tivi__img mx-auto" />
                <div className="feature__text">Tivi</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goFridge}>
                <div className="feature__img tulanh__img mx-auto" />
                <div className="feature__text">Tủ lạnh</div>
              </div>
            </div>
            <div className="catefeature__item">
              <div className="catefeature__oneitem" onClick={this.goRefresher}>
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div
                className="catefeature__oneitem"
                onClick={this.goWashingMachine}
              >
                <div className="feature__img maygiat__img mx-auto" />
                <div className="feature__text">Máy giặt</div>
              </div>
              <div className="catefeature__oneitem" onClick={this.goRefresher}>
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div
                className="catefeature__oneitem"
                onClick={this.goWashingMachine}
              >
                <div className="feature__img maygiat__img mx-auto" />
                <div className="feature__text">Máy giặt</div>
              </div>{" "}
              <div className="catefeature__oneitem" onClick={this.goRefresher}>
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div
                className="catefeature__oneitem"
                onClick={this.goWashingMachine}
              >
                <div className="feature__img maygiat__img mx-auto" />
                <div className="feature__text">Máy giặt</div>
              </div>{" "}
              <div className="catefeature__oneitem" onClick={this.goRefresher}>
                <div className="feature__img air__img mx-auto" />
                <div className="feature__text">Máy lạnh</div>
              </div>
              <div
                className="catefeature__oneitem"
                onClick={this.goWashingMachine}
              >
                <div className="feature__img maygiat__img mx-auto" />
                <div className="feature__text">Máy giặt</div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CateFeature)
);
