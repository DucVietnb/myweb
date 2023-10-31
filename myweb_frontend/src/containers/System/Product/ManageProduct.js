import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageProduct.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as actions from "../../../store/actions";
import { CommonUtils } from "../../../utils";
import CreateProduct from "./CreateProduct";
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isCreateProduct: false,
    };
  }
  componentDidMount() {
    this.props.getAllProducts();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
      });
    }
  }
  // Finish!

  //img
  handleDeleteProduct = (product) => {
    this.props.deleteProductStart(product.id);
  };
  render() {
    console.log("check state in manage product", this.state.products);
    let arrProduct = this.state.products;
    return (
      <div className="manage-product__container">
        <div className="title mb-3">Quản lý sản phẩm</div>
        <CreateProduct products={this.props.products} />
        <div className="user-redux__body">
          <table id="TableManageUser">
            <tr>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Hãng sản phẩm</th>
              <th>Giá bán sản phẩm</th>
              <th>Action</th>
            </tr>
            {arrProduct &&
              arrProduct.length > 0 &&
              arrProduct.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.brand}</td>
                    <td>{item.truePrice}</td>
                    <td>
                      <button
                        className="btn--edit"
                        onClick={() => this.handleEditUser(item)}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        className="btn--delete"
                        onClick={() => this.handleDeleteProduct(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    products: state.product.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(actions.getAllProductsStart()),
    deleteProductStart: (id) => dispatch(actions.deleteProductStart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
