import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import Header from "../containers/Header-Login/Header";
import UpdateProduct from "../containers/System/Product/UpdateProduct";
import ManageProduct from "../containers/System/Product/ManageProduct";
import OrderChecked from "../containers/System/Order/OrderChecked";
import OrderChecking from "../containers/System/Order/OrderChecking";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              {/* <Route
                path="/system/product-manage-create"
                component={CreateProduct}
              /> */}
              <Route path="/system/product-manage" component={ManageProduct} />

              <Route path="/system/product-update" component={UpdateProduct} />
              <Route path="/system/order-checking" component={OrderChecking} />
              <Route path="/system/order-checked" component={OrderChecked} />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
    dataUser: state?.user?.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
