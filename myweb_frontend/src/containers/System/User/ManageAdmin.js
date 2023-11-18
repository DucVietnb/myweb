import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
// import "./ManageAdmin.scss";
import "react-image-lightbox/style.css";
class ManageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return <div className="customer__container">quan ly cus</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAdmin);
