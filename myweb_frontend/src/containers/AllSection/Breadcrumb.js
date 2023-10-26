import React, { Component } from "react";
import { connect } from "react-redux";

import "./AllSection.scss";

class Breadcrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Trang chủ</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Điện tử</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Tivi
          </li>
        </ol>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
