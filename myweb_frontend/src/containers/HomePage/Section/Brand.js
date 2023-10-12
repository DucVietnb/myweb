import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./NoSlide.scss";
//import Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Brand extends Component {
  render() {
    let setting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    return (
      <div className="section-brand">
        <div className="section-brand__container">
          <Slider {...setting}>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand0__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand1__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand0__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand1__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand0__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand1__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand0__img" />
            </div>
            <div className="brand__cus pointer__event">
              <div className="bg-img brand1__img" />
            </div>
          </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Brand);
