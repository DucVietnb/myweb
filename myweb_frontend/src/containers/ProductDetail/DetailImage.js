import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProductDetail.scss";
import Slider from "react-slick";

class DetailImage extends Component {
  render() {
    return (
      <>
        <div className="detail-image__container">
          <Slider {...this.props.setting}>
            <div className="img__all">
              <div className="img__bg slider0__img"></div>
            </div>
            <div className="img__all">
              <div className="img__bg slider1__img"></div>
            </div>
            <div className="img__all">
              <div className="img__bg slider2__img"></div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailImage);
