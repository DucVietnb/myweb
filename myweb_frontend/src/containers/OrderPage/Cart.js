import React, { Component } from "react";
import { connect } from "react-redux";
import "./Cart.scss";
import { push } from "connected-react-router";
import { withRouter } from "react-router";
import { isEmpty } from "lodash";
import * as actions from "../../store/actions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  handleBackHome = () => {
    this.props.history.push(`/home`);
  };
  render() {
    let { isEmpty } = this.state;
    return (
      <div className="cart__container">
        {isEmpty === false ? (
          <div className="cart--empty">
            <i className="fas fa-cart-arrow-down fa-7x"></i>
            <span>Không có sản phẩm nào trong cửa hàng</span>
            <button className="btn" onClick={this.handleBackHome}>
              Về trang chủ
            </button>
          </div>
        ) : (
          <div className="cart">
            <div className="cart__list">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "20px" }}>
                      #
                    </th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col" style={{ width: "100px" }}>
                      Đơn giá
                    </th>
                    <th scope="col" style={{ width: "100px" }}>
                      Số lượng
                    </th>
                    <th scope="col" style={{ width: "100px" }}>
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <i className="fas fa-times-circle"></i>
                    </th>
                    <td>
                      <div className="product-info">
                        <div className="product-img"></div>
                        <div className="product-name">
                          Android Tivi Sharp 32 Inch 2T-C32BG1X
                        </div>
                      </div>
                    </td>
                    <td>3,890,000₫</td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={1}
                      />
                    </td>
                    <td>3,890,000₫</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fas fa-times-circle"></i>
                    </th>
                    <td>
                      <div className="product-info">
                        <div className="product-img"></div>
                        <div className="product-name">
                          Android Tivi Sharp 32 Inch 2T-C32BG1X
                        </div>
                      </div>
                    </td>
                    <td>3,890,000₫</td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={1}
                      />
                    </td>
                    <td>3,890,000₫</td>
                  </tr>{" "}
                  <tr>
                    <th scope="row">
                      <i className="fas fa-times-circle"></i>
                    </th>
                    <td>
                      <div className="product-info">
                        <div className="product-img"></div>
                        <div className="product-name">
                          Android Tivi Sharp 32 Inch 2T-C32BG1X
                        </div>
                      </div>
                    </td>
                    <td>3,890,000₫</td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={1}
                      />
                    </td>
                    <td>3,890,000₫</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart__total">
              <span className="total__title">Tổng giá trị giỏ hàng</span>
              <div className="tempo">
                <span>Tạm tính</span>
                <span className="money">123,4565₫</span>
              </div>
              <div className="total">
                <span> Tổng</span>
                <span className="money">123,4565₫</span>
              </div>
              <button className="btn">Thanh toán</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
    cart: state.order.cartArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // deleteProductCart: (product) => dispatch(deleteProductCart(product)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
