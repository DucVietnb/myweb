import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { withRouter } from "react-router";

import "./ProductDetail.scss";
class DetailMain extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  formatCash = (number) => {
    return number
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  };
  handleAddOrderproduct = () => {
    const { navigate, location } = this.props;
    if (this.props.isLoggedIn || this.props.isLoggedIn == false) {
      navigate(`/login`, { state: this.props.location?.pathname });
      console.log("check navi", location?.pathname);
    }
    console.log("check props", location?.pathname);
  };
  render() {
    let product = this.props.detailProduct;

    return (
      <>
        <div className="detail-main__container">
          <div className="main-title">
            {product.type} {product.name}
          </div>
          <div className="main-brand">Hãng: {product.type}</div>
          <div className="price">
            <span className="price--sale">
              {product.initPrice ? this.formatCash(product.initPrice) : ""} ₫
            </span>

            <span className="price--real">
              {product.truePrice ? this.formatCash(product.truePrice) : ""} ₫
            </span>
          </div>
          <div
            className="short-description"
            dangerouslySetInnerHTML={{ __html: product.contentHTML }}
          >
            {/* Nền tảng thông minh webOS với Freeview Play, Netflix, Disney +… Công
            nghệ LG NanoCell cho màu sắc tinh khiết ở 4K Ultra HD. <br />
            Bộ xử lý lõi tứ nhanh 4K cho hình ảnh và âm thanh tinh tế. <br />
            HDR cho rạp chiếu phim, thể thao và chơi game hấp dẫn.
            <br /> Xuất xứ indonesia. Bảo hành 24 tháng chính hãng, có người đến
            tận nhà. */}
          </div>
          <div className="choice">
            <button
              className="btn buy-now"
              onClick={this.handleAddOrderproduct}
            >
              Mua Ngay
            </button>
            <button className="btn add-cart">Thêm vào giỏ hàng</button>
            <button className="btn call">
              Gọi tư vấn <span>0123456789</span> ( 24/7 )
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    dataUser: state?.user?.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailMain)
);
