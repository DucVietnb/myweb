import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProductDetail.scss";
import Breadcrumb from "../AllSection/Breadcrumb";
class DetailMain extends Component {
  render() {
    return (
      <>
        <div className="detail-main__container">
          <div className="main-title">
            Smart Tivi NanoCell LG 4K 43 inch 43NANO77TPA
          </div>
          <div className="main-brand">Hãng: LG</div>
          <div className="price">
            <span className="price--sale">22.600.900 ₫</span>

            <span className="price--real">14.900.900 ₫</span>
          </div>
          <div className="short-description">
            Nền tảng thông minh webOS với Freeview Play, Netflix, Disney +… Công
            nghệ LG NanoCell cho màu sắc tinh khiết ở 4K Ultra HD. <br />
            Bộ xử lý lõi tứ nhanh 4K cho hình ảnh và âm thanh tinh tế. <br />
            HDR cho rạp chiếu phim, thể thao và chơi game hấp dẫn.
            <br /> Xuất xứ indonesia. Bảo hành 24 tháng chính hãng, có người đến
            tận nhà.
          </div>
          <div className="choice">
            <button className="btn buy-now">Mua Ngay</button>
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
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMain);
