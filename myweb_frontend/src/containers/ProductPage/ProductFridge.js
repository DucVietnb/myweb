import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
// import "./ProductFridge.scss";
import NavbarComponent from "./FilerComponent";
import Breadcrumb from "../AllSection/Breadcrumb";

class ProductFridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.props.getProductByTypeStart("Tủ lạnh");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
      });
    }
  }
  formatCash = (number) => {
    return number
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  };
  handleViewDetailProduct = (product) => {
    console.log("view doctor detail: ", product);
    if (this.props.history) {
      this.props.history.push(`/product-detail/${product.id}`);
    }
  };
  render() {
    let arrProducts = this.state.products;

    return (
      <>
        <Breadcrumb
          product={arrProducts && arrProducts[0] ? arrProducts[0] : ""}
        />
        <div className="product-page__container">
          <div className="title">Sản phẩm tủ lạnh</div>

          <div className="main-product">
            <div className="product__item">
              {arrProducts &&
                arrProducts.length > 0 &&
                arrProducts.map((item, index) => {
                  let imageBase64 = "";
                  if (item.avatar) {
                    imageBase64 = new Buffer(item.avatar, "base64").toString(
                      "binary"
                    );
                  }
                  return (
                    <div className="outline__body">
                      <div
                        className="body__cus pointer__event"
                        key={index}
                        onClick={() => this.handleViewDetailProduct(item)}
                      >
                        <div
                          className="bg-img"
                          style={{
                            backgroundImage: `url(${imageBase64})`,
                          }}
                        />
                        <div className="product__info">
                          <span className="hover__event--blue">
                            {item.type} {item.brand} {item.name}
                          </span>
                          <span className="price--real">
                            {this.formatCash(item.truePrice)}₫
                          </span>
                          <div className="price--sale">
                            <span className="price--begin">
                              {this.formatCash(item.initPrice)}₫
                            </span>
                            <span className="price--percent">
                              - {item.percent}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    products: state.product.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductByTypeStart: (type) =>
      dispatch(actions.getProductByTypeStart(type)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductFridge)
);
