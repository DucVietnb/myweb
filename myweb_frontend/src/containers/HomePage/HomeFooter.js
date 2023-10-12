import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

//import Slider
import Slider from "react-slick";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer text-center">
        <p>
          &copy; 2023 Phạm Đức Việt. More information,
          <a href="https://www.facebook.com/VietTramCam" target="_blank">
            please visit my Facebook
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
