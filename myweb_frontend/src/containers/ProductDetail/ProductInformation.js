import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProductInformation.scss";
class ProductInformation extends Component {
  render() {
    return (
      <>
        <div className="product-infor__container">
          <div className="specifications">
            <div className="title__infor">Thông số kỹ thuật</div>
            <div className="content"></div>
          </div>
          <div className="description">
            <div className="title__infor">Mô tả</div>
            <div className="content"></div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductInformation);
