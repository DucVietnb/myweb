import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProductDetail.scss";
import Breadcrumb from "../AllSection/Breadcrumb";
import DefaultPromotion from "./DefaultPromotion";
import DetailImage from "./DetailImage";
import DetailMain from "./DetailMain";
import ProductInformation from "./ProductInformation";
//slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class ProductDetail extends Component {
  render() {
    let setting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Breadcrumb />
        <div className="product-detail__container">
          <DetailImage setting={setting} />
          <DetailMain />
          <DefaultPromotion />
        </div>
        <ProductInformation />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
